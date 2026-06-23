import { PORTFOLIO } from "@/constants/testIds";

const stats = [
    { value: "4Y", label: "Years building brands from positioning to launch", testId: PORTFOLIO.aboutStat1 },
    { value: "12+", label: "Launch campaigns shipped across D2C, B2B & EdTech", testId: PORTFOLIO.aboutStat2 },
    { value: "1", label: "All-time-high sales month for a brand I rebuilt", testId: PORTFOLIO.aboutStat3 },
];

const badges = [
    { text: "PhD · Narrative & Discourse", testId: PORTFOLIO.aboutBadgePhd },
    { text: "Product School · Product Management", testId: PORTFOLIO.aboutBadgeProductSchool },
    { text: "UGC-NET Qualified", testId: PORTFOLIO.aboutBadgeUgcnet },
];

export default function About() {
    return (
        <section
            id="about"
            data-testid={PORTFOLIO.about}
            className="relative px-6 md:px-12 lg:px-20 py-24 md:py-36"
        >
            <div className="grid md:grid-cols-12 gap-10 md:gap-16">
                <div className="md:col-span-5 lg:col-span-4">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-[#4A4A4A] mb-6">
                        <span className="inline-block w-8 h-px bg-[#7A1423] align-middle mr-3" />
                        About
                    </p>
                    <div className="relative aspect-[3/4] img-mask grain shadow-[0_24px_60px_-30px_rgba(0,0,0,0.45)]">
                        <img
                            src="https://images.pexels.com/photos/31435546/pexels-photo-31435546.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=700"
                            alt="Classical marble — composure as craft"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-3 left-3 bg-[#F5F2EB] text-[#1A1A1A] px-3 py-1 text-[10px] uppercase tracking-[0.22em]">
                            Devanshi · PMM
                        </div>
                    </div>
                </div>

                <div className="md:col-span-7 lg:col-span-8">
                    <h2 className="h-hero text-5xl md:text-6xl lg:text-7xl mb-8 max-w-[18ch]">
                        I bridge <span className="italic-accent text-[#7A1423]">research</span>
                        <br /> and <span className="italic-accent text-[#C98938]">storytelling</span>.
                    </h2>
                    <div className="space-y-5 text-base md:text-lg leading-relaxed text-[#1A1A1A] max-w-[58ch]">
                        <p>
                            Four years in product marketing taught me one thing: the best
                            positioning is not the loudest, it’s the most listened-to.
                            I sit between the founder’s vision, the engineer’s capability,
                            and the customer’s unspoken need.
                        </p>
                        <p>
                            My PhD trained me to read culture, code-switch across audiences,
                            and pressure-test claims. Product School gave me the operating
                            cadence. Together, that’s how I take a feature list and turn
                            it into a brand people repeat at dinner.
                        </p>
                        <p className="font-display text-2xl md:text-3xl italic-accent text-[#1A1A1A] pt-2">
                            “Position once, story everywhere, measure everything.”
                        </p>
                    </div>

                    {/* credentials */}
                    <div className="mt-10 flex flex-wrap gap-3">
                        {badges.map((b) => (
                            <span
                                key={b.text}
                                data-testid={b.testId}
                                className="inline-flex items-center gap-2 px-4 py-2 border border-[#1A1A1A]/40 rounded-full text-[12px] tracking-wide text-[#1A1A1A]"
                            >
                                <span className="w-1.5 h-1.5 bg-[#7A1423] rounded-full" />
                                {b.text}
                            </span>
                        ))}
                    </div>

                    {/* stats */}
                    <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-[#E5E0D8] pt-10">
                        {stats.map((s) => (
                            <div key={s.label} data-testid={s.testId}>
                                <div className="font-display text-6xl md:text-7xl leading-none text-[#7A1423]">
                                    {s.value}
                                </div>
                                <p className="mt-3 text-sm text-[#4A4A4A] max-w-[28ch] leading-relaxed">
                                    {s.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
