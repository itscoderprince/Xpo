"use client";

import { motion } from "framer-motion";
import { ShieldCheck, ArrowLeft, Loader2, RefreshCw } from "lucide-react";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { loginSuccess } from "@/store/authSlice";

export default function VerifyOtpPage() {
    const dispatch = useDispatch();
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [devOtp, setDevOtp] = useState("");
    const [resendCountdown, setResendCountdown] = useState(60);
    const [canResend, setCanResend] = useState(false);
    const inputRefs = useRef([]);
    const router = useRouter();

    useEffect(() => {
        // Get email from session storage
        const storedEmail = sessionStorage.getItem("otpEmail");
        if (!storedEmail) {
            router.push("/login");
            return;
        }
        setEmail(storedEmail);

        // Get dev OTP for testing
        const storedDevOtp = sessionStorage.getItem("devOtp");
        if (storedDevOtp) setDevOtp(storedDevOtp);

        // Focus first input
        inputRefs.current[0]?.focus();
    }, [router]);

    // Resend countdown timer
    useEffect(() => {
        if (resendCountdown > 0) {
            const timer = setTimeout(() => setResendCountdown(resendCountdown - 1), 1000);
            return () => clearTimeout(timer);
        } else {
            setCanResend(true);
        }
    }, [resendCountdown]);

    const handleChange = (index, value) => {
        // Only allow numbers
        if (value && !/^\d$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Auto-focus next input
        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }

        // Auto-submit when all fields are filled
        if (value && index === 5) {
            const fullOtp = newOtp.join("");
            if (fullOtp.length === 6) {
                handleSubmit(fullOtp);
            }
        }
    };

    const handleKeyDown = (index, e) => {
        // Handle backspace
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData("text").slice(0, 6);
        if (!/^\d+$/.test(pastedData)) return;

        const newOtp = [...otp];
        pastedData.split("").forEach((char, i) => {
            if (i < 6) newOtp[i] = char;
        });
        setOtp(newOtp);

        // Focus last filled input or submit
        const lastIndex = Math.min(pastedData.length - 1, 5);
        inputRefs.current[lastIndex]?.focus();

        if (pastedData.length === 6) {
            handleSubmit(pastedData);
        }
    };

    const handleSubmit = async (otpValue) => {
        setIsLoading(true);
        setError("");

        try {
            const response = await fetch("/api/auth/verify-otp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, otp: otpValue }),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Verification failed");
            }

            // Store user in Redux
            dispatch(loginSuccess(result.user));

            // Clear session storage
            sessionStorage.removeItem("otpEmail");
            sessionStorage.removeItem("devOtp");

            // Redirect based on user type
            router.push(result.redirectTo || "/dashboard");
        } catch (err) {
            setError(err.message);
            setOtp(["", "", "", "", "", ""]);
            inputRefs.current[0]?.focus();
        } finally {
            setIsLoading(false);
        }
    };

    const handleResend = async () => {
        if (!canResend) return;

        try {
            const response = await fetch("/api/auth/resend-otp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Failed to resend OTP");
            }

            // Update dev OTP if available
            if (result.devOtp) {
                setDevOtp(result.devOtp);
                sessionStorage.setItem("devOtp", result.devOtp);
            }

            // Reset countdown
            setResendCountdown(60);
            setCanResend(false);
            setError("");
        } catch (err) {
            setError(err.message);
        }
    };

    const handleDevFill = () => {
        if (devOtp) {
            const otpDigits = devOtp.split("");
            setOtp(otpDigits);
            handleSubmit(devOtp);
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
                    <div className="text-center mb-8">
                        <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <ShieldCheck className="w-10 h-10 text-emerald-400" />
                        </div>
                        <h1 className="text-2xl font-bold text-white mb-3">Verify Your Login</h1>
                        <p className="text-slate-400">
                            We've sent a 6-digit code to<br />
                            <span className="text-white font-medium">{email}</span>
                        </p>
                    </div>

                    {error && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm text-center"
                        >
                            {error}
                        </motion.div>
                    )}

                    {/* OTP Input */}
                    <div className="flex justify-center gap-3 mb-8">
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                ref={(el) => (inputRefs.current[index] = el)}
                                type="text"
                                inputMode="numeric"
                                maxLength={1}
                                value={digit}
                                onChange={(e) => handleChange(index, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                                onPaste={handlePaste}
                                disabled={isLoading}
                                className={`w-12 h-14 text-center text-xl font-bold bg-navy-900 border ${error ? "border-red-500/50" : digit ? "border-emerald-500/50" : "border-white/10"
                                    } rounded-xl text-white focus:outline-none focus:border-electric-blue focus:bg-navy-900/50 transition-all disabled:opacity-50`}
                            />
                        ))}
                    </div>

                    {/* Loading indicator */}
                    {isLoading && (
                        <div className="flex items-center justify-center gap-2 text-slate-400 mb-6">
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Verifying...</span>
                        </div>
                    )}

                    {/* Dev mode helper */}
                    {devOtp && !isLoading && (
                        <div className="mb-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
                            <p className="text-yellow-400 text-xs font-medium mb-3 text-center">
                                🔧 Development Mode - OTP: <span className="font-mono">{devOtp}</span>
                            </p>
                            <button
                                onClick={handleDevFill}
                                className="w-full bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-400 font-medium py-2 px-4 rounded-lg transition-colors text-sm"
                            >
                                Auto-fill OTP (Dev Only)
                            </button>
                        </div>
                    )}

                    {/* Resend OTP */}
                    <div className="text-center">
                        <button
                            onClick={handleResend}
                            disabled={!canResend || isLoading}
                            className={`inline-flex items-center gap-2 text-sm transition-colors ${canResend
                                ? "text-electric-blue hover:text-blue-400 cursor-pointer"
                                : "text-slate-500 cursor-not-allowed"
                                }`}
                        >
                            <RefreshCw className={`w-4 h-4 ${canResend ? "" : "animate-spin"}`} />
                            {canResend ? "Resend OTP" : `Resend in ${resendCountdown}s`}
                        </button>
                    </div>

                    {/* Back to login */}
                    <div className="mt-8 pt-6 border-t border-white/5 text-center">
                        <Link
                            href="/login"
                            className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors text-sm"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to login
                        </Link>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
