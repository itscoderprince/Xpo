"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Linkedin, Twitter, Mail, ShieldCheck } from "lucide-react";

const team = [
    { name: "Arkady Kovalev", role: "Alpha Union Manager", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arkady" },
    { name: "Anisa Zolova", role: "Crypto Notebook Manager", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anisa" },
    { name: "Alevtina Pavlova", role: "Profit Magnet Manager", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alevtina" },
    { name: "Larisa Sokolov", role: "Metropolis FX Manager", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Larisa" },
    { name: "Anna Zotova", role: "Future Chain Manager", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anna" },
    { name: "Guzel Seleznyov", role: "Backyard Trade Manager", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Guzel" },
    { name: "Plato Mordvinova", role: "Index Unicorn Manager", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Plato" },
    { name: "Proclus Sergeyeva", role: "Dinaro Club Manager", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Proclus" },
];

export default function TeamSection() {
    return (
        <section id="team" className="py-24 relative bg-navy-950">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6 uppercase"
                    >
                        Our Index <span className="text-gradient-green italic">Managers</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 max-w-[700px] mx-auto leading-relaxed"
                    >
                        Meet the professional managers behind our high-performance indexes.
                        Each manager brings years of market expertise and a proven track record.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className="glass-card p-8 rounded-[2.5rem] flex flex-col items-center text-center group border border-white/5"
                        >
                            <div className="relative mb-6">
                                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/20 to-emerald-500/20 p-1 group-hover:from-blue-500 group-hover:to-emerald-500 transition-all duration-500">
                                    <div className="w-full h-full rounded-full bg-navy-950 flex items-center justify-center overflow-hidden">
                                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <div className="absolute -bottom-2 -right-2 bg-electric-blue w-8 h-8 rounded-full flex items-center justify-center border-4 border-navy-950">
                                    <ShieldCheck className="w-4 h-4 text-white" />
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-electric-blue transition-colors">
                                {member.name}
                            </h3>
                            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-6">
                                {member.role}
                            </p>

                            <div className="flex gap-4">
                                {[Linkedin, Twitter, Mail].map((Icon, i) => (
                                    <Link key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-500 hover:bg-electric-blue hover:text-white transition-all shadow-xl shadow-black/20">
                                        <Icon className="w-4 h-4" />
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
