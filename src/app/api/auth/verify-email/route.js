import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import User from "@/models/User";

export async function POST(request) {
    try {
        const { token } = await request.json();

        if (!token) {
            return NextResponse.json(
                { success: false, message: "Verification token is required" },
                { status: 400 }
            );
        }

        // Connect to database
        await connectDB();

        // Find user with valid verification token
        const user = await User.findOne({
            emailVerificationToken: token,
            emailVerificationExpires: { $gt: new Date() },
        }).select("+emailVerificationToken +emailVerificationExpires");

        if (!user) {
            return NextResponse.json(
                { success: false, message: "Invalid or expired verification link" },
                { status: 400 }
            );
        }

        // Mark email as verified
        user.isEmailVerified = true;
        user.emailVerificationToken = undefined;
        user.emailVerificationExpires = undefined;
        await user.save();

        return NextResponse.json(
            { success: true, message: "Email verified successfully! You can now login." },
            { status: 200 }
        );
    } catch (error) {
        console.error("Email verification error:", error);
        return NextResponse.json(
            { success: false, message: "Something went wrong. Please try again." },
            { status: 500 }
        );
    }
}
