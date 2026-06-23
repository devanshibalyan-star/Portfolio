import { PORTFOLIO } from "@/constants/testIds";
import { Mail, Linkedin, Download, ArrowUpRight } from "lucide-react";

const EMAIL = "devanshi.pmm@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/devanshi/";

export default function Contact() {
    return (
        <section
            id="contact"
            data-testid={PORTFOLIO.contact}
            className="relative px-6 md:px-12 lg:px-20 py-24 md:py-36 bg-[#1A1A1A] text-[#F5F2EB] overflow-hidden"
        >
            {/* corner painting accent */}
            <div className="hidden md:block absolute -top-10 -right-10 w-[360px] aspect-[3/4] -rotate-6 opacity-80">
                <div className="relative w-full h-full img-mask">
                    <img
                        src="https://images.pexels.com/photos/8793880/pexels-photo-8793880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=700"
                        alt=""
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-[#1A1A1A] via-[#1A1A1A]/60 to-transparent" />
                </div>
            </div>

            <div className="relative grid md:grid-cols-12 gap-10">
                <div className="md:col-span-7">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-[#C98938] mb-6">
                        <span className="inline-block w-8 h-px bg-[#C98938] align-middle mr-3" />
                        Contact
                    </p>
                    <h2 className="h-hero text-5xl md:text-7xl lg:text-8xl leading-[0.92] mb-8">
                        Let’s build a brand
                        <br />
                        <span className="italic-accent text-[#C98938]">people repeat.</span>
                    </h2>
                    <p className="text-base md:text-lg leading-relaxed text-[#F5F2EB]/80 max-w-[52ch]">
                        I’m open to senior PMM, brand strategy, and founder-marketer roles
                        at startups in AI, beauty &amp; wellness, and cosmetics. Full-time,
                        contract, or a 4-week launch sprint — I’ll match the brief.
                    </p>
                </div>

                <div className="md:col-span-5 md:pl-8 md:border-l border-[#F5F2EB]/15">
                    <ul className="space-y-1">
                        <ContactRow
                            href={`mailto:${EMAIL}`}
                            label="Email"
                            value={EMAIL}
                            Icon={Mail}
                            testId={PORTFOLIO.contactEmail}
                        />
                        <ContactRow
                            href={LINKEDIN}
                            label="LinkedIn"
                            value="/in/devanshi"
                            Icon={Linkedin}
                            external
                            testId={PORTFOLIO.contactLinkedin}
                        />
                        <ContactRow
                            href="#"
                            label="Curriculum Vitae"
                            value="Download PDF"
                            Icon={Download}
                            testId={PORTFOLIO.contactCv}
                            onClick={(e) => {
                                e.preventDefault();
                                alert("CV will be linked here — drop me an email and I'll send the latest copy.");
                            }}
                        />
                    </ul>

                    <div className="mt-12 inline-flex items-center gap-3 px-4 py-2 border border-[#C98938] text-[#C98938] text-[11px] uppercase tracking-[0.22em]">
                        <span className="w-2 h-2 bg-[#C98938] rounded-full animate-pulse" />
                        Available · Q1 2026
                    </div>
                </div>
            </div>
        </section>
    );
}

function ContactRow({ href, label, value, Icon, external, testId, onClick }) {
    return (
        <li>
            <a
                href={href}
                onClick={onClick}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                data-testid={testId}
                className="group flex items-center justify-between gap-4 py-5 border-b border-[#F5F2EB]/15 hover:border-[#C98938] transition-colors"
            >
                <div className="flex items-center gap-4">
                    <Icon className="w-5 h-5 text-[#C98938]" />
                    <div>
                        <p className="text-[10px] uppercase tracking-[0.28em] text-[#F5F2EB]/60">{label}</p>
                        <p className="font-display text-xl md:text-2xl text-[#F5F2EB] group-hover:text-[#C98938] transition-colors">
                            {value}
                        </p>
                    </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[#F5F2EB]/40 group-hover:text-[#C98938] group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </a>
        </li>
    );
}
