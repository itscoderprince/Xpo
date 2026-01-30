"use client";

import { motion } from "framer-motion";
import { BarChart3, ShieldCheck, Zap, Users, Globe, Trophy } from "lucide-react";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Particles } from "@/components/ui/particles";

const features = [
    {
        icon: BarChart3,
        title: "Market-Beating Performance",
        desc: "Our indexes consistently outperform traditional managed funds by leveraging algorithmic precision.",
        color: "text-blue-400",
        bg: "bg-blue-400/10",
        border: "border-blue-400/20"
    },
    {
        icon: Zap,
        title: "Instant Execution",
        desc: "Zero latency. Your trades are executed the millisecond opportunity strikes.",
        color: "text-amber-400",
        bg: "bg-amber-400/10",
        border: "border-amber-400/20"
    },
    {
        icon: ShieldCheck,
        title: "Institutional Trust",
        desc: "Asset managment backed by global financial standards and bank-grade security.",
        color: "text-emerald-400",
        bg: "bg-emerald-400/10",
        border: "border-emerald-400/20"
    },
    {
        icon: Trophy,
        title: "Award-Winning Platform",
        desc: "Recognized globally for innovation in decentralized index fund management.",
        color: "text-purple-400",
        bg: "bg-purple-400/10",
        border: "border-purple-400/20"
    }
];

export default function WhyChooseModern() {
    return (
        <section className="py-24 relative bg-navy-950 overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute inset-0">
                <Particles
                    className="absolute inset-0 z-0"
                    quantity={100}
                    ease={80}
                    color="#ffffff"
                    refresh
                />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-3/4 bg-blue-500/5 blur-[150px] rounded-full pointer-events-none" />
            </div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4"
                    >
                        Why Investors Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">XPO</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-400"
                    >
                        We combine cutting-edge technology, deep expertise, and unshakeable trust to deliver superior investment outcomes for over 4.9 million users.
                    </motion.p>
                </div>

                {/* Main Stats Block */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="rounded-3xl bg-gradient-to-b from-navy-900 to-navy-950 border border-white/10 p-8 md:p-12 mb-16 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent pointer-events-none" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:divide-x divide-white/10">
                        <div className="text-center md:text-left">
                            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">Total Funds Traded</h3>
                            <div className="text-4xl lg:text-5xl font-black text-white flex items-baseline gap-1">
                                $<NumberTicker value={4} className="text-white" />.<NumberTicker value={4} className="text-white" />B+
                            </div>
                        </div>
                        <div className="text-center md:text-left md:pl-8">
                            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">Active Traders</h3>
                            <div className="text-4xl lg:text-5xl font-black text-blue-400 flex items-baseline gap-1">
                                <NumberTicker value={4} className="text-blue-400" />.<NumberTicker value={9} className="text-blue-400" />M+
                            </div>
                        </div>
                        <div className="text-center md:text-left md:pl-8">
                            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">Partner Earnings</h3>
                            <div className="text-4xl lg:text-5xl font-black text-emerald-400 flex items-baseline gap-1">
                                $<NumberTicker value={2} className="text-emerald-400" />.<NumberTicker value={4} className="text-emerald-400" />B+
                            </div>
                        </div>
                        <div className="text-center md:text-left md:pl-8">
                            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">Global Reach</h3>
                            <div className="text-4xl lg:text-5xl font-black text-purple-400 flex items-baseline gap-1">
                                <NumberTicker value={120} className="text-purple-400" />+
                            </div>
                            <span className="text-xs text-slate-500 font-medium">Countries Supported</span>
                        </div>
                    </div>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -5 }}
                            className={`p-6 rounded-2xl bg-navy-900/50 backdrop-blur-sm border ${feature.border} hover:bg-navy-800 transition-all duration-300 group`}
                        >
                            <div className={`w-12 h-12 rounded-lg ${feature.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                <feature.icon className={`w-6 h-6 ${feature.color}`} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                            <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
