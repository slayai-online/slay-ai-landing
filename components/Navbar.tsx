import Link from "next/link";

export default function Navbar() {
    return (
        <nav
            className="absolute top-0 left-0 p-6 z-50 mix-blend-difference"
            aria-label="Main navigation"
        >
            <Link href="/" className="block">
                <h1 className="text-4xl font-black tracking-tighter italic text-white">
                    SLAY_AI<span className="text-primary">.</span>
                </h1>
            </Link>
        </nav>
    );
}
