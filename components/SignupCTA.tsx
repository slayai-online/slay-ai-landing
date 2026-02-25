"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";

export default function SignupCTA() {
    const [email, setEmail] = useState("");
    const [feedback, setFeedback] = useState("");
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

    function handleEmailSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!email.trim()) return;
        // TODO: Connect to API / Firestore
        console.log("Waitlist signup:", email);
        setEmailSubmitted(true);
        setEmail("");
    }

    function handleFeedbackSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!feedback.trim()) return;
        // TODO: Connect to API / Firestore
        console.log("Feedback:", feedback);
        setFeedbackSubmitted(true);
        setFeedback("");
    }

    return (
        <section
            id="signup"
            className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden border-t-8 border-primary"
            aria-labelledby="signup-heading"
        >
            {/* Background Image */}
            <div className="absolute inset-0 opacity-20" aria-hidden="true">
                <Image
                    src="/images/signup-bg.webp"
                    alt=""
                    fill
                    sizes="100vw"
                    className="object-cover"
                    loading="lazy"
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-4xl mx-4 p-8 md:p-16 border-4 border-white bg-black/80 backdrop-blur-sm brutalist-shadow-primary transform rotate-1">
                {/* Session Badge */}
                <div
                    className="absolute -top-10 left-1/2 -translate-x-1/2 bg-hyper-red text-white px-8 py-2 border-4 border-black transform -rotate-2 font-black text-xl whitespace-nowrap z-20 shadow-[4px_4px_0px_#fff]"
                    aria-hidden="true"
                >
                    SESSION 01: LOADING...
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left – Form */}
                    <div>
                        <h2
                            id="signup-heading"
                            className="text-5xl sm:text-6xl md:text-7xl font-black leading-none mb-6 text-white"
                        >
                            Be First 1K –{" "}
                            <span className="text-primary">Lifetime Perks Await</span>
                        </h2>
                        <p className="text-hyper-red font-bold uppercase mb-4">
                            Launching Bangalore Soon.
                        </p>

                        {/* Email Form */}
                        <form onSubmit={handleEmailSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="email-input" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-input"
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-transparent border-4 border-gray-700 p-4 text-white font-mono focus:border-primary focus:ring-0 focus:outline-none placeholder-gray-600"
                                    placeholder="ENTER_EMAIL_ADDRESS"
                                    disabled={emailSubmitted}
                                    aria-describedby={emailSubmitted ? "email-success" : undefined}
                                />
                            </div>
                            {emailSubmitted ? (
                                <p id="email-success" className="text-primary font-bold text-center py-4">
                                    ✓ You&apos;re on the list! We&apos;ll be in touch.
                                </p>
                            ) : (
                                <button
                                    type="submit"
                                    className="w-full bg-white text-black font-black text-xl py-4 border-4 border-transparent hover:bg-sunshine-yellow hover:border-black transition-colors uppercase tracking-widest relative overflow-hidden group"
                                >
                                    <span className="relative z-10">Claim My Spot</span>
                                    <div className="absolute inset-0 bg-primary transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 z-0" />
                                </button>
                            )}
                        </form>

                        {/* Feedback Form */}
                        <div className="mt-12 p-6 border-2 border-dashed border-gray-700 bg-white/5">
                            <p className="text-sm text-gray-400 mb-4">
                                💡 Got another idea that would make Slay AI part of your daily
                                routine? Tell us what to build next.
                            </p>
                            {feedbackSubmitted ? (
                                <p className="text-sunshine-yellow font-bold text-center py-2">
                                    ✓ Thanks for your feedback!
                                </p>
                            ) : (
                                <form onSubmit={handleFeedbackSubmit}>
                                    <label htmlFor="feedback-input" className="sr-only">
                                        Feature suggestion
                                    </label>
                                    <input
                                        id="feedback-input"
                                        type="text"
                                        value={feedback}
                                        onChange={(e) => setFeedback(e.target.value)}
                                        className="w-full bg-black/50 border-2 border-gray-800 p-3 text-white font-mono text-xs focus:border-sunshine-yellow focus:ring-0 focus:outline-none"
                                        placeholder="What feature would make you use Slay AI daily?"
                                    />
                                    <button
                                        type="submit"
                                        className="w-full mt-2 bg-primary text-black font-bold text-xs py-2 uppercase hover:bg-hyper-red hover:text-white transition-colors"
                                    >
                                        Send Feedback
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>

                    {/* Right – Counter */}
                    <div
                        className="flex flex-col items-center justify-center border-4 border-dashed border-gray-800 p-8 rounded-full aspect-square relative group"
                        aria-label="347 of 1000 spots claimed"
                    >
                        <div
                            className="absolute inset-0 rounded-full border-4 border-primary opacity-0 group-hover:opacity-100 animate-ping"
                            aria-hidden="true"
                        />
                        <span className="font-mono text-sm text-hyper-red mb-2">
                            SPOTS CLAIMED
                        </span>
                        <div className="text-7xl md:text-8xl font-black text-white animate-melt">
                            347
                        </div>
                        <div
                            className="w-32 h-1 my-4"
                            style={{ backgroundColor: "#FF006E" }}
                            aria-hidden="true"
                        />
                        <span className="text-4xl font-bold text-gray-600">1000</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
