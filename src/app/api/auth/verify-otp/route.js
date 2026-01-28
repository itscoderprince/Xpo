import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import User from "@/models/User";
import { generateToken } from "@/lib/jwt";
import { otpSchema, emailSchema } from "@/lib/validations";

export async function POST(request) {
    try {
        // Parse request body
        const body = await request.json();

        // Validate with Zod
        const validation = otpSchema.safeParse({ otp: body.otp });
        const emailValidation = emailSchema.safeParse({ email: body.email });

        if (!validation.success || !emailValidation.success) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Invalid OTP or email format",
                },
                { status: 400 }
            );
        }

        const { otp } = validation.data;
        const { email } = emailValidation.data;

        // Connect to database
        await connectDB();

        // Find user with OTP
        const user = await User.findOne({
            email: email.toLowerCase()
        }).select("+otp +otpExpires");

        if (!user) {
            return NextResponse.json(
                { success: false, message: "User not found" },
                { status: 404 }
            );
        }

        // Verify OTP
        const isOTPValid = user.verifyOTP(otp);
        if (!isOTPValid) {
            return NextResponse.json(
                { success: false, message: "Invalid or expired OTP" },
                { status: 401 }
            );
        }

        // Clear OTP after successful verification
        user.otp = undefined;
        user.otpExpires = undefined;
        user.lastLogin = new Date();
        await user.save();

        // Generate JWT token
        const token = await generateToken({
            userId: user._id.toString(),
            email: user.email,
            userType: user.userType,
        });

        // Create response with cookie
        const response = NextResponse.json(
            {
                success: true,
                message: "Login successful",
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    userType: user.userType,
                },
                // Return redirect path based on user type
                redirectTo: getRedirectPath(user.userType),
            },
            { status: 200 }
        );

        // Set HTTP-only cookie with token
        response.cookies.set("auth_token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 60 * 60 * 24 * 7, // 7 days
            path: "/",
        });

        return response;
    } catch (error) {
        console.error("OTP verification error:", error);
        return NextResponse.json(
            { success: false, message: "Something went wrong. Please try again." },
            { status: 500 }
        );
    }
}

// Helper function to determine redirect path based on user type
function getRedirectPath(userType) {
    switch (userType) {
        case "admin":
            return "/admin";
        case "trader":
            return "/dashboard/trader";
        case "investor":
        default:
            return "/dashboard";
    }
}
