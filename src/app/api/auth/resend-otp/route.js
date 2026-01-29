import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import User from "@/models/User";
import { sendEmail } from "@/lib/email";
import { emailSchema } from "@/lib/validations";
import rateLimit from "@/lib/rate-limit";

const limiter = rateLimit({
    limit: 3, // 3 requests
    interval: 60000 * 5, // per 5 minutes
});

export async function POST(request) {
    try {
        const body = await request.json();

        // Rate limiting based on IP or email
        const ip = request.headers.get("x-forwarded-for") || "anonymous";
        try {
            await limiter.check(`resend-${ip}-${body.email}`);
        } catch (error) {
            return NextResponse.json(
                { success: false, message: "Please wait a few minutes before resending another OTP." },
                { status: 429 }
            );
        }

        // Validate email
        const validation = emailSchema.safeParse({ email: body.email });
        if (!validation.success) {
            return NextResponse.json(
                { success: false, message: "Invalid email format" },
                { status: 400 }
            );
        }

        const { email } = validation.data;

        // Connect to database
        await connectDB();

        // Find user
        const user = await User.findOne({
            email: email.toLowerCase()
        }).select("+otp +otpExpires");

        if (!user) {
            return NextResponse.json(
                { success: false, message: "User not found" },
                { status: 404 }
            );
        }

        // Generate new OTP
        const otp = user.generateOTP();
        await user.save();

        // Send OTP email
        await sendEmail(email, "otp", [user.name, otp]);

        return NextResponse.json(
            {
                success: true,
                message: "OTP resent successfully",
                // Only include OTP in development for testing
                ...(process.env.NODE_ENV === "development" && { devOtp: otp })
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Resend OTP error:", error);
        return NextResponse.json(
            { success: false, message: "Something went wrong. Please try again." },
            { status: 500 }
        );
    }
}
