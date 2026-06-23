import { PORTFOLIO } from "@/constants/testIds";

const tiles = [
    {
        type: "image",
        label: "Positioning Map",
        sub: "AI productivity · concept",
        tag: "Concept",
        img: "https://images.pexels.com/photos/27667225/pexels-photo-27667225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
        span: "md:col-span-5 md:row-span-2",
    },
    {
        type: "text",
        label: "“We don’t sell rooms.\nWe sell being known.”",
        sub: "Luco · brand thesis",
        tag: "Real work",
        bg: "#7A1423",
        fg: "#F5F2EB",
        span: "md:col-span-4",
    },
    {
        type: "image",
        label: "Launch Film · Hero Frame",
        sub: "Moxie Beauty",
        tag: "Real work",
        img: "https://images.pexels.com/photos/8793880/pexels-photo-8793880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=600",
        span: "md:col-span-3",
    },
    {
        type: "text",
        label: "GTM Doc · v3",
        sub: "12 segments · 4 channels · 1 wedge",
        tag: "Framework",
        bg: "#C98938",
        fg: "#1A1A1A",
        span: "md:col-span-3",
    },
    {
        type: "image",
        label: "Editorial Spread",
        sub: "Athena · parent-first content",
        tag: "Real work",
        img: "https://images.pexels.com/photos/19681870/pexels-photo-19681870.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
        span: "md:col-span-4 md:row-span-2",
    },
    {
        type: "image",
        label: "Color & Type System",
        sub: "Luco · identity",
        tag: "Real work",
        img: "https://images.pexels.com/photos/16397731/pexels-photo-16397731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=900",
        span: "md:col-span-5",
    },
    {
        type: "text",
        label: "Lifecycle map\n0 → 90 days",
        sub: "Onboarding · activation · retention",
        tag: "Framework",
        bg: "#120A8F",
        fg: "#F5F2EB",
        span: "md:col-span-3",
    },
    {
        type: "image",
        label: "Audience Research Cuts",
        sub: "Beauty & Wellness · India",
        tag: "Real work",
        img: "https://images.pexels.com/photos/31435546/pexels-photo-31435546.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=900",
        span: "md:col-span-4",
    },
    {
        type: "text",
        label: "Competitive teardown",
        sub: "AI startup · 7 players · 1 gap",
        tag: "Concept",
        bg: "#1A1A1A",
        fg: "#F5F2EB",
        span: "md:col-span-5",
    },
];

export default function CampaignGallery() {
    return (
        <section
            id="gallery"
            data-testid={PORTFOLIO.gallery}
            className="px-6 md:px-12 lg:px-20 py-24 md:py-36"
        >
            <div className="grid md:grid-cols-12 gap-6 md:gap-8 mb-12 md:mb-16">
                <div className="md:col-span-7">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-[#4A4A4A] mb-4">
                        <span className="inline-block w-8 h-px bg-[#7A1423] align-middle mr-3" />
                        Campaign Gallery
                    </p>
                    <h2 className="h-hero text-5xl md:text-6xl lg:text-7xl max-w-[20ch]">
                        The <span className="italic-accent text-[#7A1423]">range</span> — campaigns,
                        frameworks &amp; thinking on the wall.
                    </h2>
                </div>
                <p className="md:col-span-5 self-end text-sm md:text-base text-[#4A4A4A] max-w-[42ch]">
                    A mosaic of real launches and clearly-labelled concept pieces —
                    spanning positioning, go-to-market, identity, copy, research,
                    competitive analysis &amp; lifecycle.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-12 auto-rows-[180px] md:auto-rows-[200px] gap-3 md:gap-4">
                {tiles.map((t, i) => (
                    <Tile key={i} t={t} i={i} />
                ))}
            </div>
        </section>
    );
}

function Tile({ t, i }) {
    const base = "relative overflow-hidden img-mask group";
    if (t.type === "image") {
        return (
            <figure
                data-testid={PORTFOLIO.galleryTile(i)}
                className={`${base} ${t.span} col-span-2 row-span-1 bg-[#1A1A1A]`}
            >
                <img src={t.img} alt={t.label} className="w-full h-full object-cover" loading="lazy" />
                <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#F5F2EB]/90 text-[#1A1A1A] text-[10px] uppercase tracking-[0.22em]">
                    {t.tag}
                </span>
                <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <p className="font-display text-lg md:text-xl text-[#F5F2EB] leading-tight">
                        {t.label}
                    </p>
                    <p className="text-[11px] text-[#F5F2EB]/80 uppercase tracking-[0.18em] mt-1">
                        {t.sub}
                    </p>
                </figcaption>
            </figure>
        );
    }
    return (
        <div
            data-testid={PORTFOLIO.galleryTile(i)}
            className={`${base} ${t.span} col-span-2 row-span-1 flex flex-col justify-between p-5 md:p-6`}
            style={{ backgroundColor: t.bg, color: t.fg }}
        >
            <span
                className="self-start px-2.5 py-1 text-[10px] uppercase tracking-[0.22em] border"
                style={{ borderColor: t.fg, color: t.fg }}
            >
                {t.tag}
            </span>
            <div>
                <p className="font-display text-xl md:text-2xl leading-tight whitespace-pre-line">
                    {t.label}
                </p>
                <p className="text-[11px] uppercase tracking-[0.2em] mt-2 opacity-80">{t.sub}</p>
            </div>
        </div>
    );
}
