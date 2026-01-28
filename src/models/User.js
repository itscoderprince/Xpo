import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import crypto from "crypto";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            trim: true,
            minlength: [2, "Name must be at least 2 characters"],
            maxlength: [50, "Name must be less than 50 characters"],
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            lowercase: true,
            trim: true,
        },
        password: {
            type: String,
            required: [true, "Password is required"],
            minlength: [8, "Password must be at least 8 characters"],
            select: false, // Don't include password in queries by default
        },
        userType: {
            type: String,
            enum: ["investor", "trader", "admin"],
            default: "investor",
        },
        isEmailVerified: {
            type: Boolean,
            default: false,
        },
        emailVerificationToken: {
            type: String,
            select: false,
        },
        emailVerificationExpires: {
            type: Date,
            select: false,
        },
        otp: {
            type: String,
            select: false,
        },
        otpExpires: {
            type: Date,
            select: false,
        },
        lastLogin: {
            type: Date,
        },
        passwordResetToken: {
            type: String,
            select: false,
        },
        passwordResetExpires: {
            type: Date,
            select: false,
        },
    },
    {
        timestamps: true,
    }
);

// Hash password before saving
userSchema.pre("save", async function () {
    if (!this.isModified("password")) return;

    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
});

// Compare password method
userSchema.methods.comparePassword = async function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};

// Generate 6-digit OTP
userSchema.methods.generateOTP = function () {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    this.otp = otp;
    this.otpExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes
    return otp;
};

// Verify OTP
userSchema.methods.verifyOTP = function (candidateOTP) {
    if (!this.otp || !this.otpExpires) return false;
    if (new Date() > this.otpExpires) return false;
    return this.otp === candidateOTP;
};

// Generate email verification token
userSchema.methods.generateEmailVerificationToken = function () {
    const token = crypto.randomUUID();
    this.emailVerificationToken = token;
    this.emailVerificationExpires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours
    return token;
};

// Generate password reset token
userSchema.methods.generatePasswordResetToken = function () {
    const token = crypto.randomUUID();
    this.passwordResetToken = token;
    this.passwordResetExpires = new Date(Date.now() + 60 * 60 * 1000); // 1 hour
    return token;
};

// Prevent model recompilation in development
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
