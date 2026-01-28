"use client";

import { motion } from "framer-motion";
import { Mail, ArrowLeft, Loader2, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { emailSchema } from "@/lib/validations";
import { useRouter } from "next/navigation";

export default function ForgotPasswordPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [devToken, setDevToken] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(emailSchema),
    });

    const onSubmit = async (data) => {
        setIsLoading(true);
        setError("");

        try {
            const response = await fetch("/api/auth/forgot-password", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Something went wrong");
            }

            // Store dev token for testing
            if (result.devToken) {
                setDevToken(result.devToken);
                console.log("🔐 Dev Reset Token:", result.devToken);
                console.log("🔗 Reset URL:", `${window.location.origin}/reset-password?token=${result.devToken}`);
            }

            setSuccess(true);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleDevReset = () => {
        if (devToken) {
            router.push(`/reset-password?token=${devToken}`);
        }
    };

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
                                    <Mail className="w-8 h-8 text-blue-400" />
                                </div>
                                <h1 className="text-2xl font-bold text-white mb-2">Forgot Password?</h1>
                                <p className="text-slate-400">
                                    Enter your email and we'll send you a link to reset your password.
                                </p>
                            </div>

                            {error && (
                                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                                    {error}
                                </div>
                            )}

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        {...register("email")}
                                        type="email"
                                        placeholder="you@example.com"
                                        className="w-full bg-navy-800/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                                    />
                                    {errors.email && (
                                        <p className="mt-2 text-sm text-red-400">{errors.email.message}</p>
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
                                            Sending...
                                        </>
                                    ) : (
                                        "Send Reset Link"
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
                            <h1 className="text-2xl font-bold text-white mb-3">Check Your Email</h1>
                            <p className="text-slate-400 mb-6">
                                If an account exists with that email, we've sent a password reset link.
                            </p>

                            {/* Dev mode helper */}
                            {devToken && (
                                <div className="mb-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
                                    <p className="text-yellow-400 text-xs font-medium mb-3">
                                        🔧 Development Mode
                                    </p>
                                    <button
                                        onClick={handleDevReset}
                                        className="w-full bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-400 font-medium py-2 px-4 rounded-lg transition-colors text-sm"
                                    >
                                        Go to Reset Password (Dev Only)
                                    </button>
                                </div>
                            )}

                            <Link
                                href="/login"
                                className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Back to login
                            </Link>
                        </div>
                    )}
                </motion.div>
            </div>
        </main>
    );
}
