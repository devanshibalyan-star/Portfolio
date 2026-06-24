import { PORTFOLIO } from "@/constants/testIds";

export default function Testimonial() {
    return (
        <section
            id="testimonial"
            data-testid={PORTFOLIO.testimonial}
            className="px-6 md:px-12 lg:px-20 py-20 md:py-28 bg-[#FCFBF8] border-y border-[#E5E0D8]"
        >
            <div className="grid md:grid-cols-12 gap-10 items-center">
                <div className="md:col-span-3">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-[#4A4A4A] mb-4">
                        <span className="inline-block w-8 h-px bg-[#7A1423] align-middle mr-3" />
                        What founders say
                    </p>
                    <span className="font-script text-5xl md:text-6xl text-[#7A1423] leading-none">“</span>
                </div>
                <blockquote className="md:col-span-9">
                    <p className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.15] text-[#1A1A1A] max-w-[34ch]">
                        Devanshi has driven numbers which seemed
                        <span className="italic-accent text-[#7A1423]"> unattainable </span>
                        before.
                    </p>
                    <footer className="mt-6 text-[12px] uppercase tracking-[0.22em] text-[#4A4A4A]">
                        <span className="text-[#1A1A1A]">Ishaan Teotia</span>
                        <span className="mx-2">·</span>
                        <span>Founder</span>
                        <span className="mx-2">·</span>
                        <span>Barghad Enterprises (Luco)</span>
                    </footer>
                </blockquote>
            </div>
        </section>
    );
}
