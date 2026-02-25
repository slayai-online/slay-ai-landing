const steps = [
    {
        number: 1,
        title: "Your Twin in 30 Seconds",
        description: "Upload photo → AI gets your body + style.",
        bgColor: "bg-primary",
        textColor: "text-black",
    },
    {
        number: 2,
        title: "Outfits That Fit Your Vibe + Budget",
        description: "500+ stores scanned instantly.",
        bgColor: "bg-hyper-red",
        textColor: "text-white",
    },
    {
        number: 3,
        title: "Get It Today",
        description: "Pickup discount or 1-hour delivery.",
        bgColor: "bg-sunshine-yellow",
        textColor: "text-black",
    },
] as const;

export default function HowItWorks() {
    return (
        <section
            className="py-24 bg-background-dark border-t-8 border-hyper-red"
            aria-labelledby="how-it-works-heading"
        >
            <div className="max-w-7xl mx-auto px-4">
                <h2
                    id="how-it-works-heading"
                    className="text-5xl font-black text-center mb-16 text-white"
                >
                    HOW IT WORKS
                </h2>

                <ol className="grid grid-cols-1 md:grid-cols-3 gap-8 list-none p-0 m-0">
                    {steps.map((step) => (
                        <li key={step.number} className="text-center">
                            <div
                                className={`w-16 h-16 ${step.bgColor} rounded-full flex items-center justify-center ${step.textColor} font-black text-2xl mx-auto mb-6`}
                                aria-hidden="true"
                            >
                                {step.number}
                            </div>
                            <h3 className="text-2xl font-bold mb-2 text-white">
                                {step.title}
                            </h3>
                            <p className="text-gray-400">{step.description}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
