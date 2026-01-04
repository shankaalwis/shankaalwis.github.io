import React from 'react';
import ScrambleText from './ScrambleText';
import { useScramble } from '@/contexts/ScrambleContext';

interface ScrambleHTMLProps {
    children: React.ReactNode;
    shouldDecode: boolean;
    onTriggerDecode?: () => void;
}

// Recursively wrap text nodes with ScrambleText
const ScrambleHTML: React.FC<ScrambleHTMLProps> = ({ children, shouldDecode, onTriggerDecode }) => {
    const { isEnabled } = useScramble();

    const processNode = (node: React.ReactNode): React.ReactNode => {
        if (typeof node === 'string') {
            // Wrap text strings with ScrambleText
            return <ScrambleText text={node} shouldDecode={shouldDecode} onTriggerDecode={onTriggerDecode} />;
        }

        if (React.isValidElement(node)) {
            // Clone element and process its children
            const children = React.Children.map(node.props.children, processNode);
            return React.cloneElement(node, {}, children);
        }

        if (Array.isArray(node)) {
            return node.map((child, index) => (
                <React.Fragment key={index}>{processNode(child)}</React.Fragment>
            ));
        }

        return node;
    };

    // If scramble is disabled globally, just show the children
    if (!isEnabled) {
        return <>{children}</>;
    }

    return <>{processNode(children)}</>;
};

export default ScrambleHTML;
