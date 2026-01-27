import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TradingPartners from "@/components/TradingPartners";
import Awards from "@/components/Awards";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import Stats from "@/components/Stats";
import DiscoverIndexes from "@/components/DiscoverIndexes";
import AboutXPO from "@/components/AboutXPO";
import IndexMarketplace from "@/components/Marketplace";
import ExpertView from "@/components/ExpertView";
import CallToAction from "@/components/CallToAction";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-navy-950">
            <Navbar />

            {/* Scrollable Content Container */}
            <div className="relative">
                <Hero />
                <TradingPartners />
                <Awards />
                <HowItWorks />
                <span id="whyxpo" className="absolute -top-20" />
                <WhyChooseUs />
                <Stats />
                <DiscoverIndexes />
                <AboutXPO />
                <IndexMarketplace />
                <ExpertView />
                <CallToAction />
                <TeamSection />
                <Footer />
            </div>

            {/* Global Background Glows */}
            <div className="fixed inset-0 pointer-events-none -z-50 overflow-hidden">
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-900/10 blur-[150px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-900/10 blur-[150px] rounded-full" />
            </div>
        </main>
    );
}
