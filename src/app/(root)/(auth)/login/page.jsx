"use client";

import { motion } from "framer-motion";
import { LogIn, Eye, EyeOff, Sparkles, User, Lock, ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Particles } from "@/components/ui/particles";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
        <main className="h-screen w-full grid grid-cols-1 lg:grid-cols-2 bg-navy-950 overflow-hidden">

            {/* Left Panel: Visual Experience */}
            <div className="hidden lg:flex flex-col justify-between p-12 bg-navy-900 border-r border-white/5 relative overflow-hidden">

                {/* Background Particles */}
                <div className="absolute inset-0 z-0">
                    <Particles
                        className="absolute inset-0"
                        quantity={150}
                        ease={80}
                        color="#3b82f6"
                        refresh
                    />
                </div>

                {/* Abstract Glows */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-blue-600/10 blur-[150px] rounded-full" />
                    <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[80%] bg-emerald-600/10 blur-[150px] rounded-full" />
                </div>

                {/* Brand Header */}
                <div className="relative z-10">
                    <Link href="/" className="flex items-center gap-3 group w-fit">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center font-black text-xl text-white shadow-lg shadow-blue-500/20">
                            X
                        </div>
                        <span className="text-2xl font-black tracking-tighter text-white">XPO</span>
                    </Link>
                </div>

                {/* Central Visual */}
                <div className="relative z-10 max-w-lg">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full w-fit backdrop-blur-md">
                            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">Trusted by 4.9M+ Traders</span>
                        </div>

                        <h2 className="text-5xl font-bold text-white leading-tight">
                            Access Global <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                                Financial Markets
                            </span>
                        </h2>

                        <p className="text-slate-400 text-lg leading-relaxed">
                            Experience institutional-grade execution, managing your portfolio with precision and confidence on the XPO platform.
                        </p>

                        {/* Interactive Avatar Strip */}
                        <div className="flex items-center gap-4 pt-4">
                            <div className="flex -space-x-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-12 h-12 rounded-full border-2 border-navy-900 bg-slate-800 overflow-hidden relative z-0 hover:z-10 hover:scale-110 transition-transform duration-300">
                                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 20}`} alt="User" />
                                    </div>
                                ))}
                            </div>
                            <div className="text-sm font-semibold text-white">
                                <span className="text-emerald-400 font-bold">4.9M+</span> Active Users
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Footer Copyright */}
                <div className="relative z-10 text-xs text-slate-500 font-medium">
                    © 2026 XPO Investment Management. All rights reserved.
                </div>
            </div>

            {/* Right Panel: Login Form */}
            <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-24 py-12 relative h-full overflow-y-auto">
                <div className="lg:hidden absolute top-6 left-6">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center font-black text-white">X</div>
                        <span className="text-xl font-black tracking-tighter text-white">XPO</span>
                    </Link>
                </div>

                <div className="max-w-[400px] w-full mx-auto space-y-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="space-y-2"
                    >
                        <h1 className="text-3xl font-bold text-white tracking-tight">Welcome back</h1>
                        <p className="text-slate-400">Enter your credentials to access your dashboard.</p>
                    </motion.div>

                    {error && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm flex items-center gap-2"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                            {error}
                        </motion.div>
                    )}

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-slate-300">Email Address</Label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="name@company.com"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Please enter a valid email address",
                                        },
                                    })}
                                    className={`pl-10 bg-navy-900 border-white/10 text-white placeholder:text-slate-600 focus-visible:ring-electric-blue/50 h-12 rounded-xl text-base ${errors.email ? "border-red-500/50" : ""}`}
                                />
                            </div>
                            {errors.email && (
                                <p className="text-red-400 text-xs">{errors.email.message}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <Label htmlFor="password" className="text-slate-300">Password</Label>
                                <Link href="#" className="text-xs font-bold text-electric-blue hover:text-blue-400">Forgot Password?</Link>
                            </div>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    {...register("password", { required: "Password is required" })}
                                    className={`pl-10 pr-10 bg-navy-900 border-white/10 text-white placeholder:text-slate-600 focus-visible:ring-electric-blue/50 h-12 rounded-xl text-base ${errors.password ? "border-red-500/50" : ""}`}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
                                >
                                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>
                            {errors.password && (
                                <p className="text-red-400 text-xs">{errors.password.message}</p>
                            )}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-electric-blue hover:bg-blue-600 text-white h-12 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-500/20"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                    Signing in...
                                </>
                            ) : (
                                <>
                                    Sign In <LogIn className="w-4 h-4" />
                                </>
                            )}
                        </motion.button>
                    </form>

                    <div className="flex items-center gap-4">
                        <div className="h-px bg-white/10 flex-1" />
                        <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">Or</span>
                        <div className="h-px bg-white/10 flex-1" />
                    </div>

                    <p className="text-center text-slate-400 text-sm">
                        Don't have an account? <Link href="/signup" className="text-white font-bold hover:text-electric-blue transition-colors">Sign up for free</Link>
                    </p>

                    <div className="text-center lg:hidden">
                        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-white text-sm font-medium transition-colors">
                            <ArrowLeft className="w-4 h-4" /> Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
