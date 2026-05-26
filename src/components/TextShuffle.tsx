import { useEffect, useState, useRef } from 'react';
import { useScramble } from '@/contexts/ScrambleContext';

interface TextShuffleProps {
    text: string;
    duration?: number;
    className?: string;
    shouldDecode?: boolean; // External control
    onTriggerDecode?: () => void; // Callback to trigger section decode
}

const TextShuffle = ({ text, duration, className = "", shouldDecode = false, onTriggerDecode }: TextShuffleProps) => {
    const [displayText, setDisplayText] = useState('');
    const [isDecoded, setIsDecoded] = useState(false);
    const frameRef = useRef<number>();
    const startTimeRef = useRef<number>(0);
    const lastUpdateRef = useRef<number>(0);
    const originalText = text;
    const { isEnabled } = useScramble();

    // Adaptive duration based on text length
    const adaptiveDuration = duration || Math.max(800, Math.min(text.length * 30, 2000));

    // Characters to use for shuffling - User's preferred set
    const chars = "ABCDEJKLMNOPQUYZ012789!@#$%^";

    const easeInOutCubic = (t: number) => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const generateScrambled = () => {
        let result = '';
        for (let i = 0; i < originalText.length; i++) {
            if (originalText[i] === ' ') {
                result += ' ';
            } else {
                result += chars[Math.floor(Math.random() * chars.length)];
            }
        }
        return result;
    };

    const startDecode = () => {
        if (isDecoded) return;

        startTimeRef.current = Date.now();
        lastUpdateRef.current = 0;

        const animate = () => {
            const now = Date.now();
            const progress = Math.min((now - startTimeRef.current) / adaptiveDuration, 1);
            const easedProgress = easeInOutCubic(progress);

            // Smoother animation - update every ~33ms (30fps)
            if (now - lastUpdateRef.current > 33) {
                const revealCount = Math.floor(easedProgress * originalText.length);

                let result = '';
                for (let i = 0; i < originalText.length; i++) {
                    if (i < revealCount) {
                        result += originalText[i];
                    } else {
                        if (originalText[i] === ' ') {
                            result += ' ';
                        } else {
                            result += chars[Math.floor(Math.random() * chars.length)];
                        }
                    }
                }
                setDisplayText(result);
                lastUpdateRef.current = now;
            }

            if (progress < 1) {
                frameRef.current = requestAnimationFrame(animate);
            } else {
                // Ensure final state is exact
                setDisplayText(originalText);
                setIsDecoded(true);
            }
        };

        if (frameRef.current) cancelAnimationFrame(frameRef.current);
        frameRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        // Initialize with scrambled text
        setDisplayText(generateScrambled());

        return () => {
            if (frameRef.current) cancelAnimationFrame(frameRef.current);
        }
    }, [text]);

    // Watch for external decode trigger
    useEffect(() => {
        if (shouldDecode && !isDecoded) {
            startDecode();
        } else if (!shouldDecode && isDecoded) {
            // Re-scramble when shouldDecode becomes false
            setIsDecoded(false);
            setDisplayText(generateScrambled());
        }
    }, [shouldDecode]);

    const handleMouseEnter = () => {
        if (onTriggerDecode) {
            onTriggerDecode();
        }
    };

    // If scramble is disabled globally, just show the text
    if (!isEnabled) {
        return <span className={`inline-block whitespace-pre ${className}`}>{text}</span>;
    }

    return (
        <span
            className={`inline-block whitespace-pre ${className}`}
            onMouseEnter={handleMouseEnter}
        >
            {displayText || text}
        </span>
    );
};

export default TextShuffle;
