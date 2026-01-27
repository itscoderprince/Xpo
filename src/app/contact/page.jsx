"use client";

import { motion } from "framer-motion";
import {
    Mail,
    Send,
    Phone,
    MapPin,
    Globe,
    MessageSquare,
    ChevronRight,
    Linkedin,
    Twitter,
    Github,
    ExternalLink
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const contactMethods = [
    {
        title: "Official Support",
        value: "hello@xpo.ru",
        desc: "For general inquiries and support.",
        icon: Mail,
        color: "blue"
    },
    {
        title: "Direct Connect",
        value: "+1 (800) XPO-TECH",
        desc: "24/7 dedicated investor line.",
        icon: Phone,
        color: "emerald"
    },
    {
        title: "HQ Location",
        value: "Innovation Tower, Dubai",
        desc: "Visit our global operations center.",
        icon: MapPin,
        color: "purple"
    }
];

const socialLinks = [
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Github, href: "#" }
];

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-black text-white font-sans selection:bg-blue-500/30">
            <Navbar />

            <section className="relative pt-28 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
                {/* Modern Background Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

                {/* Ambient Glows */}
                <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-600/20 blur-[120px] rounded-full" />
                <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-emerald-600/10 blur-[120px] rounded-full" />

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-7xl mx-auto">
                        {/* Header Section */}
                        <div className="mb-12 md:mb-20">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex items-center gap-3 mb-6"
                            >
                                <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
                                    <Globe className="w-4 h-4 text-blue-400" />
                                </div>
                                <span className="text-[10px] font-mono font-bold text-blue-400 uppercase tracking-[0.3em]">Global Communications</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8"
                            >
                                Connect with the <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-cyan-400">Future of Finance.</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-base md:text-xl text-slate-400 max-w-2xl leading-relaxed"
                            >
                                Have questions about our protocol? Our institutional support team
                                is available 24/7 to assist with your investment journey.
                            </motion.p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                            {/* Left Column: Contact Info */}
                            <div className="lg:col-span-5 space-y-6 md:space-y-8">
                                <div className="grid grid-cols-1 gap-4">
                                    {contactMethods.map((method, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: -30 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.3 + idx * 0.1 }}
                                            className="group relative p-5 md:p-6 bg-white/[0.02] border border-white/5 rounded-3xl hover:border-white/10 transition-all duration-500 overflow-hidden"
                                        >
                                            <div className="flex items-center gap-5 md:gap-6 relative z-10">
                                                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/10 to-${method.color}-500/5 border border-${method.color}-500/20 flex items-center justify-center shrink-0`}>
                                                    <method.icon className={`w-5 h-5 text-${method.color}-400`} />
                                                </div>
                                                <div className="min-w-0">
                                                    <h3 className="text-[10px] md:text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">{method.title}</h3>
                                                    <p className="text-base md:text-lg font-bold text-white group-hover:text-blue-400 transition-colors truncate">{method.value}</p>
                                                    <p className="text-xs text-slate-500 mt-1 line-clamp-1">{method.desc}</p>
                                                </div>
                                            </div>
                                            {/* Accent Gradient */}
                                            <div className={`absolute top-0 right-0 w-32 h-32 bg-${method.color}-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity`} />
                                        </motion.div>
                                    ))}
                                </div>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.7 }}
                                    className="p-6 md:p-8 rounded-3xl md:rounded-[2.5rem] bg-gradient-to-br from-blue-600/10 to-emerald-600/5 border border-white/5 relative overflow-hidden"
                                >
                                    <h4 className="text-lg md:text-xl font-bold text-white mb-4">Institutional Desk</h4>
                                    <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                                        For hedge funds, family offices, and institutional investors seeking custom solutions and API access.
                                    </p>
                                    <div className="flex items-center gap-4">
                                        {socialLinks.map((social, i) => (
                                            <a key={i} href={social.href} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all text-slate-400 border border-white/5">
                                                <social.icon className="w-4 h-4" />
                                            </a>
                                        ))}
                                    </div>
                                    <ExternalLink className="absolute top-6 right-6 w-4 h-4 text-slate-600" />
                                </motion.div>
                            </div>

                            {/* Right Column: Contact Form */}
                            <div className="lg:col-span-7">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8 }}
                                    className="relative p-6 sm:p-8 md:p-12 bg-[#0A0A0A] border border-white/10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl overflow-hidden shadow-blue-900/10"
                                >
                                    {/* Form Title */}
                                    <div className="mb-8 md:mb-10 flex items-center gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                                        <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight italic">Send an Encrypted Message</h3>
                                    </div>

                                    <form onSubmit={(e) => e.preventDefault()} className="space-y-5 md:space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Full Name</label>
                                                <div className="group relative">
                                                    <input
                                                        type="text"
                                                        placeholder="Satoshi Nakamoto"
                                                        className="w-full bg-white/5 border border-white/5 rounded-xl md:rounded-2xl py-3.5 md:py-4 px-5 md:px-6 text-white placeholder-slate-700 outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all text-sm md:text-base"
                                                    />
                                                    <div className="absolute inset-0 rounded-2xl bg-blue-500/5 opacity-0 group-focus-within:opacity-100 pointer-events-none transition-opacity" />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Email Address</label>
                                                <div className="group relative">
                                                    <input
                                                        type="email"
                                                        placeholder="sat@xpo.io"
                                                        className="w-full bg-white/5 border border-white/5 rounded-xl md:rounded-2xl py-3.5 md:py-4 px-5 md:px-6 text-white placeholder-slate-700 outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all text-sm md:text-base"
                                                    />
                                                    <div className="absolute inset-0 rounded-2xl bg-blue-500/5 opacity-0 group-focus-within:opacity-100 pointer-events-none transition-opacity" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Subject of Inquiry</label>
                                            <div className="group relative">
                                                <select className="w-full bg-white/5 border border-white/5 rounded-xl md:rounded-2xl py-3.5 md:py-4 px-5 md:px-6 text-white outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all appearance-none cursor-pointer text-sm md:text-base">
                                                    <option className="bg-navy-950">General Protocol Inquiry</option>
                                                    <option className="bg-navy-950">Investment Strategy</option>
                                                    <option className="bg-navy-950">Technical Assistance</option>
                                                    <option className="bg-navy-950">Institutional Onboarding</option>
                                                </select>
                                                <ChevronRight className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:rotate-90 transition-transform" />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Detailed Message</label>
                                            <div className="group relative">
                                                <textarea
                                                    rows={4}
                                                    placeholder="Briefly describe your request..."
                                                    className="w-full bg-white/5 border border-white/5 rounded-xl md:rounded-2xl py-3.5 md:py-4 px-5 md:px-6 text-white placeholder-slate-700 outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all resize-none text-sm md:text-base"
                                                />
                                                <div className="absolute inset-0 rounded-2xl bg-blue-500/5 opacity-0 group-focus-within:opacity-100 pointer-events-none transition-opacity" />
                                            </div>
                                        </div>

                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full group relative overflow-hidden bg-white text-black font-black uppercase tracking-[0.2em] py-4 md:py-5 rounded-xl md:rounded-2xl shadow-xl hover:shadow-blue-500/20 transition-all font-mono text-sm md:text-base"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                                            <span className="relative flex items-center justify-center gap-3">
                                                Initialize Protocol <Send className="w-4 h-4 md:w-5 md:h-5" />
                                            </span>
                                        </motion.button>

                                        <p className="text-[9px] text-center text-slate-600 uppercase tracking-widest mt-6">
                                            Priority Processing Enabled • Encrypted Payload • v2.4 Standard
                                        </p>
                                    </form>

                                    {/* Accent Shape */}
                                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-600/10 blur-[80px] rounded-full pointer-events-none" />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
