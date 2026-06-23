import Nav from "@/components/portfolio/Nav";
import Hero from "@/components/portfolio/Hero";
import Marquee from "@/components/portfolio/Marquee";
import About from "@/components/portfolio/About";
import SelectedWork from "@/components/portfolio/SelectedWork";
import CampaignGallery from "@/components/portfolio/CampaignGallery";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import Reveal from "@/components/portfolio/Reveal";

export default function Home() {
    return (
        <main className="min-h-screen bg-[#F5F2EB] text-[#1A1A1A] font-body antialiased">
            <Nav />
            <Hero />
            <Marquee />
            <Reveal><About /></Reveal>
            <Reveal><SelectedWork /></Reveal>
            <Reveal><CampaignGallery /></Reveal>
            <Reveal><Contact /></Reveal>
            <Footer />
        </main>
    );
}
