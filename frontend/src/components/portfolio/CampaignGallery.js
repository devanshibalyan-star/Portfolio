import { PORTFOLIO } from "@/constants/testIds";

const tiles = [
    {
        kind: "poster",
        eyebrow: "Brand thesis",
        title: "glow\nlike you\nmean it.",
        sub: "Cosmetics · concept campaign",
        tag: "Concept",
        bg: "#F4C8C2",
        fg: "#7A1423",
        accent: "#7A1423",
        span: "md:col-span-4 md:row-span-2",
    },
    {
        kind: "image",
        label: "Positioning Map",
        sub: "AI productivity · concept",
        tag: "Concept",
        img: "https://images.pexels.com/photos/27667225/pexels-photo-27667225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
        span: "md:col-span-5",
    },
    {
        kind: "swatch",
        eyebrow: "Identity board",
        title: "Luco",
        sub: "Hospitality · 3-yr rebrand",
        tag: "Real work",
        swatches: ["#7A1423", "#C98938", "#120A8F", "#F5F2EB", "#1A1A1A"],
        span: "md:col-span-3 md:row-span-2",
    },
    {
        kind: "text",
        label: "“We don’t sell rooms.\nWe sell being known.”",
        sub: "Luco · brand thesis",
        tag: "Real work",
        bg: "#7A1423",
        fg: "#F5F2EB",
        span: "md:col-span-5",
    },
    {
        kind: "poster",
        eyebrow: "Headline",
        title: "trust\nbeats\nspeed.",
        sub: "AI dev tools · positioning wedge",
        tag: "Concept",
        bg: "#C98938",
        fg: "#1A1A1A",
        accent: "#7A1423",
        span: "md:col-span-4",
    },
    {
        kind: "image",
        label: "Launch Film · Hero Frame",
        sub: "Moxie Beauty",
        tag: "Real work",
        img: "https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=900",
        span: "md:col-span-4",
    },
    {
        kind: "text",
        label: "GTM Doc · v3",
        sub: "12 segments · 4 channels · 1 wedge",
        tag: "Framework",
        bg: "#120A8F",
        fg: "#F5F2EB",
        span: "md:col-span-4",
    },
    {
        kind: "poster",
        eyebrow: "Manifesto",
        title: "simple.\neffective.\nmade for you.",
        sub: "Beauty · narrative spine",
        tag: "Concept",
        bg: "#FCE7E0",
        fg: "#7A1423",
        accent: "#C98938",
        span: "md:col-span-4 md:row-span-2",
    },
    {
        kind: "image",
        label: "Editorial Spread",
        sub: "Athena · parent-first content",
        tag: "Real work",
        img: "https://images.pexels.com/photos/19681870/pexels-photo-19681870.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
        span: "md:col-span-4 md:row-span-2",
    },
    {
        kind: "image",
        label: "Color & Type System",
        sub: "Luco · identity",
        tag: "Real work",
        img: "https://images.pexels.com/photos/16397731/pexels-photo-16397731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=900",
        span: "md:col-span-4",
    },
    {
        kind: "text",
        label: "Lifecycle map\n0 → 90 days",
        sub: "Onboarding · activation · retention",
        tag: "Framework",
        bg: "#1A1A1A",
        fg: "#F5F2EB",
        span: "md:col-span-4",
    },
    {
        kind: "poster",
        eyebrow: "Tagline",
        title: "confidence\nlooks good\non you.",
        sub: "Cosmetics · launch line",
        tag: "Concept",
        bg: "#7A1423",
        fg: "#F5F2EB",
        accent: "#C98938",
        span: "md:col-span-5",
    },
    {
        kind: "image",
        label: "Audience Research Cuts",
        sub: "Beauty & Wellness · India",
        tag: "Real work",
        img: "https://images.pexels.com/photos/31435546/pexels-photo-31435546.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=900",
        span: "md:col-span-3",
    },
    {
        kind: "text",
        label: "Competitive teardown\n7 players · 1 unowned axis",
        sub: "Speed vs trust · positioning map",
        tag: "Concept",
        bg: "#F5F2EB",
        fg: "#1A1A1A",
        border: true,
        span: "md:col-span-4",
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
                        The <span className="italic-accent text-[#7A1423]">range</span>. Campaigns,
                        frameworks &amp; thinking on the wall.
                    </h2>
                </div>
                <p className="md:col-span-5 self-end text-sm md:text-base text-[#4A4A4A] max-w-[42ch]">
                    A mosaic of real launches and clearly-labelled concept pieces.
                    Positioning, go-to-market, identity, copy, research,
                    competitive analysis &amp; lifecycle.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-12 auto-rows-[200px] md:auto-rows-[220px] gap-3 md:gap-4">
                {tiles.map((t, i) => (
                    <Tile key={i} t={t} i={i} />
                ))}
            </div>
        </section>
    );
}

