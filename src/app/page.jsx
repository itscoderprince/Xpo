import Navbar from "@/components/Navbar";
import HeroModern from "@/components/HeroModern";
import TrustedBy from "@/components/TrustedBy";
import WhyChooseModern from "@/components/WhyChooseModern";
import HowItWorksModern from "@/components/HowItWorksModern";
import MarketplaceModern from "@/components/MarketplaceModern";
import ExpertView from "@/components/ExpertView";
import CallToAction from "@/components/CallToAction";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-navy-950 font-sans selection:bg-electric-blue/30">
            <Navbar />

            {/* Scrollable Content Container */}
            <div className="relative">
                <HeroModern />
                <TrustedBy />
                <WhyChooseModern />
                <HowItWorksModern />
                <span id="whyxpo" className="absolute -top-20" />
                <MarketplaceModern />
                <ExpertView />
                <CallToAction />
                <TeamSection />
                <ContactSection />
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
