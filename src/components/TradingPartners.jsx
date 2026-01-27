"use client";

import { motion } from "framer-motion";

const partners = [
    { name: "Partner 1", logo: "https://xpo.ru/assets/images/hero1.png" },
    { name: "Partner 2", logo: "https://xpo.ru/assets/images/hero2.png" },
    { name: "Partner 3", logo: "https://xpo.ru/assets/images/hero3.png" },
    { name: "Partner 4", logo: "https://xpo.ru/assets/images/hero4.png" },
    { name: "Partner 5", logo: "https://xpo.ru/assets/images/hero5.png" },
];

export default function TradingPartners() {
    return (
        <div className="py-12 border-b border-white/5 bg-navy-950/30">
            <div className="container mx-auto px-6">
                <div className="flex flex-wrap items-center justify-center md:justify-between gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
                    <div className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500 mr-8">
                        Our Trading Partners
                    </div>
                    {partners.map((partner, i) => (
                        <motion.img
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            src={partner.logo}
                            alt={partner.name}
                            className="h-8 md:h-12 w-auto object-contain hover:scale-110 transition-transform"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
