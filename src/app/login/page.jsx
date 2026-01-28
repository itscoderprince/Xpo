"use client";

import { motion } from "framer-motion";
import { LogIn, Eye, EyeOff, Sparkles, User, Lock, ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (data) => {
        setIsLoading(true);
        setError("");

        try {
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Something went wrong");
            }

            // Store email for OTP page
            sessionStorage.setItem("otpEmail", data.email);

            // In development, store OTP for testing
            if (result.devOtp) {
                sessionStorage.setItem("devOtp", result.devOtp);
                console.log("🔐 Dev OTP:", result.devOtp);
            }

            router.push("/verify-otp");
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-navy-950">

            {/* Left Panel: Branded & Visual */}
            <div className="hidden lg:flex flex-col justify-between p-12 bg-navy-900 border-r border-white/5 relative overflow-hidden">

                {/* Abstract Background Effects */}
                <div className="absolute inset-0">
                    <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-blue-600/10 blur-[150px] rounded-full" />
                    <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[80%] bg-emerald-600/10 blur-[150px] rounded-full" />

                    {/* Animated Logo Orb (Reused Design element) */}
                    <motion.div
                        animate={{
                            rotate: 360,
                        }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/5 rounded-full"
                    />
                    <motion.div
                        animate={{
                            rotate: -360,
                        }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-white/5 rounded-full border-dashed"
                    />
                </div>

                {/* Content */}
                <div className="relative z-10">
                    <Link href="/" className="flex items-center gap-3 group w-fit">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center font-black text-xl text-white shadow-lg shadow-blue-500/20">
                            X
                        </div>
                        <span className="text-2xl font-black tracking-tighter text-white">XPO</span>
                    </Link>
                </div>

                <div className="relative z-10 max-w-md">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full w-fit mb-6">
                            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">Trusted by 4.9M+ Traders</span>
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
                            Unlock Your <br />
                            <span className="text-gradient-blue italic">Financial Potential</span>
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            "XPO provides the most intuitive platform for diverse asset management. It's not just trading; it's smart investing."
                        </p>
                        <div className="mt-8 flex items-center gap-4">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-navy-900 bg-slate-800 overflow-hidden">
                                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="User" />
                                    </div>
                                ))}
                            </div>
                            <div className="text-sm font-bold text-white">
                                Join our community
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="relative z-10 text-xs text-slate-500 font-medium">
                    © 2026 XPO Investment Management.
                </div>
            </div>

            {/* Right Panel: Clean Form */}
            <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-24 py-12 relative">
                <div className="lg:hidden absolute top-6 left-6">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center font-black text-white">X</div>
                        <span className="text-xl font-black tracking-tighter text-white">XPO</span>
                    </Link>
                </div>

                <div className="max-w-[400px] w-full mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mb-10"
                    >
                        <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Welcome back</h1>
                        <p className="text-slate-400">Please enter your details to sign in.</p>
                    </motion.div>

                    {error && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm"
                        >
                            {error}
                        </motion.div>
                    )}

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Email Address</label>
                            <div className="relative group">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-electric-blue transition-colors" />
                                <input
                                    type="email"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Please enter a valid email address",
                                        },
                                    })}
                                    placeholder="name@company.com"
                                    className={`w-full bg-navy-900 border ${errors.email ? "border-red-500/50" : "border-white/10"} rounded-xl py-4 pl-12 pr-6 text-white placeholder-slate-600 focus:outline-none focus:border-electric-blue focus:bg-navy-900/50 transition-all font-medium`}
                                />
                            </div>
                            {errors.email && (
                                <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Password</label>
                                <Link href="#" className="text-xs font-bold text-electric-blue hover:text-blue-400 transition-colors">Forgot Password?</Link>
                            </div>
                            <div className="relative group">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-electric-blue transition-colors" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    {...register("password", {
                                        required: "Password is required",
                                    })}
                                    placeholder="••••••••"
                                    className={`w-full bg-navy-900 border ${errors.password ? "border-red-500/50" : "border-white/10"} rounded-xl py-4 pl-12 pr-12 text-white placeholder-slate-600 focus:outline-none focus:border-electric-blue focus:bg-navy-900/50 transition-all font-medium`}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
                                >
                                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>
                            {errors.password && (
                                <p className="text-red-400 text-xs mt-1">{errors.password.message}</p>
                            )}
                        </div>

                        <motion.button
                            whileHover={{ scale: isLoading ? 1 : 1.01 }}
                            whileTap={{ scale: isLoading ? 1 : 0.99 }}
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-electric-blue hover:bg-blue-600 disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-500/20 active:shadow-none mt-2"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                    Signing in...
                                </>
                            ) : (
                                <>
                                    Sign in <LogIn className="w-4 h-4" />
                                </>
                            )}
                        </motion.button>
                    </form>

                    <div className="mt-4 text-center">
                        <Link href="/forgot-password" className="text-slate-400 hover:text-white text-sm transition-colors">
                            Forgot your password?
                        </Link>
                    </div>

                    <div className="mt-8 pt-8 border-t border-white/5 text-center">
                        <p className="text-slate-400 text-sm">
                            Don't have an account? <Link href="/signup" className="text-white font-bold hover:text-electric-blue transition-colors underline decoration-slate-600 underline-offset-4 hover:decoration-electric-blue">Sign up for free</Link>
                        </p>
                    </div>

                    <div className="mt-8 text-center lg:hidden">
                        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-white text-sm font-medium transition-colors">
                            <ArrowLeft className="w-4 h-4" /> Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
