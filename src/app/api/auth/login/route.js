import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import User from "@/models/User";
import { sendEmail } from "@/lib/email";
import { loginSchema } from "@/lib/validations";
import rateLimit from "@/lib/rate-limit";

const limiter = rateLimit({
    limit: 5, // 5 attempts
    interval: 60000, // per minute
});

export async function POST(request) {
    try {
        // Parse and validate request body
        const body = await request.json();

        // Rate limiting based on IP or email
        const ip = request.headers.get("x-forwarded-for") || "anonymous";
        try {
            await limiter.check(`${ip}-${body.email}`);
        } catch (error) {
            return NextResponse.json(
                { success: false, message: "Too many login attempts. Please try again later." },
                { status: 429 }
            );
        }

        // Validate with Zod
        const validation = loginSchema.safeParse(body);
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

        const { email, password } = validation.data;

        // Connect to database
        await connectDB();

        // Find user and include password for comparison
        const user = await User.findOne({ email: email.toLowerCase() }).select("+password +otp +otpExpires");

        if (!user) {
            return NextResponse.json(
                { success: false, message: "Invalid email or password" },
                { status: 401 }
            );
        }

        // Check if email is verified
        if (!user.isEmailVerified) {
            return NextResponse.json(
                { success: false, message: "Please verify your email before logging in" },
                { status: 401 }
            );
        }

        // Verify password
        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) {
            return NextResponse.json(
                { success: false, message: "Invalid email or password" },
                { status: 401 }
            );
        }

        // Generate OTP
        const otp = user.generateOTP();
        await user.save();

        // Send OTP email
        await sendEmail(email, "otp", [user.name, otp]);

        return NextResponse.json(
            {
                success: true,
                message: "OTP sent to your email",
                email: email,
                // Only include OTP in development for testing
                ...(process.env.NODE_ENV === "development" && { devOtp: otp })
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Login error:", error);
        return NextResponse.json(
            { success: false, message: "Something went wrong. Please try again." },
            { status: 500 }
        );
    }
}
