"use client";

import { motion } from "framer-motion";
import { Smartphone, Apple, ShieldCheck } from "lucide-react";

export default function CallToAction() {
    return (
        <section className="py-24 relative overflow-hidden bg-navy-900/20">
            <div className="container mx-auto px-6">
                <div className="glass-card rounded-[3rem] p-12 md:p-20 relative overflow-hidden border border-white/10">
                    {/* Decorative Background */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-electric-blue/10 to-transparent -z-10" />
                    <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full -z-10" />

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col gap-8"
                        >
                            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full w-fit">
                                <Smartphone className="w-4 h-4 text-electric-blue" />
                                <span className="text-xs font-bold uppercase tracking-widest text-slate-300">Mobile First</span>
                            </div>

                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white leading-[1.1]">
                                Access XPO <br />
                                <span className="text-gradient-blue italic">Anytime, Anywhere.</span>
                            </h2>

                            <p className="text-lg text-slate-400 leading-relaxed max-w-[500px]">
                                Download our mobile app to manage your investments, track index performance,
                                and receive real-time alerts on the go. Available for iOS and Android.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-navy-950 border border-white/10 hover:border-white/20 text-white px-8 py-4 rounded-2xl flex items-center gap-3 transition-all font-bold"
                                >
                                    <Apple className="w-6 h-6" />
                                    <div className="text-left">
                                        <p className="text-[10px] uppercase font-bold text-slate-500 leading-none">Download on the</p>
                                        <p className="text-lg leading-tight">App Store</p>
                                    </div>
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-navy-950 border border-white/10 hover:border-white/20 text-white px-8 py-4 rounded-2xl flex items-center gap-3 transition-all font-bold"
                                >
                                    <div className="w-6 h-6 flex items-center justify-center">
                                        <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-emerald-400 border-b-[8px] border-b-transparent" />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-[10px] uppercase font-bold text-slate-500 leading-none">Get it on</p>
                                        <p className="text-lg leading-tight">Google Play</p>
                                    </div>
                                </motion.button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative flex justify-center lg:justify-end"
                        >
                            {/* Phone Mockup Representation */}
                            <div className="w-[280px] h-[580px] bg-navy-950 rounded-[3rem] border-8 border-white/10 shadow-2xl relative overflow-hidden flex flex-col pt-12">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-white/10 rounded-b-2xl z-10" />
                                <div className="flex-1 bg-gradient-to-br from-navy-900 to-navy-950 p-6">
                                    <div className="space-y-4">
                                        <div className="h-2 w-20 bg-white/10 rounded-full" />
                                        <div className="h-40 w-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl border border-white/5" />
                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="h-24 bg-white/5 rounded-xl border border-white/5" />
                                            <div className="h-24 bg-white/5 rounded-xl border border-white/5" />
                                        </div>
                                        <div className="h-32 bg-white/5 rounded-xl border border-white/5" />
                                    </div>
                                </div>
                                {/* Decorative Scanline or Pulse */}
                                <motion.div
                                    animate={{ y: [-580, 580] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 w-full h-20 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent pointer-events-none"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
