"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";
import Link from "next/link";

const posts = [
    {
        title: "Divergence in monetary policy: the EUR/USD outlook",
        category: "Forex",
        date: "May 12, 2024",
        author: "Arkady Kovalev",
        image: "https://images.unsplash.com/photo-1611974714658-058df2c525f0?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Can Bitcoin be used as a hedge against inflation?",
        category: "Crypto",
        date: "June 05, 2024",
        author: "Anisa Zolova",
        image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Is it worth investing in gold right now?",
        category: "Commodities",
        date: "July 20, 2024",
        author: "Proclus Sergeyeva",
        image: "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Understanding CFD Trading: A Comprehensive Guide",
        category: "CFD",
        date: "August 10, 2024",
        author: "Alevtina Pavlova",
        image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800",
    },
];

export default function ExpertView() {
    return (
        <section id="blog" className="py-16 md:py-24 relative bg-navy-950/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-6">
                    <div className="flex flex-col gap-3 md:gap-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-electric-blue font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs"
                        >
                            Expert View
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-black tracking-tighter text-white"
                        >
                            The Index Managers&apos; View
                        </motion.h2>
                    </div>
                    <Link href="/blog" className="flex items-center gap-2 text-white font-bold hover:text-electric-blue transition-all group text-sm md:text-base">
                        See all posts <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {posts.map((post, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card rounded-3xl overflow-hidden group hover:border-white/20 transition-all border border-white/5"
                        >
                            <div className="aspect-[16/10] overflow-hidden relative">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4 bg-navy-950/80 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-bold text-electric-blue uppercase tracking-widest border border-white/10">
                                    {post.category}
                                </div>
                            </div>

                            <div className="p-5 md:p-6">
                                <div className="flex items-center gap-3 mb-3 text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                                    <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" /> {post.date}</span>
                                    <span className="flex items-center gap-1.5"><User className="w-3 h-3" /> {post.author.split(' ')[0]}</span>
                                </div>
                                <h3 className="text-base md:text-lg font-bold text-white mb-4 group-hover:text-electric-blue transition-colors line-clamp-2 leading-snug">
                                    {post.title}
                                </h3>
                                <Link href="#" className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors">
                                    Read Article <ArrowRight className="w-3 h-3" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
