import { PORTFOLIO } from "@/constants/testIds";

export default function Hero() {
    return (
        <section
            id="top"
            data-testid={PORTFOLIO.hero}
            className="relative min-h-screen pt-32 md:pt-40 pb-16 md:pb-24 px-6 md:px-12 lg:px-20 overflow-hidden"
        >
            {/* floating painting fragment */}
            <div className="hidden md:block absolute top-24 right-12 lg:right-20 w-[280px] lg:w-[380px] aspect-[3/4] rotate-3 shadow-[0_30px_60px_-20px_rgba(122,20,35,0.35)]">
                <div className="relative w-full h-full img-mask grain">
                    <img
                        src="https://images.pexels.com/photos/27667225/pexels-photo-27667225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=700"
                        alt="Renaissance painting fragment"
                        className="w-full h-full object-cover"
                        loading="eager"
                    />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-[#C98938] text-[#1A1A1A] px-4 py-1.5 text-[10px] uppercase tracking-[0.25em] font-medium">
                    Est. 2021 · 4 yrs
                </div>
            </div>

            {/* meta strip */}
            <div className="flex items-center gap-6 text-[11px] uppercase tracking-[0.28em] text-[#4A4A4A] mb-10 md:mb-16">
                <span className="inline-block w-12 h-px bg-[#7A1423]" />
                <span>Portfolio · MMXXV</span>
                <span className="hidden md:inline">·</span>
                <span className="hidden md:inline">Bangalore / Remote</span>
            </div>

            <h1
                data-testid={PORTFOLIO.heroName}
                className="h-hero text-[14vw] md:text-[10.5vw] lg:text-[9.5rem] leading-[0.86] max-w-[18ch]"
            >
                Devanshi
                <br />
                <span className="italic-accent text-[#7A1423]">writes brands</span>
                <br />
                that sell.
            </h1>

            <div className="mt-10 md:mt-14 grid md:grid-cols-12 gap-8 md:gap-10 items-end">
                <div className="md:col-span-7 lg:col-span-6">
                    <p
                        data-testid={PORTFOLIO.heroTitle}
                        className="text-[11px] uppercase tracking-[0.3em] text-[#4A4A4A] mb-4"
                    >
                        Product Marketing &nbsp;·&nbsp; Brand Strategy
                    </p>
                    <p
                        data-testid={PORTFOLIO.heroThesis}
                        className="font-display text-2xl md:text-3xl leading-snug text-[#1A1A1A] max-w-[36ch]"
                    >
                        I turn complicated products into stories people repeat —
                        positioning rooted in research, narrative shaped by a
                        <span className="italic-accent text-[#7A1423]"> PhD in discourse</span>,
                        results measured in revenue.
                    </p>
                </div>

                <div className="md:col-span-5 lg:col-span-6 flex flex-col gap-4 md:items-end">
                    <div className="flex flex-wrap gap-3">
                        <a
                            data-testid={PORTFOLIO.heroCta}
                            href="#work"
                            className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#7A1423] text-[#F5F2EB] text-[12px] uppercase tracking-[0.22em] hover:bg-[#5e0f1b] transition-colors"
                        >
                            See selected work <span aria-hidden>→</span>
                        </a>
                        <a
                            data-testid={PORTFOLIO.heroCtaSecondary}
                            href="#contact"
                            className="inline-flex items-center gap-3 px-6 py-3.5 border border-[#1A1A1A] text-[12px] uppercase tracking-[0.22em] btn-mag"
                        >
                            Hire me
                        </a>
                    </div>
                </div>
            </div>

            {/* verticals */}
            <div className="mt-20 md:mt-28 border-t border-[#E5E0D8] pt-8">
                <p className="text-[11px] uppercase tracking-[0.28em] text-[#4A4A4A] mb-6">
                    Currently positioning for
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
                    <Vertical
                        n="01"
                        title="Artificial Intelligence"
                        body="Translating model capability into category-defining narratives that buyers actually understand."
                        testId={PORTFOLIO.heroVerticalAi}
                        color="#120A8F"
                    />
                    <Vertical
                        n="02"
                        title="Beauty & Wellness"
                        body="Science-backed brands that earn trust — efficacy claims, ingredient stories, ritual building."
                        testId={PORTFOLIO.heroVerticalWellness}
                        color="#7A1423"
                    />
                    <Vertical
                        n="03"
                        title="Cosmetics"
                        body="High-desire, high-margin launches — shade, sensorial, social commerce."
                        testId={PORTFOLIO.heroVerticalCosmetics}
                        color="#C98938"
                    />
                </div>
            </div>
        </section>
    );
}

function Vertical({ n, title, body, testId, color }) {
    return (
        <div data-testid={testId} className="group">
            <div className="flex items-baseline gap-3 mb-3">
                <span className="font-display text-3xl" style={{ color }}>
                    {n}
                </span>
                <span className="h-px flex-1 bg-[#E5E0D8] group-hover:bg-[#1A1A1A] transition-colors" />
            </div>
            <h3 className="font-display text-2xl md:text-[26px] leading-tight mb-2 text-[#1A1A1A]">
                {title}
            </h3>
            <p className="text-sm leading-relaxed text-[#4A4A4A] max-w-[34ch]">{body}</p>
        </div>
    );
}
