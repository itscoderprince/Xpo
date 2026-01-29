"use client";

import { motion } from "framer-motion";
import { Mail, ArrowLeft, CheckCircle2, RefreshCw, Loader2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function VerifyEmailPage() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const token = searchParams.get("token");

    const [status, setStatus] = useState("pending"); // pending, verifying, success, error
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [devToken, setDevToken] = useState("");

    useEffect(() => {
        // Get email from session storage
        const storedEmail = sessionStorage.getItem("verifyEmail");
        if (storedEmail) setEmail(storedEmail);

        // Get dev token for testing
        const storedDevToken = sessionStorage.getItem("devVerificationToken");
        if (storedDevToken) setDevToken(storedDevToken);

        // If token is present in URL, verify it
        if (token) {
            verifyToken(token);
        }
    }, [token]);

    const verifyToken = async (verificationToken) => {
        setStatus("verifying");

        try {
            const response = await fetch("/api/auth/verify-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ token: verificationToken }),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Verification failed");
            }

            setStatus("success");
            setMessage(result.message);

            // Clear session storage
            sessionStorage.removeItem("verifyEmail");
            sessionStorage.removeItem("devVerificationToken");

            // Redirect to login after 2 seconds
            setTimeout(() => {
                router.push("/login");
            }, 2000);
        } catch (err) {
            setStatus("error");
            setMessage(err.message);
        }
    };

    const handleDevVerify = () => {
        if (devToken) {
            router.push(`/verify-email?token=${devToken}`);
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
                    {status === "pending" && !token && (
                        <>
                            {/* Pending State - Waiting for email verification */}
                            <div className="text-center">
                                <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Mail className="w-10 h-10 text-blue-400" />
                                </div>
                                <h1 className="text-2xl font-bold text-white mb-3">Check your email</h1>
                                <p className="text-slate-400 mb-6">
                                    We've sent a verification link to<br />
                                    <span className="text-white font-medium">{email || "your email"}</span>
                                </p>
                                <p className="text-sm text-slate-500 mb-8">
                                    Click the link in the email to verify your account. The link expires in 24 hours.
                                </p>

                                {/* Dev mode helper */}
                                {devToken && (
                                    <div className="mb-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
                                        <p className="text-yellow-400 text-xs font-medium mb-3">
                                            🔧 Development Mode
                                        </p>
                                        <button
                                            onClick={handleDevVerify}
                                            className="w-full bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-400 font-medium py-2 px-4 rounded-lg transition-colors text-sm"
                                        >
                                            Click to Verify (Dev Only)
                                        </button>
                                    </div>
                                )}

                                <div className="space-y-3">
                                    <button className="w-full flex items-center justify-center gap-2 text-slate-400 hover:text-white transition-colors text-sm py-3">
                                        <RefreshCw className="w-4 h-4" />
                                        Didn't receive email? Resend
                                    </button>
                                    <Link
                                        href="/signup"
                                        className="w-full flex items-center justify-center gap-2 text-slate-500 hover:text-white transition-colors text-sm py-3"
                                    >
                                        <ArrowLeft className="w-4 h-4" />
                                        Back to signup
                                    </Link>
                                </div>
                            </div>
                        </>
                    )}

                    {status === "verifying" && (
                        <div className="text-center py-8">
                            <Loader2 className="w-12 h-12 text-blue-400 animate-spin mx-auto mb-4" />
                            <h2 className="text-xl font-bold text-white">Verifying your email...</h2>
                        </div>
                    )}

                    {status === "success" && (
                        <div className="text-center">
                            <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                            </div>
                            <h1 className="text-2xl font-bold text-white mb-3">Email Verified!</h1>
                            <p className="text-slate-400 mb-6">{message}</p>
                            <p className="text-sm text-slate-500">Redirecting to login...</p>
                        </div>
                    )}

                    {status === "error" && (
                        <div className="text-center">
                            <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Mail className="w-10 h-10 text-red-400" />
                            </div>
                            <h1 className="text-2xl font-bold text-white mb-3">Verification Failed</h1>
                            <p className="text-red-400 mb-6">{message}</p>
                            <div className="space-y-3">
                                <Link
                                    href="/signup"
                                    className="w-full block bg-electric-blue hover:bg-blue-600 text-white font-bold py-3 rounded-xl text-center transition-colors"
                                >
                                    Try Again
                                </Link>
                                <Link
                                    href="/"
                                    className="w-full flex items-center justify-center gap-2 text-slate-500 hover:text-white transition-colors text-sm py-3"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                    Back to home
                                </Link>
                            </div>
                        </div>
                    )}
                </motion.div>
            </div>
        </main>
    );
}
