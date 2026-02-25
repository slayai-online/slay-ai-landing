import Image from "next/image";
import MarqueeText from "@/components/ui/MarqueeText";

const BACKGROUND_THEMES = [
    "POETCORE",
    "DARK ACADEMIA",
    "CYBERCORE / Y3K",
    "OLD MONEY"
];

export default function Hero() {
    return (
        <section
            className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20"
            aria-label="Hero – AI-powered personal styling"
        >
            {/* Marquee Background Text Sequence */}
            <div className="absolute inset-0 flex flex-col justify-center opacity-30 select-none pointer-events-none">
                {BACKGROUND_THEMES.map((theme, index) => (
                    <div
                        key={theme}
                        className="absolute inset-0 flex flex-col justify-center animate-theme-fade"
                        style={{
                            animationDelay: `-${index * 4}s`
                        }}
                    >
                        <div className="-rotate-2 scale-110">
                            <MarqueeText
                                text={`${theme} — ${theme} — ${theme} — ${theme} — `}
                                className="text-[6rem] sm:text-[10rem] md:text-[16rem] lg:text-[20rem] font-black leading-none text-outline uppercase"
                            />
                        </div>
                        <div className="rotate-1 mt-[-4rem] scale-110">
                            <MarqueeText
                                text={`${theme} — ${theme} — ${theme} — `}
                                className="text-[6rem] sm:text-[10rem] md:text-[16rem] lg:text-[20rem] font-black leading-none text-outline-white uppercase"
                                reverse
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Hero Content Grid */}
            <div className="relative w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Column – Value Proposition */}
                <div className="lg:col-span-4 flex flex-col items-center lg:items-start space-y-8 order-2 lg:order-1 pointer-events-auto">
                    {/* System Override Card */}
                    <div className="bg-sunshine-yellow text-black p-6 transform -rotate-3 brutalist-shadow-primary border-4 border-black max-w-xs hover:scale-105 transition-transform duration-200">
                        <div className="flex items-center gap-2 border-b-2 border-black pb-2 mb-2 font-bold font-mono text-sm uppercase">
                            <span className="text-base" aria-hidden="true">⚠</span>
                            System Override
                        </div>
                        <h1 className="font-bold text-2xl leading-tight text-[#1A1A1D]">
                            Stop Wasting Hours on &lsquo;What to Wear?&rsquo; – Your{" "}
                            <span className="text-[#00D4FF]">AI Twin</span> Finds Perfect
                            Outfits from Nearby Stores.{" "}
                            <span className="text-[#00D4FF]">Delivered Today.</span>
                        </h1>
                    </div>

                    <p className="mt-4 text-white font-medium text-lg leading-snug text-center lg:text-left">
                        Upload 1 photo → AI builds your digital twin → Instant try-ons from
                        500+ local brands → 1-hour delivery or pickup. No sizing drama, no
                        waiting.
                    </p>

                    {/* CTA Button */}
                    <a
                        href="#signup"
                        className="group relative px-10 py-5 bg-hyper-red text-white font-black text-2xl sm:text-3xl uppercase tracking-widest border-4 border-white brutalist-shadow-red hover:-translate-y-2 transition-all duration-200 rotate-2 inline-block text-center"
                        aria-label="Get early access – join the waitlist"
                    >
                        <span className="relative z-10">GET EARLY ACCESS</span>
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity" />
                    </a>
                </div>

                {/* Center Column – Hero Image */}
                <div className="lg:col-span-4 relative h-[400px] sm:h-[500px] flex items-center justify-center order-1 lg:order-2">
                    <div className="relative w-full h-full group">
                        {/* Glow Background */}
                        <div
                            className="absolute inset-4 bg-gradient-to-t from-primary to-hyper-red blur-3xl opacity-60 group-hover:opacity-90 transition-opacity duration-500"
                            aria-hidden="true"
                        />
                        {/* Avatar Image */}
                        <div className="relative w-full h-full flex items-center justify-center transform transition-transform duration-500 group-hover:scale-105">
                            <Image
                                src="/images/hero-avatar.webp"
                                alt="AI-generated cyberpunk avatar couple wearing neon streetwear, demonstrating SLAY AI virtual try-on technology"
                                fill
                                priority
                                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 33vw, 400px"
                                className="object-cover rounded-2xl border-4 border-white/20 hero-clip"
                            />
                            {/* Outfit ID Badge */}
                            <div className="absolute bottom-10 left-[-20px] bg-black/90 backdrop-blur-sm border border-primary p-3 rounded-lg rotate-3 z-10">
                                <p className="text-xs text-primary font-mono mb-1">
                                    OUTFIT_ID: #88X2
                                </p>
                                <div className="w-32 h-2 bg-gray-800 rounded-full overflow-hidden">
                                    <div
                                        className="w-[70%] h-full bg-gradient-to-r from-hyper-red to-sunshine-yellow animate-pulse"
                                        role="progressbar"
                                        aria-valuenow={70}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                        aria-label="Outfit match progress"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column – Badges */}
                <div className="lg:col-span-4 flex flex-col items-center lg:items-end space-y-12 order-3">
                    {/* Delivery Badge */}
                    <div className="bg-black/80 backdrop-blur-md p-4 border-2 border-primary transform rotate-6 max-w-[200px] text-right rounded-xl">
                        <span className="text-4xl font-black text-white block mb-1">
                            60 <span className="text-primary">Minutes</span>
                        </span>
                        <span className="text-sm font-mono text-gray-400 uppercase">
                            Delivery
                        </span>
                    </div>

                    {/* Spinning Sticker */}
                    <div className="relative">
                        <Image
                            src="/images/sticker-texture.webp"
                            alt="Neon glitch art texture sticker"
                            width={160}
                            height={160}
                            className="w-40 h-40 object-cover rounded-full border-4 border-sunshine-yellow animate-spin-slow"
                        />
                        <div
                            className="absolute inset-0 flex items-center justify-center font-black text-black text-xl rotate-[-15deg] mix-blend-screen pointer-events-none"
                            aria-hidden="true"
                        >
                            PURE
                            <br />
                            CHAOS
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
