import { useScramble } from '@/contexts/ScrambleContext';
import { Eye, EyeOff } from 'lucide-react';

const ScrambleToast = () => {
    const { isEnabled, showToast } = useScramble();

    return (
        <div
            className={`fixed bottom-24 right-8 z-50 bg-card border border-border rounded-lg shadow-lg p-4 flex items-center gap-3 transition-all duration-300 ${showToast ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                }`}
            role="status"
            aria-live="polite"
        >
            {isEnabled ? (
                <>
                    <Eye className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">Text effects enabled</span>
                </>
            ) : (
                <>
                    <EyeOff className="w-5 h-5 text-muted-foreground" />
                    <span className="text-sm font-medium">Text effects disabled</span>
                </>
            )}
        </div>
    );
};

export default ScrambleToast;
