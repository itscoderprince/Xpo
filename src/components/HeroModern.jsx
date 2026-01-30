"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Play, Sparkles, ShieldCheck, Zap, Headphones, Globe } from "lucide-react";
import Link from "next/link";
import { Particles } from "@/components/ui/particles";
import { WordRotate } from "@/components/ui/word-rotate";
import { RainbowButton } from "@/components/ui/rainbow-button";

export default function HeroModern() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 md:pt-24 overflow-hidden bg-navy-950">
            {/* Ambient Background */}
            <div className="absolute inset-0 z-0">
                <Particles
                    className="absolute inset-0"
                    quantity={typeof window !== 'undefined' && window?.innerWidth < 768 ? 40 : 100}
                    ease={80}
                    color="#ffffff"
                    refresh
                />
            </div>

            {/* Gradient Glows */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[150px] rounded-full" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-emerald-600/10 blur-[150px] rounded-full" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

                {/* Left Content */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 md:space-y-8">

                    {/* Badge */}
                    {/* <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
                    >
                        <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-electric-blue" />
                        <span className="text-[10px] font-bold tracking-[0.2em] text-blue-400 uppercase">
                            Smart Investment Platform
                        </span>
                    </motion.div> */}

                    {/* Headline */}
                    <div className="space-y-2">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]"
                        >
                            Invest Smarter with <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                                XPO Technology
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-xs md:text-sm font-bold text-blue-400/60 uppercase tracking-[0.3em]"
                        >
                            Institutional-Grade Assets • Fully Regulated
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl text-slate-400 max-w-lg leading-relaxed flex flex-col lg:items-start items-center"
                    >
                        <span>Your gateway to</span>
                        <WordRotate
                            className="text-2xl font-bold text-white py-2"
                            words={["Forex Trading", "Cryptocurrency", "Mutual Index Funds", "CFD Investments"]}
                        />
                        <span>Managed by institutional experts for secure, long-term wealth creation.</span>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                    >
                        <Link href="/signup">
                            <RainbowButton className="h-14 px-8 text-lg font-bold rounded-xl w-full sm:w-auto">
                                Get Started Free <ArrowUpRight className="ml-2 w-5 h-5" />
                            </RainbowButton>
                        </Link>

                        <button className="h-14 px-8 text-lg font-medium text-white/80 hover:text-white border border-white/10 hover:bg-white/5 rounded-xl transition-all flex items-center justify-center gap-2 w-full sm:w-auto overflow-hidden group">
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-electric-blue transition-colors">
                                <Play className="w-3 h-3 fill-current" />
                            </div>
                            <span>How it Works</span>
                        </button>
                    </motion.div>

                    {/* Meta Info */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="pt-4 flex flex-wrap justify-center lg:justify-start items-center gap-6 text-[10px] md:text-xs font-bold uppercase tracking-[0.1em]"
                    >
                        <div className="flex items-center gap-2 text-emerald-400 bg-emerald-400/5 px-3 py-1.5 rounded-lg border border-emerald-400/10">
                            <ShieldCheck className="w-4 h-4" />
                            Verified Security
                        </div>
                        <div className="flex items-center gap-2 text-blue-400 bg-blue-400/5 px-3 py-1.5 rounded-lg border border-blue-400/10">
                            <Zap className="w-4 h-4" />
                            Instant Withdrawals
                        </div>
                        <div className="flex items-center gap-2 text-slate-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                            <Headphones className="w-4 h-4" />
                            24/7 Global Support
                        </div>
                    </motion.div>
                </div>

                {/* Right Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative hidden lg:flex items-center justify-center"
                >
                    {/* We can re-use the cool orb visual from the original Hero, but refined */}
                    <div className="relative w-[500px] h-[500px]">
                        <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full" />

                        {/* Abstract Composition */}
                        <div className="relative z-10 w-full h-full border border-white/10 bg-white/5 backdrop-blur-2xl rounded-[3rem] p-8 shadow-2xl flex flex-col justify-between overflow-hidden">

                            {/* Decorative Grid inside card */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />

                            <div className="flex justify-between items-start z-10">
                                <div>
                                    <div className="text-slate-400 text-sm font-medium mb-1">Total Balance</div>
                                    <div className="text-4xl font-bold text-white">$124,500.00</div>
                                </div>
                                <div className="p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                                    <ArrowUpRight className="text-emerald-400 w-6 h-6" />
                                </div>
                            </div>

                            {/* Chart visual (simplified with CSS) */}
                            <div className="h-32 flex items-end gap-2 z-10 mt-8">
                                {[40, 65, 50, 80, 55, 90, 70, 95].map((h, i) => (
                                    <div key={i} className="flex-1 bg-gradient-to-t from-blue-500/20 to-blue-500 rounded-t-sm" style={{ height: `${h}%` }} />
                                ))}
                            </div>

                            <div className="space-y-3 z-10 mt-6">
                                {[1, 2, 3].map((_, i) => (
                                    <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-8 h-8 rounded-full ${i === 0 ? 'bg-orange-500' : 'bg-blue-500'} flex items-center justify-center text-xs font-bold text-white`}>
                                                {i === 0 ? 'B' : 'E'}
                                            </div>
                                            <div className="text-sm text-white font-medium">{i === 0 ? 'Bitcoin' : 'Ethereum'}</div>
                                        </div>
                                        <div className="text-sm text-emerald-400 font-medium">+2.4%</div>
                                    </div>
                                ))}
                            </div>

                        </div>

                        {/* Floating Elements - Active Clients */}
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute -right-16 top-0 bg-navy-900/60 backdrop-blur-xl p-4 rounded-2xl border border-white/10 z-20 shadow-xl"
                        >
                            <div className="text-[10px] text-slate-400 font-bold uppercase mb-1 tracking-[0.2em]">Active Clients</div>
                            <div className="text-2xl font-bold text-white">25K+</div>
                        </motion.div>

                        {/* Floating Elements - Total Traded */}
                        <motion.div
                            animate={{ y: [10, -10, 10] }}
                            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                            className="absolute -left-32 top-24 bg-navy-900/60 backdrop-blur-xl p-4 rounded-2xl border border-white/10 z-20 shadow-xl"
                        >
                            <div className="text-[10px] text-slate-400 font-bold uppercase mb-1 tracking-[0.2em]">Total Traded</div>
                            <div className="text-2xl font-bold text-blue-400">$4.4B+</div>
                        </motion.div>

                        {/* Floating Elements - Partner Earned */}
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                            className="absolute -right-20 -bottom-8 bg-emerald-500/10 backdrop-blur-xl p-4 rounded-2xl border border-emerald-500/20 z-20 shadow-xl"
                        >
                            <div className="text-[10px] text-emerald-400/80 font-bold uppercase mb-1 tracking-[0.2em]">Partner Earned</div>
                            <div className="text-2xl font-bold text-emerald-400">$850M+</div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
