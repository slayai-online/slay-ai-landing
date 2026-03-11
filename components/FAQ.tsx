export default function FAQ() {
    return (
        <section
            className="py-20 bg-background-dark border-t-4 border-white"
            aria-labelledby="faq-heading"
        >
            <div className="max-w-4xl mx-auto px-4">
                <h2
                    id="faq-heading"
                    className="text-3xl font-black text-white mb-10"
                >
                    DEEP_DIVE.EXE
                </h2>

                <div className="space-y-6">
                    <details className="group border-b border-white/10 pb-4" open>
                        <summary className="text-primary font-bold mb-2 cursor-pointer list-none flex items-center justify-between">
                            <span>Is my data safe?</span>
                            <span
                                className="text-gray-500 transition-transform group-open:rotate-45"
                                aria-hidden="true"
                            >
                                +
                            </span>
                        </summary>
                        <p className="text-gray-400 text-sm mt-2">
                            Your photos and profile stay private and protected. You stay in control of what you share.
                        </p>
                    </details>

                    <details className="group border-b border-white/10 pb-4">
                        <summary className="text-primary font-bold mb-2 cursor-pointer list-none flex items-center justify-between">
                            <span>How does SLAY AI work?</span>
                            <span
                                className="text-gray-500 transition-transform group-open:rotate-45"
                                aria-hidden="true"
                            >
                                +
                            </span>
                        </summary>
                        <p className="text-gray-400 text-sm mt-2">
                            Upload your photo, set your preferences, and let Slay AI suggest
                            outfits based on your body, style, budget, and occasion.
                        </p>
                    </details>

                    <details className="group border-b border-white/10 pb-4">
                        <summary className="text-primary font-bold mb-2 cursor-pointer list-none flex items-center justify-between">
                            <span>Where is SLAY AI available?</span>
                            <span
                                className="text-gray-500 transition-transform group-open:rotate-45"
                                aria-hidden="true"
                            >
                                +
                            </span>
                        </summary>
                        <p className="text-gray-400 text-sm mt-2">
                            We&apos;re starting with Bangalore and expanding city by city.
                        </p>
                    </details>
                </div>
            </div>
        </section>
    );
}
