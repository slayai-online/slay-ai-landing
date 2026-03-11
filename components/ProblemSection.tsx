import BrutalistCard from "@/components/ui/BrutalistCard";

const problems = [
    {
        icon: "🔄",
        title: "Endless Browsing. Still No Look.",
        description: "Get complete outfit ideas in minutes, not after checking five different apps.",
        borderColor: "border-primary",
    },
    {
        icon: "📏",
        title: "Will It Even Suit Me?",
        description: "See styles picked for your body, budget, and occasion first.",
        borderColor: "border-sunshine-yellow",
    },
    {
        icon: "❌",
        title: "No More Random Picks",
        description: "Discover outfits that feel right for you, not just what\u2019s trending.",
        borderColor: "border-hyper-red",
    },
    {
        icon: "📦",
        title: "No More Waiting Forever",
        description: "Get your look faster when you actually need it.",
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
                    <span className="text-white bg-black px-4">Finding a Good Outfit</span>{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-hyper-red">
                        Shouldn&apos;t Take Hours
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
