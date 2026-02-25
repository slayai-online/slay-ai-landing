const socialLinks = [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/slay-ai/" },
    { label: "X", href: "https://x.com/SlayAI_online" },
    { label: "Insta", href: "https://www.instagram.com/slayai_online?igsh=MWc1ajE2d2cwMGt4ZA%3D%3D" },
    { label: "Mail", href: "mailto:slayaionline@gmail.com" },
    { label: "YouTube", href: "https://www.youtube.com/@SlayAI.online" },
] as const;

export default function Footer() {
    return (
        <footer className="bg-primary text-black py-12 border-t-4 border-black">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                {/* Brand */}
                <div className="flex flex-col items-center md:items-start">
                    <div className="text-4xl font-black italic" aria-hidden="true">
                        SLAY_AI
                    </div>
                    <p className="font-mono text-xs font-bold mt-2 max-w-xs text-center md:text-left">
                        The anti-generic stylist for the post internet generation.
                        <br />
                        Powered by AI. Curated by Culture.
                    </p>
                </div>

                {/* Social Links */}
                <nav aria-label="Social media links">
                    <ul className="flex gap-6 font-bold uppercase text-sm tracking-wider list-none p-0 m-0">
                        {socialLinks.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    className="hover:underline decoration-4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Follow SLAY AI on ${link.label}`}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Copyright */}
                <p className="font-mono text-xs font-bold">
                    © {new Date().getFullYear()} FLASHFUSION LABS PRIVATE LIMITED. ALL
                    RIGHTS RESERVED.
                </p>
            </div>
        </footer>
    );
}
