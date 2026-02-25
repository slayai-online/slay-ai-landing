export default function MarqueeText({
    text,
    className = "",
    reverse = false,
}: {
    text: string;
    className?: string;
    reverse?: boolean;
}) {
    return (
        <div className="whitespace-nowrap overflow-hidden" aria-hidden="true">
            <div
                className={`inline-block animate-marquee ${className}`}
                style={reverse ? { animationDirection: "reverse" } : undefined}
            >
                {text}
            </div>
            {/* Duplicate for seamless loop */}
            <div
                className={`inline-block animate-marquee ${className}`}
                style={reverse ? { animationDirection: "reverse" } : undefined}
            >
                {text}
            </div>
        </div>
    );
}
