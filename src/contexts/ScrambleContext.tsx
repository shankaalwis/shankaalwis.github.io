import React, { createContext, useContext, useState } from 'react';

interface ScrambleContextType {
    isEnabled: boolean;
    toggleScramble: () => void;
    showToast: boolean;
    setShowToast: (show: boolean) => void;
}

const ScrambleContext = createContext<ScrambleContextType>({
    isEnabled: false,
    toggleScramble: () => { },
    showToast: false,
    setShowToast: () => { },
});

export const useScramble = () => useContext(ScrambleContext);

export const ScrambleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const toggleScramble = () => {
        setIsEnabled(prev => !prev);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2000);
    };

    return (
        <ScrambleContext.Provider value={{ isEnabled, toggleScramble, showToast, setShowToast }}>
            {children}
        </ScrambleContext.Provider>
    );
};
