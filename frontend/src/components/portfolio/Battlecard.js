import { PORTFOLIO } from "@/constants/testIds";

const rows = [
    {
        you: "Speed. ‘Type less, ship more.’",
        them: "Same line. Every competitor sounds identical.",
        play: "Pivot the demo to a 5-min ‘ship-with-confidence’ review walk-through. Don’t race them on tokens-per-second.",
    },
    {
        you: "Private + on-prem.",
        them: "Frames it as ‘enterprise compliance check.’",
        play: "Reframe as the product promise, not the SKU. Lead with provenance and code that survives review.",
    },
    {
        you: "Doesn’t train on your code.",
        them: "Buried in the trust page footer.",
        play: "Move it to the deck cover. It’s the headline objection-killer for the CISO.",
    },
];

export default function Battlecard() {
    return (
        <section
            id="battlecard"
            data-testid={PORTFOLIO.battlecard}
            className="px-6 md:px-12 lg:px-20 py-24 md:py-32 bg-[#1A1A1A] text-[#F5F2EB]"
        >
            <div className="grid md:grid-cols-12 gap-10 mb-10 md:mb-14">
                <div className="md:col-span-7">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-[#C98938] mb-4">
                        <span className="inline-block w-8 h-px bg-[#C98938] align-middle mr-3" />
                        Cross-functional artifact · Sales enablement
                    </p>
                    <h2 className="h-hero text-4xl md:text-5xl lg:text-6xl text-[#F5F2EB] max-w-[18ch]">
                        Battlecard, <span className="italic-accent text-[#C98938]">not brochure</span>.
                    </h2>
                </div>
                <p className="md:col-span-5 self-end text-sm md:text-base text-[#F5F2EB]/70 max-w-[42ch]">
                    A working artifact I’d hand a Series-B AE on day one. Same loop I use to bridge
                    product, marketing, sales and growth on one page.
                </p>
            </div>

            <div className="border border-[#F5F2EB]/15 bg-[#F5F2EB]/[0.03] backdrop-blur-sm">
                {/* card header */}
                <div className="grid grid-cols-12 px-5 md:px-7 py-4 border-b border-[#F5F2EB]/15 text-[10px] uppercase tracking-[0.28em] text-[#C98938]">
                    <div className="col-span-12 md:col-span-3">Your move</div>
                    <div className="hidden md:block md:col-span-4">What the incumbent does</div>
                    <div className="hidden md:block md:col-span-5">Play</div>
                </div>

                {/* rows */}
                {rows.map((r, i) => (
                    <div
                        key={i}
                        className="grid grid-cols-1 md:grid-cols-12 px-5 md:px-7 py-6 gap-4 border-b border-[#F5F2EB]/10 hover:bg-[#F5F2EB]/[0.04] transition-colors"
                    >
                        <div className="md:col-span-3">
                            <p className="md:hidden text-[10px] uppercase tracking-[0.22em] text-[#C98938] mb-1">
                                Your move
                            </p>
                            <p className="font-display text-xl md:text-2xl leading-tight text-[#F5F2EB]">
                                {r.you}
                            </p>
                        </div>
                        <div className="md:col-span-4">
                            <p className="md:hidden text-[10px] uppercase tracking-[0.22em] text-[#C98938] mb-1">
                                Incumbent
                            </p>
                            <p className="text-sm md:text-[15px] text-[#F5F2EB]/75 leading-relaxed">
                                {r.them}
                            </p>
                        </div>
                        <div className="md:col-span-5">
                            <p className="md:hidden text-[10px] uppercase tracking-[0.22em] text-[#C98938] mb-1">
                                Play
                            </p>
                            <p className="text-sm md:text-[15px] text-[#F5F2EB] leading-relaxed">
                                <span className="text-[#C98938] mr-2">→</span>
                                {r.play}
                            </p>
                        </div>
                    </div>
                ))}

                <div className="grid md:grid-cols-12 px-5 md:px-7 py-5 gap-4">
                    <div className="md:col-span-3 text-[10px] uppercase tracking-[0.28em] text-[#F5F2EB]/50">
                        Single source of truth
                    </div>
                    <div className="md:col-span-9 text-sm text-[#F5F2EB]/70">
                        One page. Updated quarterly. Reviewed by Product, Sales, Marketing and CS together.
                        Nobody walks into a deal without it.
                    </div>
                </div>
            </div>
        </section>
    );
}
