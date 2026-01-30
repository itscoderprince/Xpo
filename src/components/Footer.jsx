"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, ArrowUpRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-navy-950 border-t border-white/5 pt-12 md:pt-24 pb-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12 md:mb-16">
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-5 md:gap-6">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center font-bold text-xl text-white">
                                X
                            </div>
                            <span className="text-2xl font-bold tracking-tighter text-white">XPO</span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                            Driving Innovation in Investment Management Since 2016. Your trusted partner for Forex, CFD, and Crypto.
                        </p>
                        <div className="flex justify-center lg:justify-start gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <Link key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-electric-blue hover:text-white transition-all">
                                    <Icon className="w-5 h-5" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-2 grid grid-cols-2 gap-8 lg:gap-12">
                        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                            <h4 className="text-white font-bold mb-5 md:mb-6">Quick Links</h4>
                            <ul className="flex flex-col items-center lg:items-start gap-3 md:gap-4">
                                {[
                                    { name: "What is XPO", href: "#how-it-works" },
                                    { name: "Why XPO", href: "#whyxpo" },
                                    { name: "XPO Indexes", href: "#xpoindex" },
                                    { name: "Trending Indexes", href: "#xpoindex" },
                                    { name: "Team", href: "#team" },
                                    { name: "Contact", href: "#contact" }
                                ].map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href} className="text-slate-400 hover:text-white transition-colors text-sm">{item.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                            <h4 className="text-white font-bold mb-5 md:mb-6">Resources</h4>
                            <ul className="flex flex-col items-center lg:items-start gap-3 md:gap-4">
                                {["Blog", "Expert View", "Investment Opportunity", "Company Profile", "Help Center", "Privacy Policy"].map((item) => (
                                    <li key={item}>
                                        <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">{item}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-5 md:gap-6">
                        <h4 className="text-white font-bold">Newsletter</h4>
                        <p className="text-slate-400 text-sm max-w-xs">Stay updated with the latest market trends and XPO insights.</p>
                        <div className="relative w-full max-w-sm">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-sm text-white focus:outline-none focus:border-electric-blue transition-colors"
                            />
                            <button className="absolute right-2 top-2 bg-electric-blue p-2 rounded-lg text-white hover:bg-blue-600 transition-colors">
                                <ArrowUpRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pt-10 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-500 text-[10px] md:text-xs text-center md:text-left">
                        © 2026 XPO Investment Management. All rights reserved.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
                        <Link href="#" className="text-slate-500 hover:text-white text-[10px] md:text-xs transition-colors">Terms of Service</Link>
                        <Link href="#" className="text-slate-500 hover:text-white text-[10px] md:text-xs transition-colors">Privacy Policy</Link>
                        <Link href="#" className="text-slate-500 hover:text-white text-[10px] md:text-xs transition-colors">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
