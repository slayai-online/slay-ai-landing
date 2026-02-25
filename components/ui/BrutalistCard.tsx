import type { ReactNode } from "react";

interface BrutalistCardProps {
    children: ReactNode;
    borderColor?: string;
    className?: string;
}

export default function BrutalistCard({
    children,
    borderColor = "border-primary",
    className = "",
}: BrutalistCardProps) {
    return (
        <div
            className={`group relative w-full max-w-[18rem] md:w-72 p-8 bg-black border-4 ${borderColor} rounded-xl transform hover:-translate-y-2 transition-all duration-300 ${className}`}
        >
            {children}
        </div>
    );
}
