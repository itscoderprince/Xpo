import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import User from "@/models/User";
import { z } from "zod";

// Validation schema for reset password
const resetPasswordSchema = z.object({
    token: z.string().min(1, "Reset token is required"),
    password: z
        .string()
        .min(8, "Password must be at least 8 characters")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/[a-z]/, "Password must contain at least one lowercase letter")
        .regex(/[0-9]/, "Password must contain at least one number"),
});

export async function POST(request) {
    try {
        const body = await request.json();

        // Validate input
        const validation = resetPasswordSchema.safeParse(body);
        if (!validation.success) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Validation failed",
                    errors: validation.error.flatten().fieldErrors,
                },
                { status: 400 }
            );
        }

        const { token, password } = validation.data;

        // Connect to database
        await connectDB();

        // Find user with valid reset token
        const user = await User.findOne({
            passwordResetToken: token,
            passwordResetExpires: { $gt: new Date() },
        }).select("+passwordResetToken +passwordResetExpires +password");

        if (!user) {
            return NextResponse.json(
                { success: false, message: "Invalid or expired reset link" },
                { status: 400 }
            );
        }

        // Update password (will be hashed by pre-save hook)
        user.password = password;
        user.passwordResetToken = undefined;
        user.passwordResetExpires = undefined;
        await user.save();

        return NextResponse.json(
            { success: true, message: "Password reset successful! You can now login." },
            { status: 200 }
        );
    } catch (error) {
        console.error("Reset password error:", error);
        return NextResponse.json(
            { success: false, message: "Something went wrong. Please try again." },
            { status: 500 }
        );
    }
}
