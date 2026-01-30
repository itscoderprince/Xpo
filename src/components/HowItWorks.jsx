"use client";

import { motion } from "framer-motion";
import { UserPlus, Wallet, TrendingUp, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const steps = [
    {
        title: "Easy Onboarding",
        description: "Register and verify in minutes.",
        icon: UserPlus,
        color: "bg-blue-500",
    },
    {
        title: "Smart Investments",
        description: "Fund your account and pick your index.",
        icon: Wallet,
        color: "bg-emerald-500",
    },
    {
        title: "Achieve More",
        description: "Grow your portfolio with confidence.",
        icon: TrendingUp,
        color: "bg-purple-500",
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 relative overflow-hidden bg-navy-950">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[20%] -right-[10%] w-[40%] h-[40%] bg-emerald-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Visual (Image) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative min-h-[400px] lg:min-h-[600px] flex items-center justify-center p-8"
                    >
                        <div className="relative w-full h-full max-w-[500px] aspect-square">
                            <Image
                                src="/how-it-works.png"
                                alt="How XPO Works"
                                fill
                                className="object-contain drop-shadow-2xl"
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* Right Column: Content */}
                    <div className="flex flex-col space-y-10">

                        <div className="space-y-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-2"
                            >
                                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold border border-blue-500/20">
                                    How it Works
                                </span>
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl lg:text-5xl font-bold text-white leading-tight"
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
                                className="text-slate-400 text-lg leading-relaxed max-w-lg"
                            >
                                No trading experience? No problem. Our ready-made strategies align with your goals, minimize risks with Loss Protection, and offer a user-friendly interface.
                            </motion.p>
                        </div>

                        <div className="space-y-6">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                                    className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5 group"
                                >
                                    <div className={`shrink-0 w-12 h-12 rounded-xl ${step.color} bg-opacity-10 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300`}>
                                        <step.icon className={`w-6 h-6 ${step.color.replace('bg-', 'text-')}`} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-blue-300 transition-colors">
                                            {step.title}
                                        </h3>
                                        <p className="text-slate-400">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
