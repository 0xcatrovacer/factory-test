import React, { createContext } from "react";

export interface Theme {
    primary: string;
    primaryContent: string;
    secondary: string;
    secondaryContent: string;
    hover: string;
    hoverContent: string;
    loading: string;
    loadingContent: string;
}

export interface ThemeDetails {
  themeObject: Theme;
  setThemeObject: React.Dispatch<React.SetStateAction<Theme>>;
}

const initialValue: ThemeDetails = {
    themeObject: { 
        primary: "", 
        primaryContent: "", 
        secondary: "", 
        secondaryContent: "", 
        hover: "", 
        hoverContent: "", 
        loading: "", 
        loadingContent: "", 
    },
    setThemeObject: () => {},
};

export const ThemeContext = createContext<ThemeDetails>(initialValue);