import React, { createContext, useContext, useState, ReactNode } from 'react';

type Theme = 'Light' | 'Dark';

//Tipo do contexto
interface  ThemeType {
    valueTheme: Theme;
    setThemeValue: (value: Theme) => void;
}

//Tipo context provider
interface MyContextProviderProps {
    children: ReactNode;
}

//Cria contexto
const ThemeContext = createContext<ThemeType | undefined>(undefined);

//provider
export const providerThemeContext = ({children}: MyContextProviderProps ) => {
    const [valueTheme, setThemeValue] = useState<Theme>('Light');
    
    <ThemeContext.Provider value={{valueTheme, setThemeValue}}>
        {children}
    </ThemeContext.Provider>
}

//hook para usar o contexto de forma mais facil

export const useMyThemeContext = (): ThemeType =>{
    const context = useContext(ThemeContext);

    if(context === undefined){
        throw new Error('context undefined');
    }
    return context;
}