import BrutalistCard from "@/components/ui/BrutalistCard";

const problems = [
    {
        icon: "🔄",
        title: "3 Hours. 5 Apps. Zero Outfits.",
        description: "Never scroll endlessly again.",
        borderColor: "border-primary",
    },
    {
        icon: "📏",
        title: "Sizing Roulette?",
        description: "See it on YOUR body first.",
        borderColor: "border-sunshine-yellow",
    },
    {
        icon: "❌",
        title: "Fake Fashion Fears",
        description: "Verified brands only.",
        borderColor: "border-hyper-red",
    },
    {
        icon: "📦",
        title: "7-Day Waits",
        description: "1-hour delivery reality.",
        borderColor: "border-white",
    },
] as const;

export default function ProblemSection() {
    return (
        <section className="relative py-32 overflow-hidden" aria-labelledby="problem-heading">
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <h2
                    id="problem-heading"
                    className="text-4xl sm:text-6xl md:text-8xl font-black text-center mb-24 uppercase transform -rotate-2"
                >
                    <span className="text-white bg-black px-4">The Old Way</span>{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-hyper-red">
                        is Broken
                    </span>
                </h2>

                <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                    {problems.map((problem) => (
                        <BrutalistCard
                            key={problem.title}
                            borderColor={problem.borderColor}
                            className="mt-8 first:mt-0 md:mt-0"
                        >
                            <div className="text-4xl mb-4" aria-hidden="true">
                                {problem.icon}
                            </div>
                            <h3 className="text-xl font-black uppercase mb-2 text-white">
                                {problem.title}
                            </h3>
                            <p className="font-mono text-xs text-gray-400">
                                {problem.description}
                            </p>
                        </BrutalistCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