function Tile({ t, i }) {
    const base = "relative overflow-hidden group";
    const span = `${t.span} col-span-2 row-span-1`;

    if (t.kind === "image") {
        return (
            <figure data-testid={PORTFOLIO.galleryTile(i)} className={`${base} img-mask ${span} bg-[#1A1A1A]`}>
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

    if (t.kind === "poster") {
        return (
            <div
                data-testid={PORTFOLIO.galleryTile(i)}
                className={`${base} ${span} flex flex-col justify-between p-5 md:p-7`}
                style={{ backgroundColor: t.bg, color: t.fg }}
            >
                <div className="flex items-start justify-between">
                    <span className="text-[10px] uppercase tracking-[0.22em] opacity-70">
                        {t.eyebrow}
                    </span>
                    <span
                        className="px-2.5 py-1 text-[10px] uppercase tracking-[0.22em] border"
                        style={{ borderColor: t.fg, color: t.fg }}
                    >
                        {t.tag}
                    </span>
                </div>
                <p
                    className="font-poster text-3xl md:text-5xl whitespace-pre-line"
                    style={{ color: t.fg }}
                >
                    {t.title.split("\n").map((line, idx, arr) => (
                        <span key={idx}>
                            {idx === arr.length - 1 ? (
                                <span style={{ color: t.accent }}>{line}</span>
                            ) : (
                                line
                            )}
                            {idx < arr.length - 1 && <br />}
                        </span>
                    ))}
                </p>
                <div className="flex items-end justify-between gap-3">
                    <p className="text-[11px] uppercase tracking-[0.22em] opacity-80 max-w-[24ch]">
                        {t.sub}
                    </p>
                    <span className="font-script text-2xl" style={{ color: t.accent }}>
                        ✱
                    </span>
                </div>
            </div>
        );
    }

    if (t.kind === "swatch") {
        return (
            <div
                data-testid={PORTFOLIO.galleryTile(i)}
                className={`${base} ${span} bg-[#FCFBF8] border border-[#E5E0D8] flex flex-col justify-between p-5 md:p-6`}
            >
                <div className="flex items-start justify-between">
                    <span className="text-[10px] uppercase tracking-[0.22em] text-[#4A4A4A]">
                        {t.eyebrow}
                    </span>
                    <span className="px-2.5 py-1 text-[10px] uppercase tracking-[0.22em] border border-[#1A1A1A] text-[#1A1A1A]">
                        {t.tag}
                    </span>
                </div>
                <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 rounded-full border-2 border-[#1A1A1A] flex items-center justify-center mb-3">
                        <span className="font-display italic-accent text-2xl text-[#7A1423]">L</span>
                    </div>
                    <p className="font-display text-3xl md:text-4xl text-[#1A1A1A] leading-none">
                        {t.title}
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.22em] text-[#4A4A4A] mt-2">
                        {t.sub}
                    </p>
                </div>
                <div className="flex gap-1.5">
                    {t.swatches.map((c) => (
                        <div
                            key={c}
                            className="flex-1 h-8 border border-[#E5E0D8]"
                            style={{ backgroundColor: c }}
                        />
                    ))}
                </div>
            </div>
        );
    }

    // text
    return (
        <div
            data-testid={PORTFOLIO.galleryTile(i)}
            className={`${base} ${span} flex flex-col justify-between p-5 md:p-6 ${t.border ? "border border-[#1A1A1A]" : ""}`}
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
