import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CopyToClipboardProps {
    text: string;
    label?: string;
    className?: string;
}

const CopyToClipboard = ({ text, label, className = "" }: CopyToClipboardProps) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    return (
        <button
            onClick={handleCopy}
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary hover:bg-secondary/80 transition-colors ${className}`}
            aria-label={`Copy ${label || text} to clipboard`}
        >
            <span className="text-sm font-medium">{label || text}</span>
            {copied ? (
                <Check className="w-4 h-4 text-green-500" />
            ) : (
                <Copy className="w-4 h-4" />
            )}
        </button>
    );
};

export default CopyToClipboard;
