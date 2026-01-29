import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import User from "@/models/User";
import { sendEmail } from "@/lib/email";
import { signupSchema } from "@/lib/validations";
import rateLimit from "@/lib/rate-limit";

const limiter = rateLimit({
    limit: 3, // 3 signups
    interval: 60000 * 60, // per hour
});

export async function POST(request) {
    try {
        // Parse and validate request body
        const body = await request.json();

        // Rate limiting based on IP
        const ip = request.headers.get("x-forwarded-for") || "anonymous";
        try {
            await limiter.check(`signup-${ip}`);
        } catch (error) {
            return NextResponse.json(
                { success: false, message: "Too many signup attempts. Please try again in an hour." },
                { status: 429 }
            );
        }

        // Validate with Zod
        const validation = signupSchema.safeParse(body);
        if (!validation.success) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Validation failed",
                    errors: validation.error.flatten().fieldErrors
                },
                { status: 400 }
            );
        }

        const { name, email, password } = validation.data;

        // Connect to database
        await connectDB();

        // Check if user already exists
        const existingUser = await User.findOne({ email: email.toLowerCase() });
        if (existingUser) {
            return NextResponse.json(
                { success: false, message: "An account with this email already exists" },
                { status: 400 }
            );
        }

        // Create new user
        const user = new User({
            name,
            email: email.toLowerCase(),
            password,
        });

        // Generate email verification token
        const verificationToken = user.generateEmailVerificationToken();
        await user.save();

        // Send verification email
        const verificationUrl = `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/verify-email?token=${verificationToken}`;

        await sendEmail(email, "verification", [name, verificationUrl]);

        // Return success (don't expose verification token in response for security)
        return NextResponse.json(
            {
                success: true,
                message: "Account created successfully. Please check your email to verify.",
            },
            { status: 201 }
        );
    } catch (error) {
        console.error("Signup error:", error);
        return NextResponse.json(
            { success: false, message: "Something went wrong. Please try again." },
            { status: 500 }
        );
    }
}
