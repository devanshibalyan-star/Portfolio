import { PORTFOLIO } from "@/constants/testIds";

const HEADSHOT =
    "https://customer-assets.emergentagent.com/job_pmm-portfolio-2/artifacts/am1okoka_WhatsApp%20Image%202026-06-24%20at%201.54.32%20AM.jpeg";

export default function POV() {
    return (
        <section
            id="pov"
            data-testid={PORTFOLIO.pov}
            className="px-6 md:px-12 lg:px-20 py-24 md:py-32 bg-[#F5F2EB]"
        >
            <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
                <div className="md:col-span-4 lg:col-span-3">
                    <div className="relative aspect-[3/4] img-mask grain shadow-[0_24px_60px_-30px_rgba(0,0,0,0.45)] max-w-[280px]">
                        <img
                            src={HEADSHOT}
                            alt="Devanshi"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute -bottom-3 -right-3 bg-[#7A1423] text-[#F5F2EB] px-3 py-1.5 text-[10px] uppercase tracking-[0.22em]">
                            POV
                        </div>
                    </div>
                </div>

                <div className="md:col-span-8 lg:col-span-9">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-[#4A4A4A] mb-4">
                        <span className="inline-block w-8 h-px bg-[#7A1423] align-middle mr-3" />
                        Point of view
                    </p>
                    <h2 className="h-hero text-4xl md:text-5xl lg:text-6xl mb-8 max-w-[18ch]">
                        How I think about <span className="italic-accent text-[#7A1423]">positioning</span>.
                    </h2>

                    <div className="space-y-5 text-base md:text-lg leading-relaxed text-[#1A1A1A] max-w-[64ch]">
                        <p>
                            Most positioning briefs start at the wrong altitude. They argue about
                            taglines, voice, or which adjective to fight over. By then it’s already
                            too late. The damage was done two layers up, when somebody picked the
                            wrong axis to compete on.
                        </p>
                        <p>
                            My loop is short: <em>find the unowned axis, name it, then build the
                            artifacts that make sales, product and growth all repeat the same
                            sentence.</em> Positioning isn’t a paragraph on the homepage. It’s the
                            shape of the procurement deck, the first slide of the QBR, the line a
                            customer uses to defend the renewal internally.
                        </p>
                        <p>
                            I look for the category’s default promise (what every competitor says),
                            the buyer’s actual job-to-be-done (which has usually quietly shifted),
                            and the moat that nobody is selling. Where those three intersect is the
                            wedge. Everything else is downstream.
                        </p>
                        <p className="font-display italic-accent text-2xl text-[#7A1423] pt-2">
                            Position once. Story everywhere. Measure everything.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
