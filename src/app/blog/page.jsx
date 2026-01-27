"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, User, Search } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const posts = [
    {
        id: "divergence-monetary-policy",
        title: "Divergence in monetary policy: the EUR/USD outlook",
        excerpt: "An in-depth analysis of how differing central bank policies are shaping the future of the EUR/USD currency pair.",
        category: "Forex",
        date: "May 12, 2024",
        author: "Arkady Kovalev",
        image: "https://images.unsplash.com/photo-1611974714658-058df2c525f0?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "bitcoin-hedge-inflation",
        title: "Can Bitcoin be used as a hedge against inflation?",
        excerpt: "Exploring the potential of Bitcoin as a store of value and its correlation with traditional inflation hedges.",
        category: "Crypto",
        date: "June 05, 2024",
        author: "Anisa Zolova",
        image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "investing-gold-now",
        title: "Is it worth investing in gold right now?",
        excerpt: "A look at the current gold market and whether it presents a viable opportunity for investors.",
        category: "Commodities",
        date: "July 20, 2024",
        author: "Proclus Sergeyeva",
        image: "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "understanding-cfd-trading",
        title: "Understanding CFD Trading: A Comprehensive Guide",
        excerpt: "Everything you need to know about Contracts for Difference and how to trade them effectively.",
        category: "CFD",
        date: "August 10, 2024",
        author: "Alevtina Pavlova",
        image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "ethereum-merge-impact",
        title: "The Ethereum Merge: One Year Later",
        excerpt: "Analyzing the impact of Ethereum's transition to Proof of Stake on the crypto ecosystem.",
        category: "Crypto",
        date: "September 15, 2024",
        author: "Anna Zotova",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "diversification-strategies",
        title: "Diversification Strategies for Modern Portfolios",
        excerpt: "How to build a balanced portfolio that can weather market volatility while maximizing returns.",
        category: "Strategy",
        date: "October 02, 2024",
        author: "Larisa Sokolov",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    },
];

const categories = ["All", "Forex", "Crypto", "CFD", "Commodities", "Strategy"];

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-navy-950">
            <Navbar />

            <section className="pt-28 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    {/* Header */}
                    <div className="text-center mb-10 md:mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center justify-center gap-2 mb-4"
                        >
                            <img src="https://xpo.ru/assets/images/x-2.png" alt="X Icon" className="h-6 w-auto" />
                            <h5 className="text-electric-blue font-bold uppercase tracking-[0.2em] text-[10px] md:text-sm">Expert View</h5>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter text-white mb-6 leading-tight"
                        >
                            The Index Managers&apos; View
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-slate-400 max-w-[700px] mx-auto text-base md:text-lg"
                        >
                            Insights, analysis, and market perspectives from our expert index managers.
                        </motion.p>
                    </div>

                    {/* Search and Filters */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10 md:mb-12"
                    >
                        <div className="flex flex-wrap gap-2 md:gap-3 justify-center md:justify-start">
                            {categories.map((cat, i) => (
                                <button
                                    key={i}
                                    className={`px-4 md:px-5 py-2 rounded-full text-[11px] md:text-sm font-bold transition-all ${i === 0 ? 'bg-electric-blue text-white shadow-lg shadow-blue-500/20' : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                        <div className="relative w-full md:w-auto">
                            <input
                                type="text"
                                placeholder="Search articles..."
                                className="w-full md:w-[300px] bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-6 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-electric-blue transition-colors"
                            />
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                        </div>
                    </motion.div>

                    {/* Posts Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {posts.map((post, index) => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index }}
                                className="glass-card rounded-3xl overflow-hidden group hover:border-white/20 transition-all border border-white/5"
                            >
                                <Link href={`/blog/${post.id}`}>
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
                                        <h3 className="text-base md:text-lg font-bold text-white mb-3 group-hover:text-electric-blue transition-colors line-clamp-2 leading-snug">
                                            {post.title}
                                        </h3>
                                        <p className="text-slate-400 text-xs line-clamp-2 mb-4 leading-relaxed">{post.excerpt}</p>
                                        <span className="inline-flex items-center gap-2 text-xs font-bold text-electric-blue group-hover:gap-3 transition-all">
                                            Read Article <ArrowRight className="w-3 h-3" />
                                        </span>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Background Glows */}
                <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-blue-600/10 blur-[150px] rounded-full -z-10" />
                <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-purple-600/10 blur-[150px] rounded-full -z-10" />
            </section>

            <Footer />
        </main>
    );
}
