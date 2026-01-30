"use client";

import { motion } from "framer-motion";
import { UserCheck, Wallet, TrendingUp, ShieldCheck, ArrowRight } from "lucide-react";

const steps = [
    {
        id: "01",
        title: "Easy Onboarding",
        description: "Register and verify your identity in minutes with our streamlined, secure process.",
        icon: UserCheck,
        color: "text-blue-400",
        bg: "bg-blue-400/10",
        border: "border-blue-400/20"
    },
    {
        id: "02",
        title: "Smart Investments",
        description: "Fund your account and choose from our expertly curated, algorithm-driven indexes.",
        icon: Wallet,
        color: "text-emerald-400",
        bg: "bg-emerald-400/10",
        border: "border-emerald-400/20"
    },
    {
        id: "03",
        title: "Achieve More",
        description: "Watch your portfolio grow with real-time analytics and automated rebalancing.",
        icon: TrendingUp,
        color: "text-purple-400",
        bg: "bg-purple-400/10",
        border: "border-purple-400/20"
    }
];

export default function HowItWorksModern() {
    return (
        <section id="how-it-works" className="py-24 relative bg-navy-950 overflow-hidden">

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Heading & Introduction */}
                    <div className="max-w-xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6"
                        >
                            <ShieldCheck className="w-3 h-3" />
                            <span>Simple Process</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
                        >
                            Start Smart, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                                Invest Better!
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-slate-400 leading-relaxed mb-8"
                        >
                            No trading experience? No problem. Our ready-made strategies align with your goals, minimize risks with <span className="text-emerald-400 font-medium">Loss Protection</span>, and offer a user-friendly interface designed for clarity.
                        </motion.p>

                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="hidden lg:flex items-center gap-2 bg-white text-navy-950 px-8 py-4 rounded-full font-bold hover:bg-slate-200 transition-colors"
                        >
                            Get Started Now <ArrowRight className="w-4 h-4" />
                        </motion.button>
                    </div>

                    {/* Right Column: Key Steps Vertical List */}
                    <div className="relative">
                        {/* Connecting Line */}
                        <div className="absolute left-[27px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-500/20 via-emerald-500/20 to-transparent lg:block hidden" />

                        <div className="space-y-8">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={step.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="relative flex gap-6 group"
                                >
                                    {/* Icon Box */}
                                    <div className={`relative z-10 w-14 h-14 rounded-2xl ${step.bg} border ${step.border} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-black/20`}>
                                        <step.icon className={`w-6 h-6 ${step.color}`} />
                                    </div>

                                    {/* Text Content */}
                                    <div className="pt-2">
                                        <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-3">
                                            {step.title}
                                            <span className="text-xs font-black text-slate-600 opacity-50 select-none">0{index + 1}</span>
                                        </h3>
                                        <p className="text-slate-400 leading-relaxed text-sm md:text-base pr-4">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="lg:hidden w-full mt-10 flex items-center justify-center gap-2 bg-white text-navy-950 px-8 py-4 rounded-xl font-bold hover:bg-slate-200 transition-colors"
                        >
                            Get Started Now <ArrowRight className="w-4 h-4" />
                        </motion.button>
                    </div>

                </div>
            </div>
        </section>
    );
}
