import { useEffect, useState } from "react";
import { PORTFOLIO } from "@/constants/testIds";

const links = [
    { id: "about", label: "About", testId: PORTFOLIO.navAbout },
    { id: "work", label: "Selected Work", testId: PORTFOLIO.navWork },
    { id: "gallery", label: "Gallery", testId: PORTFOLIO.navGallery },
    { id: "contact", label: "Contact", testId: PORTFOLIO.navContact },
];

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            data-testid={PORTFOLIO.nav}
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
                scrolled
                    ? "bg-[#F5F2EB]/85 backdrop-blur-xl border-b border-[#E5E0D8]"
                    : "bg-transparent"
            }`}
        >
            <div className="px-6 md:px-12 lg:px-20 py-5 flex items-center justify-between">
                <a
                    data-testid={PORTFOLIO.navHome}
                    href="#top"
                    className="font-display text-2xl md:text-[28px] tracking-tight leading-none text-[#1A1A1A]"
                >
                    Devanshi<span className="text-[#7A1423]">.</span>
                </a>

                <nav className="hidden md:flex items-center gap-10">
                    {links.map((l) => (
                        <a
                            key={l.id}
                            data-testid={l.testId}
                            href={`#${l.id}`}
                            className="text-[13px] uppercase tracking-[0.18em] text-[#1A1A1A] link-underline"
                        >
                            {l.label}
                        </a>
                    ))}
                </nav>

                <a
                    data-testid={PORTFOLIO.navCta}
                    href="#contact"
                    className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 border border-[#1A1A1A] text-[12px] uppercase tracking-[0.2em] btn-mag"
                >
                    Let’s talk
                    <span aria-hidden>→</span>
                </a>
            </div>
        </header>
    );
}
