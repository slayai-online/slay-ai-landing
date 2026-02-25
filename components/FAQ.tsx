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
                            <span>Data Safe?</span>
                            <span
                                className="text-gray-500 transition-transform group-open:rotate-45"
                                aria-hidden="true"
                            >
                                +
                            </span>
                        </summary>
                        <p className="text-gray-400 text-sm mt-2">
                            Photos encrypted, never shared. Your twin = yours only.
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
                            Upload a single photo and SLAY AI builds your digital twin in 30
                            seconds. The AI scans 500+ local stores to find outfits that match
                            your body, style, and budget. Get items delivered in 1 hour or pick
                            them up at a discount.
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
                            We&apos;re launching in Bangalore and Mumbai within 8 weeks. Join the
                            waitlist to be among the first 1,000 users and receive lifetime
                            perks.
                        </p>
                    </details>
                </div>
            </div>
        </section>
    );
}
