"use client";

import { Marquee } from "@/components/ui/marquee";

const partners = [
    { name: "Partner 1", logo: "https://xpo.ru/assets/images/hero1.png" },
    { name: "Partner 2", logo: "https://xpo.ru/assets/images/hero2.png" },
    { name: "Partner 3", logo: "https://xpo.ru/assets/images/hero3.png" },
    { name: "Partner 4", logo: "https://xpo.ru/assets/images/hero4.png" },
    { name: "Partner 5", logo: "https://xpo.ru/assets/images/hero5.png" },
];

const awards = [
    { img: "https://xpo.ru/assets/images/Awards.png", title: "Best Experience" },
    { img: "https://xpo.ru/assets/images/award2.png", title: "People's Choice" },
    { img: "https://xpo.ru/assets/images/award3.png", title: "Startup Year" },
    { img: "https://xpo.ru/assets/images/award4.png", title: "Best Affiliate" },
    { img: "https://xpo.ru/assets/images/award5.png", title: "Best Partnership" },
];

export default function TrustedBy() {
    return (
        <section className="py-12 md:py-20 bg-navy-950 border-y border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-6 mb-6 md:mb-10 text-center">
                <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-widest">
                    Trusted by Industry Leaders & Awarded for Excellence
                </p>
            </div>

            <div className="relative flex flex-col gap-8 md:gap-12">
                {/* Partners Marquee */}
                <Marquee pauseOnHover className="[--duration:40s]">
                    {partners.map((partner, i) => (
                        <div key={i} className="mx-4 md:mx-8 flex items-center justify-center opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                            <img src={partner.logo} alt={partner.name} className="h-8 md:h-10 w-auto object-contain" />
                        </div>
                    ))}
                    {partners.map((partner, i) => (
                        <div key={`dup-${i}`} className="mx-4 md:mx-8 flex items-center justify-center opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                            <img src={partner.logo} alt={partner.name} className="h-8 md:h-10 w-auto object-contain" />
                        </div>
                    ))}
                </Marquee>

                {/* Awards Marquee (Reverse) */}
                < Marquee reverse pauseOnHover className="[--duration:40s]" >
                    {awards.map((award, i) => (
                        <div key={i} className="mx-4 md:mx-8 flex items-center gap-3 md:gap-4 bg-white/5 px-4 md:px-6 py-2 md:py-3 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                            <img src={award.img} alt={award.title} className="h-8 md:h-12 w-auto object-contain" />
                            <span className="text-[10px] md:text-xs font-medium text-slate-400 max-w-[80px] md:max-w-[100px] leading-tight text-left">
                                {award.title}
                            </span>
                        </div>
                    ))}
                    {awards.map((award, i) => (
                        <div key={`dup-${i}`} className="mx-4 md:mx-8 flex items-center gap-3 md:gap-4 bg-white/5 px-4 md:px-6 py-2 md:py-3 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                            <img src={award.img} alt={award.title} className="h-8 md:h-12 w-auto object-contain" />
                            <span className="text-[10px] md:text-xs font-medium text-slate-400 max-w-[80px] md:max-w-[100px] leading-tight text-left">
                                {award.title}
                            </span>
                        </div>
                    ))}
                </Marquee >

                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 md:w-1/3 bg-gradient-to-r from-navy-950 dark:from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 md:w-1/3 bg-gradient-to-l from-navy-950 dark:from-background"></div>
            </div >
        </section >
    );
}
