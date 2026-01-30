"use client";

import { motion } from "framer-motion";
import { Smartphone, Apple, ShieldCheck } from "lucide-react";

export default function CallToAction() {
    return (
        <section className="py-4 md:py-8 relative overflow-hidden bg-navy-900/20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="glass-card rounded-[2rem] md:rounded-[3rem] p-6 md:p-10 relative overflow-hidden border border-white/10">
                    {/* Decorative Background */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-electric-blue/10 to-transparent -z-10" />
                    <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full -z-10" />

                    <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col gap-4 md:gap-6"
                        >
                            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1 rounded-full w-fit">
                                <Smartphone className="w-3.5 h-3.5 text-electric-blue" />
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">Mobile First</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white leading-[1.1]">
                                Access XPO <br className="hidden md:block" />
                                <span className="text-gradient-blue italic">Anytime, Anywhere.</span>
                            </h2>

                            <p className="text-sm md:text-base text-slate-400 leading-relaxed max-w-[450px]">
                                Download our mobile app to manage your investments and track performance on the go.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-navy-950 border border-white/10 hover:border-white/20 text-white px-5 py-2 rounded-xl flex items-center gap-3 transition-all font-bold"
                                >
                                    <Apple className="w-5 h-5" />
                                    <div className="text-left">
                                        <p className="text-[9px] uppercase font-bold text-slate-500 leading-none">Download on the</p>
                                        <p className="text-xs md:text-sm leading-tight">App Store</p>
                                    </div>
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-navy-950 border border-white/10 hover:border-white/20 text-white px-5 py-2 rounded-xl flex items-center gap-3 transition-all font-bold"
                                >
                                    <div className="w-5 h-5 flex items-center justify-center">
                                        <div className="w-0 h-0 border-t-[7px] border-t-transparent border-l-[10px] border-l-emerald-400 border-b-[7px] border-b-transparent" />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-[9px] uppercase font-bold text-slate-500 leading-none">Get it on</p>
                                        <p className="text-xs md:text-sm leading-tight">Google Play</p>
                                    </div>
                                </motion.button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative hidden md:flex justify-center lg:justify-end"
                        >
                            {/* Phone Mockup Representation */}
                            <div className="w-[180px] h-[360px] bg-navy-950 rounded-[1.75rem] border-4 border-white/10 shadow-2xl relative overflow-hidden flex flex-col pt-6">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-white/10 rounded-b-xl z-10" />
                                <div className="flex-1 bg-gradient-to-br from-navy-900 to-navy-950 p-3">
                                    <div className="space-y-2">
                                        <div className="h-1 w-10 bg-white/10 rounded-full" />
                                        <div className="h-20 w-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg border border-white/5" />
                                        <div className="grid grid-cols-2 gap-2">
                                            <div className="h-12 bg-white/5 rounded-lg border border-white/5" />
                                            <div className="h-12 bg-white/5 rounded-lg border border-white/5" />
                                        </div>
                                        <div className="h-16 bg-white/5 rounded-lg border border-white/5" />
                                    </div>
                                </div>
                                {/* Decorative Scanline or Pulse */}
                                <motion.div
                                    animate={{ y: [-360, 360] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 w-full h-10 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent pointer-events-none"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
