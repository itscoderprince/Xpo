"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";

const marketData = [
    { symbol: "BTC", price: "$64,234.50", change: "+2.4%", up: true },
    { symbol: "ETH", price: "$3,456.20", change: "+1.2%", up: true },
    { symbol: "SOL", price: "$145.80", change: "-0.5%", up: false },
    { symbol: "XRP", price: "$0.62", change: "+4.1%", up: true },
    { symbol: "ADA", price: "$0.45", change: "-1.8%", up: false },
    { symbol: "DOT", price: "$7.20", change: "+0.3%", up: true },
    { symbol: "BNB", price: "$580.40", change: "+1.1%", up: true },
    { symbol: "LINK", price: "$18.20", change: "-2.2%", up: false },
];

export default function Ticker() {
    // Duplicate the data to ensure seamless loop
    const duplicatedData = [...marketData, ...marketData];

    return (
        <div className="w-full bg-navy-900/50 border-y border-white/5 py-4 overflow-hidden backdrop-blur-sm">
            <motion.div
                animate={{ x: [0, -1000] }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 25,
                        ease: "linear",
                    },
                }}
                className="flex gap-12 whitespace-nowrap min-w-max px-12"
            >
                {duplicatedData.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                        <span className="text-sm font-bold text-white tracking-widest">{item.symbol}</span>
                        <span className="text-sm font-medium text-slate-300">{item.price}</span>
                        <div className={`flex items-center gap-1 text-xs font-bold ${item.up ? "text-emerald-400" : "text-red-400"}`}>
                            {item.up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                            {item.change}
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
