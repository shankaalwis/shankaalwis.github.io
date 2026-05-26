import { useEffect, useRef, useState } from "react";

interface TextPressureProps {
    text: string;
    fontFamily?: string;
    className?: string;
    minWeight?: number;
    maxWeight?: number;
}

const TextPressure = ({
    text,
    fontFamily = "Inter", // Defaulting to Inter as used in project
    className = "",
    minWeight = 400, // Standard Regular
    maxWeight = 900, // Extra Bold
}: TextPressureProps) => {
    const containerRef = useRef<HTMLHeadingElement>(null);
    const [cursor, setCursor] = useState({ x: -1000, y: -1000 });
    const [spans, setSpans] = useState<HTMLSpanElement[]>([]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setCursor({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    useEffect(() => {
        if (containerRef.current) {
            // Collect span refs
            const elements = Array.from(containerRef.current.querySelectorAll("span"));
            setSpans(elements);
        }
    }, [text]); // Re-collect if text changes

    return (
        <h1
            ref={containerRef}
            className={`${className} flex relative`}
            style={{ fontFamily }}
        >
            {text.split("").map((char, i) => {
                // Calculate dynamic style
                // We use direct DOM manipulation for performance or state? 
                // For 60fps smoothing, direct ref manipulation or inline style with state calculation is cleaner if small component.
                // Let's do inline calculation here, React handles it reasonably well for small headers.

                let targetWeight = minWeight;
                let scale = 1;

                if (spans[i]) {
                    const rect = spans[i].getBoundingClientRect();
                    const centerX = rect.left + rect.width / 2;
                    const centerY = rect.top + rect.height / 2;

                    const distance = Math.sqrt(
                        Math.pow(cursor.x - centerX, 2) + Math.pow(cursor.y - centerY, 2)
                    );

                    const maxDist = 200; // Radius of influence
                    if (distance < maxDist) {
                        const factor = (1 - distance / maxDist);
                        // Non-linear ease for "pressure" feel
                        const ease = factor * factor;
                        targetWeight = minWeight + (maxWeight - minWeight) * ease;
                        // Optional: slight scale for "pop"
                        // scale = 1 + (0.1 * ease);
                    }
                }

                return (
                    <span
                        key={i}
                        className="transition-all duration-75 will-change-transform inline-block"
                        style={{
                            fontWeight: Math.round(targetWeight),
                            // If variable font is supported, this is smoother:
                            // fontVariationSettings: `'wght' ${targetWeight}`,
                            transform: `scale(${scale})`,
                        }}
                    >
                        {char === " " ? "\u00A0" : char}
                    </span>
                );
            })}
        </h1>
    );
};

export default TextPressure;
