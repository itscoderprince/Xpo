"use client";

import { motion } from "framer-motion";
import { UserPlus, Eye, EyeOff, ShieldCheck, Mail, Lock, User, Loader2, Star, Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Particles } from "@/components/ui/particles";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

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
        setValue,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            terms: false
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
        <main className="h-screen w-full grid grid-cols-1 lg:grid-cols-2 bg-navy-950 overflow-hidden">

            {/* Left Panel: Visual Experience */}
            <div className="hidden lg:flex flex-col justify-between p-12 bg-navy-900 border-r border-white/5 relative overflow-hidden">

                {/* Background Particles */}
                <div className="absolute inset-0 z-0">
                    <Particles
                        className="absolute inset-0"
                        quantity={150}
                        ease={80}
                        color="#10b981"
                        refresh
                    />
                </div>

                {/* Abstract Glows */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[-20%] right-[-20%] w-[80%] h-[80%] bg-emerald-600/10 blur-[150px] rounded-full" />
                    <div className="absolute bottom-[-20%] left-[-20%] w-[80%] h-[80%] bg-blue-600/10 blur-[150px] rounded-full" />
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

                {/* Central Visual & Testimonial */}
                <div className="relative z-10 max-w-lg">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full w-fit backdrop-blur-md">
                            <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">Bank-Grade Security</span>
                        </div>

                        <h2 className="text-4xl font-bold text-white leading-tight">
                            Start Your Journey <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
                                To Financial Freedom
                            </span>
                        </h2>

                        <div className="grid grid-cols-2 gap-4 pt-4">
                            {[
                                "Real-time Access",
                                "Zero Commissions",
                                "Expert Analytics",
                                "24/7 Support"
                            ].map((feature, i) => (
                                <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                                        <Check className="w-3 h-3 text-emerald-400" />
                                    </div>
                                    {feature}
                                </div>
                            ))}
                        </div>

                        {/* Testimonial Card */}
                        <div className="mt-8 p-6 glass-card rounded-2xl border border-white/5 bg-navy-800/50 backdrop-blur-md">
                            <div className="flex gap-1 mb-3">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />)}
                            </div>
                            <p className="text-slate-300 text-sm italic mb-4">
                                "Switching to XPO was the best decision I made for my portfolio. The tools are intuitive and the execution is instant."
                            </p>
                            <div className="flex items-center gap-3">
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" className="w-8 h-8 rounded-full bg-slate-700" alt="Felix" />
                                <div>
                                    <div className="text-xs font-bold text-white">Felix Henderson</div>
                                    <div className="text-[10px] text-slate-500 font-semibold uppercase">Professional Trader</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Footer Copyright */}
                <div className="relative z-10 text-xs text-slate-500 font-medium">
                    © 2026 XPO Investment Management. All rights reserved.
                </div>
            </div>

            {/* Right Panel: Signup Form */}
            <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-24 py-12 relative h-full overflow-y-auto">
                <div className="lg:hidden absolute top-6 left-6">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center font-black text-white">X</div>
                        <span className="text-xl font-black tracking-tighter text-white">XPO</span>
                    </Link>
                </div>

                <div className="max-w-[440px] w-full mx-auto space-y-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="space-y-2"
                    >
                        <h1 className="text-3xl font-bold text-white tracking-tight">Create account</h1>
                        <p className="text-slate-400">Join 4.9 million users who trust XPO daily.</p>
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

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                        <div className="space-y-2">
                            <Label htmlFor="name" className="text-slate-300">Full Name</Label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="John Doe"
                                    {...register("name", {
                                        required: "Name is required",
                                        minLength: { value: 2, message: "Name must be at least 2 characters" },
                                    })}
                                    className={`pl-10 bg-navy-900 border-white/10 text-white placeholder:text-slate-600 focus-visible:ring-electric-blue/50 h-11 rounded-xl ${errors.name ? "border-red-500/50" : ""}`}
                                />
                            </div>
                            {errors.name && <p className="text-red-400 text-xs">{errors.name.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-slate-300">Email Address</Label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="name@company.com"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid email",
                                        },
                                    })}
                                    className={`pl-10 bg-navy-900 border-white/10 text-white placeholder:text-slate-600 focus-visible:ring-electric-blue/50 h-11 rounded-xl ${errors.email ? "border-red-500/50" : ""}`}
                                />
                            </div>
                            {errors.email && <p className="text-red-400 text-xs">{errors.email.message}</p>}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="password" className="text-slate-300">Password</Label>
                                <div className="relative">
                                    <Input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Min 8 chars"
                                        {...register("password", { required: "Required", validate: validatePassword })}
                                        className={`pr-10 bg-navy-900 border-white/10 text-white placeholder:text-slate-600 focus-visible:ring-electric-blue/50 h-11 rounded-xl ${errors.password ? "border-red-500/50" : ""}`}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white"
                                    >
                                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="confirmPassword" className="text-slate-300">Confirm</Label>
                                <div className="relative">
                                    <Input
                                        id="confirmPassword"
                                        type={showConfirmPassword ? "text" : "password"}
                                        placeholder="Confirm"
                                        {...register("confirmPassword", {
                                            required: "Required",
                                            validate: (val) => val === password || "Match failed",
                                        })}
                                        className={`pr-10 bg-navy-900 border-white/10 text-white placeholder:text-slate-600 focus-visible:ring-electric-blue/50 h-11 rounded-xl ${errors.confirmPassword ? "border-red-500/50" : ""}`}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white"
                                    >
                                        {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                    </button>
                                </div>
                            </div>
                        </div>
                        {(errors.password || errors.confirmPassword) && (
                            <p className="text-red-400 text-xs">{errors.password?.message || errors.confirmPassword?.message}</p>
                        )}


                        <div className="flex items-center space-x-2 pt-2">
                            <Checkbox
                                id="terms"
                                onCheckedChange={(checked) => setValue("terms", checked)}
                            />
                            <Label htmlFor="terms" className="text-sm text-slate-400 font-normal leading-tight">
                                I agree to the <Link href="#" className="text-white hover:underline">Terms</Link> and <Link href="#" className="text-white hover:underline">Privacy Policy</Link>.
                            </Label>
                        </div>
                        {errors.terms && <p className="text-red-400 text-xs">Agreement is required</p>}


                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white h-12 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-500/20"
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

                    <p className="text-center text-slate-400 text-sm">
                        Already have an account? <Link href="/login" className="text-white font-bold hover:text-electric-blue transition-colors">Log in</Link>
                    </p>
                </div>
            </div>
        </main>
    );
}
