"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-navy-950">
            <Navbar />

            <section className="pt-40 pb-24 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center justify-center gap-2 mb-4"
                        >
                            <img src="https://xpo.ru/assets/images/x-2.png" alt="X Icon" className="h-6 w-auto" />
                            <h5 className="text-electric-blue font-bold uppercase tracking-[0.2em] text-sm">Contacts</h5>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6"
                        >
                            Stay Update With Us
                        </motion.h1>
                    </div>

                    {/* Email Contact Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex justify-center mb-16"
                    >
                        <div className="glass-card px-8 py-6 rounded-2xl flex items-center gap-4 border border-white/10">
                            <div className="w-14 h-14 bg-electric-blue/20 rounded-2xl flex items-center justify-center">
                                <Mail className="w-7 h-7 text-electric-blue" />
                            </div>
                            <p className="text-xl font-bold text-white">hello@xpo.ru</p>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="max-w-3xl mx-auto"
                    >
                        <div className="glass-card p-10 md:p-16 rounded-[2.5rem] border border-white/10">
                            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <input
                                            type="text"
                                            name="contact-name"
                                            placeholder="Name"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-white placeholder-slate-500 focus:outline-none focus:border-electric-blue transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            name="contact-email"
                                            placeholder="Email"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-white placeholder-slate-500 focus:outline-none focus:border-electric-blue transition-colors"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <textarea
                                        name="contact-message"
                                        rows={5}
                                        placeholder="Your message"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-white placeholder-slate-500 focus:outline-none focus:border-electric-blue transition-colors resize-none"
                                    />
                                </div>
                                <div className="flex justify-center pt-4">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        type="submit"
                                        className="bg-electric-blue hover:bg-blue-600 text-white font-bold uppercase tracking-widest px-10 py-4 rounded-2xl flex items-center gap-3 transition-all shadow-xl shadow-blue-500/20"
                                    >
                                        Submit Message <Send className="w-5 h-5" />
                                    </motion.button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>

                {/* Background Glows */}
                <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-blue-600/10 blur-[150px] rounded-full -z-10" />
                <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-emerald-600/10 blur-[150px] rounded-full -z-10" />
            </section>

            <Footer />
        </main>
    );
}
