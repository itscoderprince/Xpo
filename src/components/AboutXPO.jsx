"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, History, Sparkles } from "lucide-react";

export default function AboutXPO() {
    return (
        <section id="whatxpo" className="py-16 md:py-24 relative overflow-hidden bg-navy-950/50">
            <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    {/* Main Image placeholder with tech feel */}
                    <div className="relative aspect-video rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 group shadow-2xl shadow-blue-500/10">
                        <img
                            src="https://xpo.ru/assets/images/about_xpo.png"
                            alt="About XPO"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-60" />

                        {/* Animated Floating Badge */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute bottom-4 left-4 md:bottom-8 md:left-8 glass-card px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl flex items-center gap-3 md:gap-4 border border-white/10"
                        >
                            <div className="w-8 h-8 md:w-10 md:h-10 bg-electric-blue/20 rounded-full flex items-center justify-center shrink-0">
                                <History className="w-4 h-4 md:w-5 md:h-5 text-electric-blue" />
                            </div>
                            <div>
                                <p className="text-[8px] md:text-[10px] text-slate-400 uppercase font-bold tracking-widest">Global Reach</p>
                                <p className="text-xs md:text-sm font-bold text-white">Since 2016</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Background Decorative Rings */}
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full -z-10" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col gap-5 md:gap-6"
                >
                    <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full w-fit">
                        <Sparkles className="w-4 h-4 text-emerald-500" />
                        <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-emerald-500">Innovation Service</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-white leading-tight">
                        Driving Innovation in <br className="hidden sm:block" />
                        <span className="text-gradient-blue italic">Investment Management</span> <br className="hidden sm:block" />
                        Since 2016
                    </h2>

                    <p className="text-base md:text-lg text-slate-400 leading-relaxed">
                        XPO has always been at the forefront of the investment landscape, helping people find smart,
                        innovative ways to grow their wealth. Our platform combines institutional-grade expertise
                        with cutting-edge technology.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 md:pt-6">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-electric-blue hover:bg-blue-600 text-white font-bold px-6 py-3.5 md:px-8 md:py-4 rounded-xl md:rounded-2xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-blue-500/20 text-sm md:text-base"
                        >
                            Learn More <ArrowRight className="w-5 h-5" />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                            whileTap={{ scale: 0.95 }}
                            className="border border-white/20 hover:border-white/40 text-white font-bold px-6 py-3.5 md:px-8 md:py-4 rounded-xl md:rounded-2xl flex items-center justify-center gap-3 transition-all backdrop-blur-sm text-sm md:text-base"
                        >
                            Download Profile <Download className="w-5 h-5" />
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
