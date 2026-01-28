"use client";

import { motion } from "framer-motion";
import { UserPlus, Eye, EyeOff, ShieldCheck, Mail, Lock, User, Loader2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function SignupPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });

    const password = watch("password");

    const onSubmit = async (data) => {
        setIsLoading(true);
        setError("");

        try {
            const response = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Something went wrong");
            }

            // Store email for verification page
            sessionStorage.setItem("verifyEmail", data.email);

            // In development, store token for easy testing
            if (result.devToken) {
                sessionStorage.setItem("devVerificationToken", result.devToken);
                console.log("🔐 Dev Verification Token:", result.devToken);
                console.log("🔗 Verification URL:", `${window.location.origin}/verify-email?token=${result.devToken}`);
            }

            router.push("/verify-email");
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    // Password validation rules
    const validatePassword = (value) => {
        if (value.length < 8) return "Password must be at least 8 characters";
        if (!/[A-Z]/.test(value)) return "Password must contain at least one uppercase letter";
        if (!/[a-z]/.test(value)) return "Password must contain at least one lowercase letter";
        if (!/[0-9]/.test(value)) return "Password must contain at least one number";
        return true;
    };

    return (
        <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-navy-950">

            {/* Left Panel: Branded & Visual */}
            <div className="hidden lg:flex flex-col justify-between p-12 bg-navy-900 border-r border-white/5 relative overflow-hidden">

                {/* Abstract Background Effects */}
                <div className="absolute inset-0">
                    <div className="absolute top-[-20%] right-[-20%] w-[80%] h-[80%] bg-purple-600/10 blur-[150px] rounded-full" />
                    <div className="absolute bottom-[-20%] left-[-20%] w-[80%] h-[80%] bg-blue-600/10 blur-[150px] rounded-full" />
                    {/* Animated Logo Orb */}
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full"
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
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">Bank-Grade Security</span>
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
                            Join the Future of <br />
                            <span className="text-gradient-green italic">Digital Investing</span>
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed mb-8">
                            "Join over 4.9 million investors who trust XPO for their financial journey. Get access to exclusive indexes and expert management."
                        </p>

                        {/* Feature List */}
                        <div className="space-y-4">
                            {[
                                "Access to 8+ Exclusive Indexes",
                                "Real-time Market Analytics",
                                "Zero Commission Trading",
                                "24/7 Expert Support"
                            ].map((feature, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm text-slate-300">
                                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                        <ShieldCheck className="w-3 h-3 text-emerald-400" />
                                    </div>
                                    {feature}
                                </div>
                            ))}
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

                <div className="max-w-[440px] w-full mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mb-8"
                    >
                        <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Create an account</h1>
                        <p className="text-slate-400">Start your 30-day free trial on the best investment platform.</p>
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
                        {/* Name Field */}
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Full Name</label>
                            <div className="relative group">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-electric-blue transition-colors" />
                                <input
                                    type="text"
                                    {...register("name", {
                                        required: "Name is required",
                                        minLength: { value: 2, message: "Name must be at least 2 characters" },
                                        maxLength: { value: 50, message: "Name must be less than 50 characters" },
                                    })}
                                    placeholder="John Doe"
                                    className={`w-full bg-navy-900 border ${errors.name ? "border-red-500/50" : "border-white/10"} rounded-xl py-4 pl-12 pr-4 text-white placeholder-slate-600 focus:outline-none focus:border-electric-blue focus:bg-navy-900/50 transition-all font-medium`}
                                />
                            </div>
                            {errors.name && (
                                <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
                            )}
                        </div>

                        {/* Email Field */}
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Email Address</label>
                            <div className="relative group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-electric-blue transition-colors" />
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

                        {/* Password Field */}
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Create Password</label>
                            <div className="relative group">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-electric-blue transition-colors" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    {...register("password", {
                                        required: "Password is required",
                                        validate: validatePassword,
                                    })}
                                    placeholder="Min. 8 characters"
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
                            <p className="text-xs text-slate-500 mt-1">Must contain at least 8 characters, one uppercase, one lowercase and one number.</p>
                        </div>

                        {/* Confirm Password Field */}
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Confirm Password</label>
                            <div className="relative group">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-electric-blue transition-colors" />
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    {...register("confirmPassword", {
                                        required: "Please confirm your password",
                                        validate: (value) =>
                                            value === password || "Passwords do not match",
                                    })}
                                    placeholder="Confirm your password"
                                    className={`w-full bg-navy-900 border ${errors.confirmPassword ? "border-red-500/50" : "border-white/10"} rounded-xl py-4 pl-12 pr-12 text-white placeholder-slate-600 focus:outline-none focus:border-electric-blue focus:bg-navy-900/50 transition-all font-medium`}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
                                >
                                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>
                            {errors.confirmPassword && (
                                <p className="text-red-400 text-xs mt-1">{errors.confirmPassword.message}</p>
                            )}
                        </div>

                        {/* Terms Checkbox */}
                        <div className="flex items-start gap-3 py-2">
                            <div className="flex items-center h-5">
                                <input
                                    id="terms"
                                    type="checkbox"
                                    {...register("terms", { required: "You must accept the terms" })}
                                    className="w-4 h-4 border border-white/10 rounded bg-navy-900 focus:ring-2 focus:ring-electric-blue text-electric-blue"
                                />
                            </div>
                            <label htmlFor="terms" className="text-sm text-slate-400 leading-tight">
                                I agree to the <Link href="#" className="text-white hover:text-electric-blue transition-colors underline decoration-slate-600 underline-offset-4 hover:decoration-electric-blue">Terms & Conditions</Link> and <Link href="#" className="text-white hover:text-electric-blue transition-colors underline decoration-slate-600 underline-offset-4 hover:decoration-electric-blue">Privacy Policy</Link>.
                            </label>
                        </div>
                        {errors.terms && (
                            <p className="text-red-400 text-xs -mt-2">{errors.terms.message}</p>
                        )}

                        <motion.button
                            whileHover={{ scale: isLoading ? 1 : 1.01 }}
                            whileTap={{ scale: isLoading ? 1 : 0.99 }}
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-500/20 active:shadow-none mt-2"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                    Creating Account...
                                </>
                            ) : (
                                <>
                                    Create Account <UserPlus className="w-4 h-4" />
                                </>
                            )}
                        </motion.button>
                    </form>

                    <div className="mt-8 pt-8 border-t border-white/5 text-center">
                        <p className="text-slate-400 text-sm">
                            Already have an account? <Link href="/login" className="text-white font-bold hover:text-electric-blue transition-colors underline decoration-slate-600 underline-offset-4 hover:decoration-electric-blue">Log in</Link>
                        </p>
                    </div>
                </div>
            </div>

        </main>
    );
}
