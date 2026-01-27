"use client";

import { motion } from "framer-motion";
import { UserPlus, Wallet, BarChart2 } from "lucide-react";

const steps = [
    {
        title: "Easy Onboarding",
        description: "Register and verify in minutes with our streamlined process.",
        icon: UserPlus,
        color: "bg-blue-500",
    },
    {
        title: "Smart Investments",
        description: "Fund your account and pick your index from our curated lists.",
        icon: Wallet,
        color: "bg-emerald-500",
    },
    {
        title: "Achieve More",
        description: "Grow your portfolio with confidence using managed strategies.",
        icon: BarChart2,
        color: "bg-purple-500",
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6"
                    >
                        Start Smart, <span className="text-gradient-blue italic">Invest Better!</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 max-w-[700px] mx-auto leading-relaxed"
                    >
                        No trading experience? No problem. Our ready-made strategies align with your goals,
                        minimize risks with Loss Protection, and offer a user-friendly interface.
                    </motion.p>
                </div>

                <div className="relative group">
                    {/* Connecting Line */}
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/5 -translate-y-1/2 hidden lg:block" />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                                className="flex flex-col items-center text-center"
                            >
                                <div className={`w-20 h-20 rounded-3xl ${step.color} flex items-center justify-center mb-8 shadow-2xl shadow-${step.color.split('-')[1]}-500/20 group-hover:scale-110 transition-transform duration-500 relative`}>
                                    <step.icon className="w-10 h-10 text-white" />
                                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-navy-950 border border-white/10 flex items-center justify-center text-xs font-bold text-slate-400">
                                        0{index + 1}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                                <p className="text-slate-400 leading-relaxed max-w-[250px]">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
