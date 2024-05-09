import React, { useState } from "react";
import { ThemeDetails, Theme, ThemeContext } from "./mainTheme.tsx";

interface Props {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<Props> = ({ children }) => {
    const [themeObject, setThemeObject] = useState<Theme>({ 
        primary: "", 
        primaryContent: "", 
        secondary: "", 
        secondaryContent: "", 
        hover: "", 
        hoverContent: "", 
        loading: "", 
        loadingContent: "", 
    });

    const contextValue: ThemeDetails = {
        themeObject,
        setThemeObject,
    };

    return (
        <ThemeContext.Provider value={contextValue}>
        {children}
        </ThemeContext.Provider>
    );
};
