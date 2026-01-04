import React, { createContext, useContext, useState } from 'react';

interface ScrambleContextType {
    isEnabled: boolean;
    toggleScramble: () => void;
}

const ScrambleContext = createContext<ScrambleContextType>({
    isEnabled: true,
    toggleScramble: () => { },
});

export const useScramble = () => useContext(ScrambleContext);

export const ScrambleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isEnabled, setIsEnabled] = useState(true);

    const toggleScramble = () => {
        setIsEnabled(prev => !prev);
    };

    return (
        <ScrambleContext.Provider value={{ isEnabled, toggleScramble }}>
            {children}
        </ScrambleContext.Provider>
    );
};
