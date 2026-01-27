"use client";

import { motion } from "framer-motion";
import { ShieldCheck, BarChart3, Zap, Lightbulb, Sparkles } from "lucide-react";

const features = [
    {
        title: "Our Index Fund Performance",
        description: "XPO provides a way to track the performance of the forex, CFD & crypto markets as a whole by holding a single index asset. Index funds have consistently beaten the average managed fund since their inception.",
        icon: BarChart3,
        color: "from-blue-500/20 to-blue-600/5",
    },
    {
        title: "Ease & Simplicity",
        description: "There are literally thousands of trading script for investors to choose from. Choice paralysis: choice adds cost, complexity and the need for advice. XPO eliminates this complexity for all kind of investors.",
        icon: Zap,
        color: "from-purple-500/20 to-purple-600/5",
    },
    {
        title: "Power of Ideas",
        description: "We believe in the power of ideas over a top-down investing approach or philosophy. We seek out and embrace diverse thinking and ideas to create the best outcomes for our clients and their differing needs.",
        icon: Lightbulb,
        color: "from-amber-500/20 to-amber-600/5",
    },
    {
        title: "Managing with Trust",
        description: "This is why we’re trusted to manage $1.3 trillion of assets*, giving our clients the confidence of working with a partner with size, scale and stability, who takes the utmost pride in their duty of care.",
        icon: ShieldCheck,
        color: "from-emerald-500/20 to-emerald-600/5",
    },
];

export default function WhyChooseUs() {
    return (
        <section id="whyxpo" className="py-16 md:py-24 relative bg-navy-950">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center text-center mb-10 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm"
                    >
                        <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center font-black text-xs text-white">X</div>
                        <h5 className="text-electric-blue font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs">Why to become a XenoPortfolian</h5>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter text-white mb-6 leading-[1.1]"
                    >
                        Singular focus on <span className="text-gradient-blue">Asset Management</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 max-w-[800px] text-base md:text-lg leading-relaxed"
                    >
                        We have no alternative business interests. This means that we are single-mindedly committed to do well for our investors and for ourselves.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-6 sm:p-10 rounded-3xl md:rounded-[2.5rem] flex flex-col sm:flex-row items-start gap-5 sm:gap-6 group overflow-hidden relative border border-white/5 hover:border-white/20 transition-all duration-500"
                        >
                            {/* Background gradient glow */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />

                            <div className="shrink-0 w-12 h-12 md:w-16 md:h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500 shadow-xl shadow-black/20 border border-white/5">
                                <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-electric-blue" />
                            </div>

                            <div className="flex-1">
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 group-hover:text-electric-blue transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-sm md:text-base text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
