"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Coins, Shield, TrendingUp } from "lucide-react";

const indexManagers = [
    { name: "Alpha Union", manager: "Arkady Kovalev", code: "ALUN", icon: Coins, color: "blue" },
    { name: "Crypto Notebook", manager: "Anisa Zolova", code: "CRYNO", icon: Shield, color: "emerald" },
    { name: "Profit Magnet", manager: "Alevtina Pavlova", code: "PRMG", icon: TrendingUp, color: "purple" },
    { name: "Metropolis FX", manager: "Larisa Sokolov", code: "METFX", icon: Coins, color: "orange" },
    { name: "Future Chain", manager: "Anna Zotova", code: "FUCHI", icon: Shield, color: "cyan" },
    { name: "Backyard Trade", manager: "Guzel Seleznyov", code: "BACKT", icon: TrendingUp, color: "rose" },
    { name: "Index Unicorn", manager: "Plato Mordvinova", code: "UNICR", icon: Coins, color: "indigo" },
    { name: "Dinaro Club", manager: "Proclus Sergeyeva", code: "DICL", icon: Shield, color: "amber" },
];

export default function DiscoverIndexes() {
    return (
        <section id="xpoindex" className="py-24 relative bg-navy-950">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6 uppercase"
                    >
                        Discover our <span className="text-gradient-blue italic">Indexes</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 max-w-[700px] mx-auto leading-relaxed"
                    >
                        Explore our diverse range of Mutual Index Funds. Each index is managed by top-tier professionals
                        to maximize returns while maintaining strict risk controls.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {indexManagers.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10, transition: { duration: 0.2 } }}
                            className="glass-card p-8 rounded-[2.5rem] group border border-white/5 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-white/10 transition-all duration-500 shadow-xl shadow-black/20">
                                <item.icon className={`w-8 h-8 text-white group-hover:text-electric-blue transition-colors`} />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-electric-blue transition-colors uppercase tracking-tight">
                                {item.name}
                            </h3>
                            <p className="text-[10px] text-slate-500 font-bold tracking-[0.2em] mb-6 uppercase">
                                @{item.code}
                            </p>

                            <div className="flex items-center justify-between border-t border-white/5 pt-6 group-hover:border-white/10 transition-colors">
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-none mb-1">Manager</span>
                                    <span className="text-sm font-bold text-slate-300 group-hover:text-white transition-colors">{item.manager}</span>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 border border-white/10">
                                    <ArrowUpRight className="w-4 h-4 text-white" />
                                </div>
                            </div>

                            {/* Decorative corner element */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-white/[0.01] rounded-bl-[4rem] group-hover:bg-white/[0.03] transition-colors" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
