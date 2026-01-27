"use client";

import { motion } from "framer-motion";
import { Shield, BarChart3, Zap, Lock, Lightbulb, TrendingUp } from "lucide-react";

const features = [
    {
        title: "Asset Management",
        description: "Expertly managed portfolios focused on long-term growth and risk mitigation across all asset classes.",
        icon: BarChart3,
        size: "col-span-2 row-span-2",
        color: "from-blue-500/20 to-blue-600/5",
    },
    {
        title: "Innovation & Expertise",
        description: "Backed by years of experience and market-leading technology.",
        icon: Lightbulb,
        size: "col-span-1 row-span-1",
        color: "from-emerald-500/20 to-emerald-600/5",
    },
    {
        title: "Ease & Simplicity",
        description: "One platform for Forex, CFD, and Crypto.",
        icon: Zap,
        size: "col-span-1 row-span-1",
        color: "from-purple-500/20 to-purple-600/5",
    },
    {
        title: "Managing with Trust",
        description: "Institutional level security and transparency for peace of mind.",
        icon: Lock,
        size: "col-span-1 row-span-1",
        color: "from-amber-500/20 to-amber-600/5",
    },
    {
        title: "Market Performance",
        description: "Proven strategies for consistent returns in global markets.",
        icon: TrendingUp,
        size: "col-span-1 row-span-1",
        color: "from-cyan-500/20 to-cyan-600/5",
    },
];

export default function WhyChooseUs() {
    return (
        <section id="whyxpo" className="py-24 relative bg-navy-950">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6 uppercase"
                    >
                        Why Choose XPO?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 max-w-[800px] leading-relaxed"
                    >
                        A singular focus on Asset Management. We are single-mindedly committed to doing well for our investors.
                        Our dedication ensures your financial growth is backed by stability, innovation, and expertise.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.02, y: -5 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={`glass-card p-8 rounded-[2rem] flex flex-col justify-between group overflow-hidden relative border border-white/5 ${feature.size}`}
                        >
                            {/* Background gradient glow */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />

                            <div className="flex flex-col gap-4">
                                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500 shadow-xl shadow-black/20">
                                    <feature.icon className="w-6 h-6 text-white group-hover:text-electric-blue transition-colors" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                                    <p className="text-sm text-slate-400 leading-relaxed max-w-[300px] group-hover:text-slate-200 transition-colors">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>

                            <div className="flex justify-end pt-4">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0 border border-white/10">
                                    <Zap className="w-5 h-5 text-white" />
                                </div>
                            </div>

                            {/* Decorative Tech Lines */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.02] -rotate-45 translate-x-16 -translate-y-16 group-hover:bg-white/[0.05] transition-colors" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
