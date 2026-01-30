"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Play, Sparkles } from "lucide-react";
import Link from "next/link";
import { Particles } from "@/components/ui/particles";
import { WordRotate } from "@/components/ui/word-rotate";
import { RainbowButton } from "@/components/ui/rainbow-button";

export default function HeroModern() {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-navy-950">
            {/* Ambient Background */}
            <div className="absolute inset-0 z-0">
                <Particles
                    className="absolute inset-0"
                    quantity={100}
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

            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Left Content */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
                    >
                        <Sparkles className="w-4 h-4 text-electric-blue" />
                        <span className="text-xs font-semibold tracking-wider text-slate-300 uppercase">
                            Smart Investment Platform
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]"
                    >
                        Invest Smarter with <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                            XPO
                        </span>
                    </motion.h1>

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
                        <span>managed by experts for maximum growth.</span>
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

                        <button className="h-14 px-8 text-lg font-medium text-white/80 hover:text-white border border-white/10 hover:bg-white/5 rounded-xl transition-all flex items-center justify-center gap-2 w-full sm:w-auto">
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
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
                        className="pt-4 flex items-center gap-6 text-sm text-slate-500"
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            Verified Security
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                            Instant Withdrawals
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

                        {/* Floating Elements */}
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute -right-8 top-20 glass-card p-4 rounded-2xl border border-white/10 z-20"
                        >
                            <div className="text-xs text-slate-400 font-bold uppercase mb-1">Growth</div>
                            <div className="text-2xl font-bold text-white">+128%</div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
