import { useEffect, useState, useRef } from 'react';
import { useIsMobile } from '@/hooks/useAccessibility';

interface UseSectionDecodeOptions {
    threshold?: number;
    rootMargin?: string;
}

export const useSectionDecode = (options: UseSectionDecodeOptions = {}) => {
    const [shouldDecode, setShouldDecode] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const isMobile = useIsMobile();
    const { threshold = 0.3, rootMargin = '0px' } = options;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (isMobile) {
                    // On mobile: auto-decode when in view, re-scramble when out
                    setShouldDecode(entry.isIntersecting);
                } else {
                    // On desktop: only re-scramble when scrolled away
                    if (!entry.isIntersecting) {
                        setShouldDecode(false);
                    }
                }
            },
            { threshold, rootMargin }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [isMobile, threshold, rootMargin]);

    const handleMouseEnter = () => {
        if (!isMobile) {
            setShouldDecode(true);
        }
    };

    return { shouldDecode, sectionRef, handleMouseEnter };
};
