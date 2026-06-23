import { useState } from "react";
import { PORTFOLIO } from "@/constants/testIds";
import { ChevronDown } from "lucide-react";

const cases = [
    {
        slug: "trust-wedge",
        n: "01",
        brand: "The Trust Wedge",
        sector: "AI Developer Tools · Positioning Teardown · Concept",
        year: "Concept · Teardown",
        headline: "Repositioning a coding assistant in a category that only sells speed.",
        image:
            "https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1200&w=900",
        challenge:
            "Every AI coding tool makes the same promise: write code faster, your AI pair programmer, agentic editing. The incumbents own that axis. Copilot owns distribution, Cursor owns AI-native speed. A challenger competing on ‘faster’ fights two giants on their home turf, at their price, with their distribution. It loses.",
        insight:
            "The buyer changed and the category didn’t notice. In 2024 the buyer was the developer who wanted to type less. By 2026, with most new code AI-generated and nearly half of it shipping vulnerabilities, the real economic buyer is the engineering leader who now owns a review-and-risk problem the speed tools created. The brief stopped being ‘help me write code’ and became ‘let me trust what gets written.’ Nobody is selling to that buyer.",
        strategy:
            "Change the axis from speed to trust. Stop competing on ‘fastest agent’, a war the challenger can’t win, and seize the unowned position: the AI coding tool built to be verified. Lean into the real moats (on-prem, private, doesn’t train on your code) and reframe them from compliance checkboxes into the core promise: provenance, control, and code that survives review. Move the wedge buyer from the developer’s IDE preference to the eng leader’s procurement checklist.",
        result:
            "Shifts the buying conversation from feature parity, which the challenger loses, to risk ownership, which it wins. Reframes evaluation from ‘whose autocomplete is fastest’ to ‘whose code can my team actually ship,’ moving the decision out of the IDE and onto the CISO’s desk. The bet isn’t to out-feature the incumbents; it’s to make their axis look reckless.",
        resultLabel: "Result · Projected",
        accent: "#120A8F",
        takeaway:
            "You can’t out-fast the incumbent. You can out-trust them.",
        artifact: {
            before: "[Product]: your AI pair programmer. Ship code faster. (true of everyone, differentiates nothing)",
            after: "For engineering leaders shipping in high-stakes codebases, [Product] is the AI coding tool built to be verified. Private, on-prem, and provenance-aware by default, so the code your team ships with AI is code you can stand behind. Speed-first assistants optimise for output volume; [Product] optimises for what survives review.",
            pillars: [
                { name: "Provenance", body: "Know where every suggestion came from, and why." },
                { name: "Control", body: "Runs in your environment. Never trains on your code." },
                { name: "Verifiable", body: "Built to pass review, not just generate." },
            ],
        },
    },
    {
        slug: "luco",
        n: "02",
        brand: "Luco",
        sector: "Hospitality · Rebrand",
        year: "2022 to 2025",
        headline: "A 3-year rebrand that ended in the brand’s highest-grossing month ever.",
        image:
            "https://images.pexels.com/photos/8793880/pexels-photo-8793880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
        challenge:
            "Luco was a beloved but invisible hospitality brand. Strong service, no story. Revenue was flat, OTA-dependent, and competing on price.",
        insight:
            "Guests weren’t buying rooms; they were buying a feeling of being known. The brand had it, it just hadn’t named it.",
        strategy:
            "Led the rebrand from the name up: territory, voice, identity system, photography direction, in-property language, and a guest journey rewritten as a narrative arc.",
        result:
            "Brand work coincided with the property’s highest-grossing month on record. Direct-booking share grew meaningfully and OTA dependence dropped. Specific share figures available on request.",
        accent: "#7A1423",
    },
    {
        slug: "moxie-beauty",
        n: "03",
        brand: "Moxie Beauty",
        sector: "Science-based Haircare · India",
        year: "2023",
        headline: "Built the brand voice for a clinically-backed haircare house.",
        image:
            "https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1200&w=900",
        challenge:
            "An Indian science-led haircare brand entering a market saturated with ‘natural’ claims and influencer noise.",
        insight:
            "The Indian consumer is more informed than the market gives credit for. She wants evidence, not aesthetics dressed as evidence.",
        strategy:
            "Co-formulated brand identity, defined the ‘clinical-warm’ verbal territory, built an ingredient storytelling framework, and a launch narrative grounded in proof-of-efficacy.",
        result:
            "Brand voice contributed to a fast sell-through on the hero SKU and helped earn strong early review sentiment. The founder narrative I co-developed supported press coverage across several national outlets.",
        accent: "#7A1423",
        problemSolution: {
            problems: ["Influencer noise", "‘Natural’ claim fatigue", "No clinical credibility", "Generic packaging language"],
            solutions: ["Proof-of-efficacy narrative", "Ingredient storytelling framework", "Clinical-warm verbal territory", "Founder-led PR engine"],
        },
    },
    {
        slug: "athena-education",
        n: "04",
        brand: "Athena Education",
        sector: "Admissions Consultancy · EdTech",
        year: "2022",
        headline: "Multi-channel campaigns that turned ‘consulting’ into a category.",
        image:
            "https://images.pexels.com/photos/16397731/pexels-photo-16397731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
        challenge:
            "A premium admissions consultancy fighting commodity perception in a crowded EdTech market dominated by discount-led players.",
        insight:
            "Parents weren’t buying tutoring. They were buying certainty of outcome. The brief was emotional, not academic.",
        strategy:
            "Ran integrated campaigns across paid, organic, and PR. Repositioned the offering around ‘admit confidence’, built a parent-first content engine, and a referral mechanic designed to compound.",
        result:
            "Campaign work I led contributed to a step-change in qualified inbound, a substantial drop in cost-per-application, and a sustained lift in referral share through the cycle.",
        accent: "#C98938",
    },
    {
        slug: "jss",
        n: "05",
        brand: "JSS",
        sector: "Higher Education · Engineering",
        year: "2024",
        headline: "Repositioned a legacy engineering institution as a premier tech name.",
        image:
            "https://images.pexels.com/photos/27667225/pexels-photo-27667225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
        challenge:
            "JSS had decades of academic credibility but read as ‘safe and traditional’ to a generation of students hunting for tech-forward identity.",
        insight:
            "Reputation is a story told by alumni, not a brochure. The institution was producing brilliant engineers, nobody knew their names.",
        strategy:
            "Rebuilt narrative around outcomes (founders, builders, researchers), launched an alumni-first content series, and re-skinned messaging across the admissions funnel and campus surfaces.",
        result:
            "Repositioning work supported a meaningful rise in applications from Tier-1 cities, expanded press coverage in tech publications, and contributed to brand search volume growth over the campaign window.",
        accent: "#120A8F",
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
                        Selected Work · 05 case studies
                    </p>
                    <h2 className="h-hero text-5xl md:text-6xl lg:text-7xl max-w-[16ch]">
                        Stories that <span className="italic-accent text-[#7A1423]">moved numbers</span>.
                    </h2>
                </div>
                <p className="max-w-[36ch] text-sm md:text-base text-[#4A4A4A]">
                    Each case follows the same discipline I bring to every brief.
                    <em> Challenge → Insight → Strategy → Result.</em>
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

function CaseStudy({ slug, n, brand, sector, year, headline, image, challenge, insight, strategy, result, resultLabel, accent, flipped, takeaway, problemSolution, artifact }) {
    return (
        <article
            data-testid={PORTFOLIO.workCase(slug)}
            className="grid md:grid-cols-12 gap-8 md:gap-14 items-start"
        >
            <div className={`md:col-span-6 ${flipped ? "md:order-2" : ""}`}>
                <div className="relative aspect-[4/5] img-mask grain shadow-[0_30px_60px_-30px_rgba(0,0,0,0.45)]">
                    <img src={image} alt={`${brand} case study`} className="w-full h-full object-cover" />
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

                {problemSolution && (
                    <div className="mt-8 grid grid-cols-2 gap-6 bg-[#FCFBF8] border border-[#E5E0D8] p-5 md:p-7">
                        <div>
                            <p className="font-poster text-2xl md:text-3xl text-[#1A1A1A] mb-4">
                                your <span className="text-[#7A1423]">problems</span>
                            </p>
                            <ul className="space-y-2.5">
                                {problemSolution.problems.map((p) => (
                                    <li key={p} className="text-[12px] md:text-[13px] inline-block bg-[#F5F2EB] px-3 py-1.5 rounded-full text-[#1A1A1A] mr-2 mb-2">
                                        {p}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <p className="font-poster text-2xl md:text-3xl text-[#1A1A1A] mb-4">
                                our <span className="scribble-oval text-[#7A1423]">solution</span>
                            </p>
                            <ul className="space-y-2.5">
                                {problemSolution.solutions.map((s) => (
                                    <li key={s} className="text-[12px] md:text-[13px] inline-block bg-[#1A1A1A] px-3 py-1.5 rounded-full text-[#F5F2EB] mr-2 mb-2">
                                        {s}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </div>

            <div className={`md:col-span-6 ${flipped ? "md:order-1" : ""}`}>
                <p className="text-[11px] uppercase tracking-[0.28em] text-[#4A4A4A] mb-3">
                    {sector}
                </p>
                <h3 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.02] mb-4 text-[#1A1A1A]">
                    {brand}
                </h3>
                <p className="font-display italic-accent text-xl md:text-2xl mb-8 max-w-[34ch]" style={{ color: accent }}>
                    {headline}
                </p>

                <div className="space-y-5">
                    <Block label="Challenge" body={challenge} />
                    <Block label="Insight" body={insight} accent={accent} />
                    <Block label="Strategy" body={strategy} />
                    <Block label={resultLabel || "Result"} body={result} bold />
                </div>

                {takeaway && (
                    <div className="mt-8 border-t border-[#E5E0D8] pt-6 flex items-start gap-4">
                        <span className="font-script text-3xl text-[#7A1423] leading-none">✱</span>
                        <p className="font-script text-2xl md:text-3xl text-[#1A1A1A] leading-tight max-w-[36ch]">
                            {takeaway}
                        </p>
                    </div>
                )}

                {artifact && <ArtifactPanel artifact={artifact} />}
            </div>
        </article>
    );
}

function ArtifactPanel({ artifact }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="mt-8 border border-[#1A1A1A]">
            <button
                onClick={() => setOpen((v) => !v)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 bg-[#1A1A1A] text-[#F5F2EB] hover:bg-[#120A8F] transition-colors"
            >
                <span className="flex items-center gap-3">
                    <span className="font-script text-2xl text-[#C98938]">✱</span>
                    <span className="text-[11px] uppercase tracking-[0.28em]">
                        Artifact · Before / After Positioning
                    </span>
                </span>
                <ChevronDown
                    className={`w-5 h-5 transition-transform duration-500 ${open ? "rotate-180" : ""}`}
                />
            </button>
            <div
                className={`grid transition-all duration-500 ${
                    open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
            >
                <div className="overflow-hidden">
                    <div className="p-5 md:p-7 bg-[#FCFBF8] space-y-7">
                        <div>
                            <p className="text-[10px] uppercase tracking-[0.28em] text-[#4A4A4A] mb-2">
                                Positioning · before (category default)
                            </p>
                            <p className="font-display italic-accent text-lg md:text-xl text-[#1A1A1A]/70 leading-snug">
                                “{artifact.before}”
                            </p>
                        </div>
                        <div className="border-t border-[#E5E0D8] pt-6">
                            <p className="text-[10px] uppercase tracking-[0.28em] text-[#7A1423] mb-2">
                                Positioning · after
                            </p>
                            <p className="font-display text-lg md:text-xl text-[#1A1A1A] leading-snug">
                                {artifact.after}
                            </p>
                        </div>
                        <div className="border-t border-[#E5E0D8] pt-6">
                            <p className="text-[10px] uppercase tracking-[0.28em] text-[#1A1A1A] mb-4">
                                Messaging house · three pillars
                            </p>
                            <div className="grid sm:grid-cols-3 gap-4">
                                {artifact.pillars.map((p) => (
                                    <div key={p.name} className="bg-[#F5F2EB] p-4 border-l-2 border-[#120A8F]">
                                        <p className="font-poster text-2xl text-[#1A1A1A] mb-1">{p.name}</p>
                                        <p className="text-[13px] text-[#1A1A1A]/80 leading-relaxed">{p.body}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
