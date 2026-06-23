export default function Footer() {
    return (
        <footer className="bg-[#1A1A1A] text-[#F5F2EB]/70 px-6 md:px-12 lg:px-20 py-10 border-t border-[#F5F2EB]/10">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <p className="font-display text-2xl text-[#F5F2EB]">
                    Devanshi<span className="text-[#C98938]">.</span>
                </p>
                <p className="text-[11px] uppercase tracking-[0.28em]">
                    © {new Date().getFullYear()} · Product Marketing &amp; Brand Strategy · All work made with intent.
                </p>
                <p className="text-[11px] uppercase tracking-[0.28em]">
                    Designed &amp; written by Devanshi
                </p>
            </div>
        </footer>
    );
}
