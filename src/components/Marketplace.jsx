"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, Users, Coins } from "lucide-react";

const indexes = [
    {
        name: "Crypto Notebook",
        code: "CRYNO",
        manager: "Anisa Zolova",
        assets: ["BTC", "ETH", "SOL"],
        weeklyGrowth: "+3.68%",
        funds: "$12.6M",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anisa",
    },
    {
        name: "Profit Magnet",
        code: "PRMG",
        manager: "Alevtina Pavlova",
        assets: ["XRP", "BTC", "BNB"],
        weeklyGrowth: "+3.59%",
        funds: "$11.7M",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alevtina",
    },
    {
        name: "Metropolis FX",
        code: "METFX",
        manager: "Larisa Sokolov",
        assets: ["EUR", "USD", "JPY"],
        weeklyGrowth: "+3.99%",
        funds: "$10.4M",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Larisa",
    },
    {
        name: "Future Chain",
        code: "FUCHI",
        manager: "Anna Zotova",
        assets: ["ETH", "DOT", "MATIC"],
        weeklyGrowth: "+3.20%",
        funds: "$29.9M",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anna",
    },
    {
        name: "Backyard Trade",
        code: "BACKT",
        manager: "Guzel Seleznyov",
        assets: ["BTC", "LTC", "DASH"],
        weeklyGrowth: "+2.70%",
        funds: "$4.8M",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Guzel",
    },
    {
        name: "Index Unicorn",
        code: "UNICR",
        manager: "Plato Mordvinova",
        assets: ["SOL", "AVAX", "NEAR"],
        weeklyGrowth: "+3.64%",
        funds: "$10.7M",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Plato",
    },
    {
        name: "Dinaro Club",
        code: "DICL",
        manager: "Proclus Sergeyeva",
        assets: ["GOLD", "SILVER", "OIL"],
        weeklyGrowth: "+4.00%",
        funds: "$10.2M",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Proclus",
    },
    {
        name: "Alpha Union",
        code: "ALUN",
        manager: "Arkady Kovalev",
        assets: ["BTC", "ETH", "USDT"],
        weeklyGrowth: "+3.62%",
        funds: "$2.1B",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arkady",
    },
];

export default function IndexMarketplace() {
    return (
        <section id="trendingindex" className="py-24 bg-navy-950">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white">
                            The Marketplace
                        </h2>
                        <p className="text-slate-400 max-w-[500px]">
                            Access expertly curated indexes. Diversify your portfolio with Forex, Crypto, and CFDs.
                        </p>
                    </div>
                    <button className="flex items-center gap-2 text-electric-blue font-bold hover:gap-3 transition-all">
                        View All Indexes <ArrowUpRight className="w-5 h-5" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {indexes.map((item, index) => (
                        <motion.div
                            key={item.code}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.5 }}
                            className="glass-card p-6 rounded-[2rem] group hover:border-electric-blue/50 transition-all duration-500"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border border-white/5">
                                    <Coins className="w-6 h-6 text-white group-hover:text-electric-blue transition-colors" />
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Weekly</p>
                                    <p className="text-lg font-black text-emerald-400">{item.weeklyGrowth}</p>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-white group-hover:text-electric-blue transition-colors">
                                    {item.name}
                                </h3>
                                <p className="text-xs text-slate-500 font-bold tracking-widest">@{item.code}</p>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {item.assets.map(asset => (
                                    <span key={asset} className="px-2 py-1 bg-white/5 rounded-md text-[10px] font-bold text-slate-300">
                                        {asset}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center justify-between border-t border-white/5 pt-6 mt-auto">
                                <div className="flex items-center gap-3">
                                    <img src={item.image} alt={item.manager} className="w-8 h-8 rounded-full bg-white/10" />
                                    <div>
                                        <p className="text-[10px] text-slate-500 font-bold uppercase">Manager</p>
                                        <p className="text-xs font-bold text-white whitespace-nowrap">{item.manager}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] text-slate-500 font-bold uppercase">Trading</p>
                                    <p className="text-xs font-bold text-white">{item.funds}</p>
                                </div>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full mt-6 bg-white/5 hover:bg-electric-blue text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0"
                            >
                                Invest Now <TrendingUp className="w-4 h-4" />
                            </motion.button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
