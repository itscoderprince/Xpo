"use client";

import { motion } from "framer-motion";
import {
    Mail,
    Send,
    Phone,
    MapPin,
    Globe,
    Linkedin,
    Twitter,
    Github,
    MessageCircle,
    CheckCircle2,
    ShieldCheck
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { DottedMap } from "@/components/ui/dotted-map";

const contactInfo = [
    {
        title: "Official Support",
        value: "hello@xpo.ru",
        icon: Mail,
        color: "text-blue-400",
        bg: "bg-blue-400/10"
    },
    {
        title: "Global HQ",
        value: "Innovation Tower, Dubai",
        icon: MapPin,
        color: "text-emerald-400",
        bg: "bg-emerald-400/10"
    },
    {
        title: "Investor Relations",
        value: "+1 (800) XPO-TECH",
        icon: Phone,
        color: "text-purple-400",
        bg: "bg-purple-400/10"
    }
];

export default function ContactSection() {
    return (
        <section id="contact" className="py-12 md:py-20 relative bg-navy-950 overflow-hidden border-t border-white/5">
            {/* Ambient Background */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <DottedMap className="text-blue-500/20" dotRadius={0.3} />
            </div>
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-emerald-600/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-6xl mx-auto">

                    {/* Header */}
                    <div className="mb-10 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-4"
                        >
                            <Globe className="w-3 h-3" />
                            <span>Available 24/7 Global Support</span>
                        </motion.div>

                        <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 text-white">
                            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Touch</span>
                        </h2>

                        <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Have questions? Our institutional support team is ready to assist with your requirements and integration needs.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                        {/* Left Content - Info & Socials */}
                        <div className="lg:col-span-5 space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                                {contactInfo.map((info, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="p-4 rounded-xl bg-navy-900/50 backdrop-blur-md border border-white/5 hover:border-white/10 transition-all group"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`w-10 h-10 rounded-lg ${info.bg} border border-white/5 flex items-center justify-center shrink-0`}>
                                                <info.icon className={`w-5 h-5 ${info.color}`} />
                                            </div>
                                            <div>
                                                <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-0.5">{info.title}</h3>
                                                <p className="text-sm md:text-base font-bold text-white group-hover:text-blue-400 transition-colors uppercase tracking-tight">{info.value}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="p-6 rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5"
                            >
                                <h4 className="text-slate-400 font-bold mb-4 text-[10px] uppercase tracking-[0.2em]">Institutional Presence</h4>
                                <div className="flex gap-2">
                                    {[Twitter, Linkedin, Github, MessageCircle].map((Icon, i) => (
                                        <button key={i} className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center hover:bg-white hover:text-navy-950 transition-all text-slate-400 group">
                                            <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Content - Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="lg:col-span-7"
                        >
                            <div className="p-6 md:p-8 bg-navy-900/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl -z-10" />

                                <div className="mb-8">
                                    <h3 className="text-xl font-bold text-white mb-2">Initialize Communication</h3>
                                    <p className="text-xs text-slate-500">Secure end-to-end encrypted messaging for institutional inquiries.</p>
                                </div>

                                <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <Label className="text-slate-500 text-[10px] uppercase font-bold tracking-[0.2em] ml-1">Full Name</Label>
                                            <Input
                                                placeholder="John Doe"
                                                className="bg-navy-950/50 border-white/10 h-11 focus-visible:ring-blue-500/50 rounded-lg text-sm"
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label className="text-slate-500 text-[10px] uppercase font-bold tracking-[0.2em] ml-1">Email</Label>
                                            <Input
                                                type="email"
                                                placeholder="john@example.com"
                                                className="bg-navy-950/50 border-white/10 h-11 focus-visible:ring-blue-500/50 rounded-lg text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <Label className="text-slate-500 text-[10px] uppercase font-bold tracking-[0.2em] ml-1">Subject</Label>
                                        <Input
                                            placeholder="E.g. Strategy Inquiry"
                                            className="bg-navy-950/50 border-white/10 h-11 focus-visible:ring-blue-500/50 rounded-lg text-sm"
                                        />
                                    </div>

                                    <div className="space-y-1.5">
                                        <Label className="text-slate-500 text-[10px] uppercase font-bold tracking-[0.2em] ml-1">Message</Label>
                                        <Textarea
                                            placeholder="Details of your requirement..."
                                            className="bg-navy-950/50 border-white/10 min-h-[100px] focus-visible:ring-blue-500/50 ring-offset-navy-950 rounded-lg resize-none text-sm"
                                        />
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.01 }}
                                        whileTap={{ scale: 0.99 }}
                                        className="w-full bg-white text-navy-950 font-black py-4 rounded-lg shadow-xl transition-all flex items-center justify-center gap-2 uppercase tracking-widest text-sm hover:bg-slate-200"
                                    >
                                        Transmit Message <Send className="w-4 h-4" />
                                    </motion.button>

                                    <div className="flex items-center justify-center gap-2 text-[9px] text-slate-600 font-bold uppercase tracking-[0.3em] pt-4">
                                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                                        <span>Institutional Security Protocol Active</span>
                                    </div>
                                </form>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}
