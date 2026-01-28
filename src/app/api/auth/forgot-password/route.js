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
                { success: false, message: "Please enter a valid email address" },
                { status: 400 }
            );
        }

        const { email } = validation.data;

        // Connect to database
        await connectDB();

        // Find user
        const user = await User.findOne({ email: email.toLowerCase() });

        // Always return success to prevent email enumeration attacks
        if (!user) {
            return NextResponse.json(
                { success: true, message: "If an account exists, a password reset link has been sent." },
                { status: 200 }
            );
        }

        // Generate password reset token
        const resetToken = user.generatePasswordResetToken();
        await user.save();

        // Send reset email
        const resetUrl = `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/reset-password?token=${resetToken}`;
        await sendEmail(email, "passwordReset", [user.name, resetUrl]);

        return NextResponse.json(
            {
                success: true,
                message: "If an account exists, a password reset link has been sent.",
                // Only include token in development for testing
                ...(process.env.NODE_ENV === "development" && { devToken: resetToken }),
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Forgot password error:", error);
        return NextResponse.json(
            { success: false, message: "Something went wrong. Please try again." },
            { status: 500 }
        );
    }
}
