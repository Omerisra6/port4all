import React, { useContext, useState } from "react";
import { EditorOption, OptionsContextProps } from "../types";

export const CurrentOptionContext = React.createContext<OptionsContextProps|null>(null);

export const useCurrentOption = () => {
    return useContext(CurrentOptionContext);
};

interface OptionProviderProp {
    children: React.ReactNode;
}

export const CurrentOptionProvider = ({ children }: OptionProviderProp) => {
    
    const [ currentOption, setCurrentOption ] = useState<EditorOption>('userDetails');

    return (
        <CurrentOptionContext.Provider value={ { currentOption, setCurrentOption } }>
            { children }
        </CurrentOptionContext.Provider>
    );
};
