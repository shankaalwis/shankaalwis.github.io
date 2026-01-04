import { useRef, useEffect, useState } from "react";
import TextShuffle from "./TextShuffle";
import { useScramble } from '@/contexts/ScrambleContext';

interface ScrambleTextProps {
    text: string;
    className?: string;
    shouldDecode?: boolean; // External control from section
    onTriggerDecode?: () => void; // Callback to trigger section decode
}

const ScrambleText = ({ text, className = "", shouldDecode = false, onTriggerDecode }: ScrambleTextProps) => {
    const { isEnabled } = useScramble();

    // Split by words to preserve wrapping logic in paragraphs
    const words = text.split(" ");

    // If scramble is disabled globally, just show the text
    if (!isEnabled) {
        return <span className={className}>{text}</span>;
    }

    return (
        <span className={className}>
            {words.map((word, i) => (
                <span key={i} className="inline-block" style={{ marginRight: '0.25em' }}>
                    <TextShuffle
                        text={word}
                        shouldDecode={shouldDecode}
                        onTriggerDecode={onTriggerDecode}
                    />
                </span>
            ))}
        </span>
    );
};

export default ScrambleText;
