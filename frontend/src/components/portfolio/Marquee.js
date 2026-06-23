const items = [
    "Positioning",
    "Go-to-Market",
    "Brand Identity",
    "Narrative & Copy",
    "Audience Research",
    "Launch Campaigns",
    "Competitive Analysis",
    "Lifecycle & Content",
];

export default function Marquee() {
    const row = [...items, ...items];
    return (
        <section
            aria-label="Capabilities ticker"
            className="bg-[#7A1423] text-[#F5F2EB] border-y border-[#5e0f1b] overflow-hidden"
        >
            <div className="flex marquee-track whitespace-nowrap py-5">
                {row.map((t, i) => (
                    <div
                        key={i}
                        className="flex items-center gap-8 px-8 font-display text-2xl md:text-3xl tracking-tight"
                    >
                        <span className="italic-accent">{t}</span>
                        <span className="text-[#C98938]">✦</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
