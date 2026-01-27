"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const awards = [
    {
        org: "fxempire",
        title: "Best Customer Experience",
        year: "2022",
        img: "https://xpo.ru/assets/images/Awards.png",
    },
    {
        org: "Central European Startup Awards",
        title: "People's Choice Award",
        year: "2021",
        img: "https://xpo.ru/assets/images/award2.png",
    },
    {
        org: "Central European Startup Awards",
        title: "Startup of the year award",
        year: "2020",
        img: "https://xpo.ru/assets/images/award3.png",
    },
    {
        org: "Global Forex Awards",
        title: "Best Affiliate Program Global",
        year: "2019",
        img: "https://xpo.ru/assets/images/award4.png",
    },
    {
        org: "Global Forex Awards",
        title: "Best Partnership Program Global",
        year: "2020",
        img: "https://xpo.ru/assets/images/award5.png",
    },
];

export default function Awards() {
    // Triple the awards for seamless infinite sliding
    const duplicatedAwards = [...awards, ...awards, ...awards];

    return (
        <section className="py-24 relative overflow-hidden bg-navy-950/50">
            <div className="container mx-auto px-6 mb-16">
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 mb-4"
                    >
                        <img src="https://xpo.ru/assets/images/x-2.png" alt="X Icon" className="h-6 w-auto" />
                        <h5 className="text-electric-blue font-bold uppercase tracking-[0.2em] text-sm">Awards</h5>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6 uppercase"
                    >
                        Our Awards
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 max-w-[800px] text-lg leading-relaxed"
                    >
                        Celebrating excellence and innovation, our awards showcase trust, dedication, <br className="hidden md:block" />
                        and industry leadership.
                    </motion.p>
                </div>
            </div>

            {/* Infinite Carousel */}
            <div className="relative flex overflow-hidden">
                <motion.div
                    animate={{ x: [0, "-33.33%"] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 25,
                            ease: "linear",
                        }
                    }}
                    className="flex gap-8 whitespace-nowrap px-4"
                >
                    {duplicatedAwards.map((award, index) => (
                        <div
                            key={index}
                            className="glass-card min-w-[380px] md:min-w-[475px] p-10 rounded-[2.5rem] group relative overflow-hidden flex flex-col md:flex-row items-center gap-8 border border-white/5 hover:border-white/10 transition-all duration-500"
                        >
                            {/* Decorative side accents from original HTML (sty, sty1) */}
                            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-electric-blue to-transparent opacity-50" />
                            <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-t from-emerald-500 to-transparent opacity-30" />

                            {/* Award Image */}
                            <div className="flex-shrink-0 relative z-10">
                                <img
                                    src={award.img}
                                    alt={award.org}
                                    className="h-24 md:h-32 w-auto object-contain group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            {/* Award Content - Structured as per HTML 'shape text-right' */}
                            <div className="flex-grow text-center md:text-right relative z-10 flex flex-col justify-center">
                                <div className="text-uppercase">
                                    <span className="block font-black text-xl text-white tracking-tight leading-tight mb-4 group-hover:text-electric-blue transition-colors">
                                        {award.org}
                                    </span>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-slate-300 font-medium text-lg leading-snug whitespace-normal">
                                            {award.title}
                                        </span>
                                        <span className="text-slate-500 font-bold tracking-widest text-sm mt-2">
                                            {award.year}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Background watermark icon */}
                            <Trophy className="absolute -bottom-4 -right-4 w-32 h-32 text-white/[0.02] group-hover:text-white/[0.05] transition-colors -rotate-12" />
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Side Vignettes for cinematic feel */}
            <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-navy-950 to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-navy-950 to-transparent z-20 pointer-events-none" />
        </section>
    );
}
