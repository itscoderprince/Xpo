"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Play, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Gradient Mesh */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-[0%] right-[-10%] w-[60%] h-[60%] bg-emerald-600/10 blur-[120px] rounded-full" />
                <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-purple-600/10 blur-[120px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col gap-6"
                >
                    <motion.div
                        variants={itemVariants}
                        className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full w-fit backdrop-blur-sm shadow-xl shadow-black/20"
                    >
                        <Sparkles className="w-3.5 h-3.5 text-electric-blue" />
                        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-300">
                            One step solution for all investment
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.1] text-white"
                    >
                        Your Gateway to <br />
                        <span className="text-gradient-blue italic">FOREX, CFD</span> and <br />
                        <span className="text-gradient-green italic">CRYPTOCURRENCY</span> <br />
                        Mutual Index Funds!
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-xl text-slate-400 max-w-[600px] leading-relaxed"
                    >
                        A smart platform for diversified, expert-managed investments in Forex, CFDs, and cryptocurrencies.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-4 pt-4"
                    >
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                href="/signup"
                                className="bg-electric-blue hover:bg-blue-600 text-white font-bold px-8 py-4 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-xl shadow-blue-500/20 group"
                            >
                                Sign up Now
                                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </Link>
                        </motion.div>

                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                            whileTap={{ scale: 0.95 }}
                            className="border border-white/20 hover:border-white/40 text-white font-bold px-8 py-4 rounded-2xl flex items-center justify-center gap-2 transition-all backdrop-blur-sm"
                        >
                            <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                                <Play className="w-4 h-4 fill-white" />
                            </div>
                            How It Works
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* Right Side Visual: Floating 3D-like Coin/Orb */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
                    className="relative flex items-center justify-center"
                >
                    <div className="relative w-full max-w-[500px] aspect-square">
                        {/* Animated Rings */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 border-2 border-dashed border-white/10 rounded-full"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-[10%] border border-white/5 rounded-full"
                        />

                        {/* Center Orb */}
                        <motion.div
                            animate={{
                                y: [0, -20, 0],
                                filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"]
                            }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-[25%] bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full shadow-[0_0_80px_rgba(59,130,246,0.5)] flex items-center justify-center group"
                        >
                            <div className="w-[80%] h-[80%] bg-navy-950 rounded-full flex items-center justify-center p-8">
                                <div className="w-full h-full bg-gradient-to-tr from-blue-500 to-emerald-400 rounded-full flex items-center justify-center shadow-inner">
                                    <span className="text-6xl font-black text-white">X</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating Badges */}
                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute top-[10%] right-[5%] glass-card p-4 rounded-2xl flex items-center gap-3 border border-white/10"
                        >
                            <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
                                <ArrowUpRight className="w-5 h-5 text-emerald-400" />
                            </div>
                            <div>
                                <p className="text-[10px] text-slate-400 uppercase font-bold">Profit</p>
                                <p className="text-lg font-bold text-white">+24.5%</p>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="absolute bottom-[20%] left-[0%] glass-card p-4 rounded-2xl flex items-center gap-3 border border-white/10"
                        >
                            <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping" />
                            </div>
                            <div>
                                <p className="text-[10px] text-slate-400 uppercase font-bold">Active Trades</p>
                                <p className="text-lg font-bold text-white">4.9M+</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
