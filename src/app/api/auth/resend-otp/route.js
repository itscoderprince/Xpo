import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import User from "@/models/User";
import { sendEmail } from "@/lib/email";
import { emailSchema } from "@/lib/validations";

export async function POST(request) {
    try {
        const body = await request.json();

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
