"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Share2, Bookmark, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { use } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Mock data - in a real app this would come from a CMS or API
const posts = {
    "divergence-monetary-policy": {
        title: "Divergence in monetary policy: the EUR/USD outlook",
        category: "Forex",
        date: "May 12, 2024",
        author: "Arkady Kovalev",
        authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arkady",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1611974714658-058df2c525f0?auto=format&fit=crop&q=80&w=1600",
        content: `
      <p>The EUR/USD currency pair has always been a bellwether for global economic health. As we navigate 2024, the divergence in monetary policy between the European Central Bank (ECB) and the Federal Reserve (Fed) is creating unique opportunities and challenges for forex traders.</p>
      
      <h2>Understanding the Current Landscape</h2>
      <p>The Federal Reserve's aggressive rate hikes over the past two years have significantly strengthened the US dollar. Meanwhile, the ECB has taken a more measured approach, balancing inflation concerns with economic growth objectives.</p>
      
      <p>This divergence has led to notable volatility in the EUR/USD pair, with the euro trading in a range between 1.05 and 1.12 against the dollar for much of the year.</p>

      <h2>Key Factors to Watch</h2>
      <p>Several factors will influence the EUR/USD outlook in the coming months:</p>
      <ul>
        <li><strong>Inflation trends:</strong> Both regions are experiencing different inflation trajectories, which will influence central bank decisions.</li>
        <li><strong>Economic growth:</strong> The relative strength of the US and European economies will play a crucial role.</li>
        <li><strong>Geopolitical events:</strong> Global tensions and trade policies continue to impact currency valuations.</li>
      </ul>

      <h2>Strategic Recommendations</h2>
      <p>For investors looking to capitalize on these dynamics, we recommend a diversified approach that includes both long and short positions based on technical breakout levels. Our Alpha Union index is specifically designed to navigate these market conditions.</p>

      <p>The key is to remain flexible and responsive to changing central bank communications. Forward guidance from both the ECB and Fed will be crucial in determining short-term direction.</p>

      <h2>Conclusion</h2>
      <p>The EUR/USD pair remains one of the most traded currency pairs globally, and its movements have far-reaching implications for portfolios across asset classes. By understanding the underlying policy divergence and positioning accordingly, investors can potentially benefit from these market dynamics.</p>
    `,
    },
    "bitcoin-hedge-inflation": {
        title: "Can Bitcoin be used as a hedge against inflation?",
        category: "Crypto",
        date: "June 05, 2024",
        author: "Anisa Zolova",
        authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anisa",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&q=80&w=1600",
        content: `
      <p>Bitcoin has often been called "digital gold" due to its limited supply and decentralized nature. But does it truly function as an effective hedge against inflation?</p>
      
      <h2>The Case for Bitcoin as an Inflation Hedge</h2>
      <p>With a hard cap of 21 million coins and a predictable halving schedule, Bitcoin's monetary policy is arguably the most transparent and immutable in existence. This scarcity model contrasts sharply with fiat currencies, which can be printed at will by central banks.</p>

      <h2>Historical Performance</h2>
      <p>Bitcoin's track record during inflationary periods has been mixed. While it performed exceptionally well during the 2020-2021 period of monetary expansion, it struggled in 2022 when central banks began tightening policy.</p>

      <h2>Our Perspective</h2>
      <p>We believe Bitcoin should be viewed as a long-term store of value rather than a short-term inflation hedge. Its volatility makes it unsuitable for those seeking immediate protection, but its long-term appreciation potential remains compelling.</p>
    `,
    },
};

const relatedPosts = [
    {
        id: "investing-gold-now",
        title: "Is it worth investing in gold right now?",
        category: "Commodities",
        image: "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "understanding-cfd-trading",
        title: "Understanding CFD Trading: A Comprehensive Guide",
        category: "CFD",
        image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800",
    },
];

export default function BlogDetailPage({ params }) {
    const resolvedParams = use(params);
    const post = posts[resolvedParams.slug] || posts["divergence-monetary-policy"];

    return (
        <main className="min-h-screen bg-navy-950">
            <Navbar />

            <article className="pt-32 pb-24 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    {/* Back Link */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-8"
                    >
                        <Link href="/blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors group">
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            Back to Blog
                        </Link>
                    </motion.div>

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto text-center mb-12"
                    >
                        <div className="flex items-center justify-center gap-4 mb-6 text-sm">
                            <span className="bg-electric-blue/20 text-electric-blue px-4 py-1.5 rounded-full font-bold uppercase tracking-widest text-xs">
                                {post.category}
                            </span>
                            <span className="flex items-center gap-1.5 text-slate-400"><Clock className="w-4 h-4" /> {post.readTime}</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-8 leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex items-center justify-center gap-6">
                            <div className="flex items-center gap-3">
                                <img src={post.authorImage} alt={post.author} className="w-12 h-12 rounded-full bg-white/10" />
                                <div className="text-left">
                                    <p className="text-white font-bold">{post.author}</p>
                                    <p className="text-slate-500 text-sm flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.date}</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white transition-all">
                                    <Share2 className="w-5 h-5" />
                                </button>
                                <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white transition-all">
                                    <Bookmark className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Featured Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-5xl mx-auto mb-16"
                    >
                        <div className="aspect-[21/9] rounded-[2.5rem] overflow-hidden border border-white/10">
                            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="max-w-3xl mx-auto prose prose-invert prose-lg prose-headings:font-black prose-headings:tracking-tight prose-a:text-electric-blue prose-strong:text-white"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* Related Posts */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="max-w-5xl mx-auto mt-24 pt-16 border-t border-white/10"
                    >
                        <h3 className="text-2xl font-black text-white mb-8">Related Articles</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {relatedPosts.map((related, i) => (
                                <Link
                                    key={i}
                                    href={`/blog/${related.id}`}
                                    className="glass-card rounded-2xl overflow-hidden group hover:border-white/20 transition-all border border-white/5 flex"
                                >
                                    <div className="w-1/3 overflow-hidden">
                                        <img src={related.image} alt={related.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <div className="flex-1 p-6 flex flex-col justify-center">
                                        <span className="text-electric-blue text-xs font-bold uppercase tracking-widest mb-2">{related.category}</span>
                                        <h4 className="text-white font-bold group-hover:text-electric-blue transition-colors line-clamp-2">{related.title}</h4>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Background Glows */}
                <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-blue-600/10 blur-[150px] rounded-full -z-10" />
                <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-purple-600/10 blur-[150px] rounded-full -z-10" />
            </article>

            <Footer />
        </main>
    );
}
