"use client";

import { motion } from "framer-motion";
import { Lock, ArrowLeft, Loader2, CheckCircle2, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams, useRouter } from "next/navigation";
import { z } from "zod";

// Validation schema
const resetPasswordSchema = z
    .object({
        password: z
            .string()
            .min(8, "Password must be at least 8 characters")
            .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
            .regex(/[a-z]/, "Password must contain at least one lowercase letter")
            .regex(/[0-9]/, "Password must contain at least one number"),
        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });

export default function ResetPasswordPage() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const token = searchParams.get("token");

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(resetPasswordSchema),
    });

    const onSubmit = async (data) => {
        if (!token) {
            setError("Invalid reset link");
            return;
        }

        setIsLoading(true);
        setError("");

        try {
            const response = await fetch("/api/auth/reset-password", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ token, password: data.password }),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Something went wrong");
            }

            setSuccess(true);

            // Redirect to login after 2 seconds
            setTimeout(() => {
                router.push("/login");
            }, 2000);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    if (!token) {
        return (
            <main className="min-h-screen flex items-center justify-center bg-navy-950 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-600/10 blur-[150px] rounded-full" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-600/10 blur-[150px] rounded-full" />
                </div>
                <div className="relative z-10 text-center">
                    <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Lock className="w-10 h-10 text-red-400" />
                    </div>
                    <h1 className="text-2xl font-bold text-white mb-3">Invalid Reset Link</h1>
                    <p className="text-slate-400 mb-6">This password reset link is invalid or has expired.</p>
                    <Link
                        href="/forgot-password"
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                        Request a new reset link
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen flex items-center justify-center bg-navy-950 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-600/10 blur-[150px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-600/10 blur-[150px] rounded-full" />
            </div>

            <div className="relative z-10 w-full max-w-md mx-auto px-6">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 justify-center mb-12">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center font-black text-2xl text-white shadow-lg shadow-blue-500/20">
                        X
                    </div>
                    <span className="text-3xl font-black tracking-tighter text-white">XPO</span>
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-navy-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
                >
                    {!success ? (
                        <>
                            <div className="text-center mb-8">
                                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Lock className="w-8 h-8 text-blue-400" />
                                </div>
                                <h1 className="text-2xl font-bold text-white mb-2">Reset Password</h1>
                                <p className="text-slate-400">Enter your new password below.</p>
                            </div>

                            {error && (
                                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                                    {error}
                                </div>
                            )}

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-2">
                                        New Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            {...register("password")}
                                            type={showPassword ? "text" : "password"}
                                            placeholder="••••••••"
                                            className="w-full bg-navy-800/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all pr-12"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
                                        >
                                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                        </button>
                                    </div>
                                    {errors.password && (
                                        <p className="mt-2 text-sm text-red-400">{errors.password.message}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-2">
                                        Confirm Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            {...register("confirmPassword")}
                                            type={showConfirmPassword ? "text" : "password"}
                                            placeholder="••••••••"
                                            className="w-full bg-navy-800/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all pr-12"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
                                        >
                                            {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                        </button>
                                    </div>
                                    {errors.confirmPassword && (
                                        <p className="mt-2 text-sm text-red-400">{errors.confirmPassword.message}</p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-electric-blue hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Resetting...
                                        </>
                                    ) : (
                                        "Reset Password"
                                    )}
                                </button>
                            </form>

                            <div className="mt-8 text-center">
                                <Link
                                    href="/login"
                                    className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                    Back to login
                                </Link>
                            </div>
                        </>
                    ) : (
                        <div className="text-center">
                            <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                            </div>
                            <h1 className="text-2xl font-bold text-white mb-3">Password Reset!</h1>
                            <p className="text-slate-400 mb-6">
                                Your password has been successfully reset. Redirecting to login...
                            </p>
                        </div>
                    )}
                </motion.div>
            </div>
        </main>
    );
}
