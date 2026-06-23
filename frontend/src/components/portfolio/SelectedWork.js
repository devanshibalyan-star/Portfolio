import { PORTFOLIO } from "@/constants/testIds";

const cases = [
    {
        slug: "luco",
        n: "01",
        brand: "Luco",
        sector: "Hospitality · Rebrand",
        year: "2022 — 2025",
        headline: "A 3-year rebrand that ended in the brand’s highest-grossing month ever.",
        image:
            "https://images.pexels.com/photos/8793880/pexels-photo-8793880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
        challenge:
            "Luco was a beloved but invisible hospitality brand — strong service, no story. Revenue was flat, OTA-dependent, and competing on price.",
        insight:
            "Guests weren’t buying rooms; they were buying a feeling of being known. The brand had it — it just hadn’t named it.",
        strategy:
            "Led the rebrand from the name up: territory, voice, identity system, photography direction, in-property language, and a guest journey rewritten as a narrative arc.",
        result:
            "All-time-high monthly sales last month · +38% direct-booking share · OTA dependence down to 41%.",
        accent: "#7A1423",
    },
    {
        slug: "moxie-beauty",
        n: "02",
        brand: "Moxie Beauty",
        sector: "Science-based Haircare · India",
        year: "2023",
        headline: "Built the brand voice for a clinically-backed haircare house.",
        image:
            "https://images.pexels.com/photos/19681870/pexels-photo-19681870.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
        challenge:
            "An Indian science-led haircare brand entering a market saturated with ‘natural’ claims and influencer noise.",
        insight:
            "The Indian consumer is more informed than the market gives credit for — she wants evidence, not aesthetics dressed as evidence.",
        strategy:
            "Co-formulated brand identity, defined the ‘clinical-warm’ verbal territory, ingredient storytelling framework, and a launch narrative built around proof-of-efficacy.",
        result:
            "Sold-out hero SKU in 3 weeks · 4.7★ avg review across 1,200+ verified buyers · founder featured in 6 national press outlets.",
        accent: "#C98938",
    },
    {
        slug: "athena-education",
        n: "03",
        brand: "Athena Education",
        sector: "Admissions Consultancy · EdTech",
        year: "2022",
        headline: "Multi-channel campaigns that turned ‘consulting’ into a category.",
        image:
            "https://images.pexels.com/photos/16397731/pexels-photo-16397731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
        challenge:
            "A premium admissions consultancy fighting commodity perception in a crowded EdTech market dominated by discount-led players.",
        insight:
            "Parents weren’t buying tutoring — they were buying certainty of outcome. The brief was emotional, not academic.",
        strategy:
            "Ran integrated campaigns across paid, organic, and PR. Repositioned the offering around ‘admit confidence’; built a parent-first content engine and a referral mechanic that compounded.",
        result:
            "+2.3× qualified inbound leads · 47% drop in cost-per-application · referral share grew from 9% to 31%.",
        accent: "#120A8F",
    },
    {
        slug: "jss",
        n: "04",
        brand: "JSS",
        sector: "Higher Education · Engineering",
        year: "2024",
        headline: "Repositioned a legacy engineering institution as a premier tech name.",
        image:
            "https://images.pexels.com/photos/27667225/pexels-photo-27667225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
        challenge:
            "JSS had decades of academic credibility but read as ‘safe and traditional’ to a generation of students hunting for tech-forward identity.",
        insight:
            "Reputation is a story told by alumni, not a brochure. The institution was producing brilliant engineers — nobody knew their names.",
        strategy:
            "Rebuilt narrative around outcomes (founders, builders, researchers), launched an alumni-first content series, and re-skinned messaging across admissions funnel and campus surfaces.",
        result:
            "+61% applications from Tier-1 cities · doubled press coverage in tech publications · brand search volume up 84% YoY.",
        accent: "#7A1423",
    },
];

export default function SelectedWork() {
    return (
        <section
            id="work"
            data-testid={PORTFOLIO.work}
            className="px-6 md:px-12 lg:px-20 py-24 md:py-36 bg-[#F5F2EB]"
        >
            <div className="flex items-end justify-between flex-wrap gap-6 mb-14 md:mb-20">
                <div>
                    <p className="text-[11px] uppercase tracking-[0.28em] text-[#4A4A4A] mb-4">
                        <span className="inline-block w-8 h-px bg-[#7A1423] align-middle mr-3" />
                        Selected Work · 04 case studies
                    </p>
                    <h2 className="h-hero text-5xl md:text-6xl lg:text-7xl max-w-[16ch]">
                        Stories that <span className="italic-accent text-[#7A1423]">moved numbers</span>.
                    </h2>
                </div>
                <p className="max-w-[36ch] text-sm md:text-base text-[#4A4A4A]">
                    Each case follows the same discipline I bring to every brief —
                    <em> Challenge → Insight → Strategy → Result</em>.
                </p>
            </div>

            <div className="space-y-24 md:space-y-32">
                {cases.map((c, i) => (
                    <CaseStudy key={c.slug} {...c} flipped={i % 2 === 1} />
                ))}
            </div>
        </section>
    );
}

function CaseStudy({ slug, n, brand, sector, year, headline, image, challenge, insight, strategy, result, accent, flipped }) {
    return (
        <article
            data-testid={PORTFOLIO.workCase(slug)}
            className="grid md:grid-cols-12 gap-8 md:gap-14 items-start"
        >
            <div className={`md:col-span-6 ${flipped ? "md:order-2" : ""}`}>
                <div className="relative aspect-[4/5] img-mask grain shadow-[0_30px_60px_-30px_rgba(0,0,0,0.45)]">
                    <img src={image} alt={`${brand} — case study`} className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                        <span className="px-3 py-1 bg-[#F5F2EB] text-[10px] uppercase tracking-[0.22em]">
                            Case · {n}
                        </span>
                    </div>
                    <div
                        className="absolute bottom-4 right-4 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-[#F5F2EB]"
                        style={{ backgroundColor: accent }}
                    >
                        {year}
                    </div>
                </div>
            </div>

            <div className={`md:col-span-6 ${flipped ? "md:order-1" : ""}`}>
                <p className="text-[11px] uppercase tracking-[0.28em] text-[#4A4A4A] mb-3">
                    {sector}
                </p>
                <h3 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.02] mb-4 text-[#1A1A1A]">
                    {brand}
                </h3>
                <p className="font-display italic-accent text-xl md:text-2xl text-[#1A1A1A] mb-8 max-w-[34ch]" style={{ color: accent }}>
                    {headline}
                </p>

                <div className="space-y-5">
                    <Block label="Challenge" body={challenge} />
                    <Block label="Insight" body={insight} accent={accent} />
                    <Block label="Strategy" body={strategy} />
                    <Block label="Result" body={result} bold />
                </div>
            </div>
        </article>
    );
}

function Block({ label, body, bold = false, accent }) {
    return (
        <div className="grid grid-cols-[110px_1fr] gap-5 items-baseline border-t border-[#E5E0D8] pt-4">
            <span
                className="text-[10px] uppercase tracking-[0.28em] font-medium"
                style={{ color: accent || "#4A4A4A" }}
            >
                {label}
            </span>
            <p
                className={`leading-relaxed text-[#1A1A1A] ${
                    bold ? "font-medium text-[15px] md:text-base" : "text-sm md:text-[15px] text-[#1A1A1A]/85"
                }`}
            >
                {body}
            </p>
        </div>
    );
}
