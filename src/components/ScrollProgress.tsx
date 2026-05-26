import { useScrollProgress } from '@/hooks/useAccessibility';

const ScrollProgress = () => {
    const progress = useScrollProgress();

    return (
        <div
            className="fixed top-0 left-0 right-0 h-1 bg-primary/20 z-50"
            role="progressbar"
            aria-valuenow={Math.round(progress)}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Page scroll progress"
        >
            <div
                className="h-full bg-primary transition-all duration-150 ease-out"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
};

export default ScrollProgress;
