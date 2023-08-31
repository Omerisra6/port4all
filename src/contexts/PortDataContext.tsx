import React, { useContext, useState } from "react";
import { ContactLink, CustomLink, Description, Port, PortContextProps, UserDetails } from "../types";
import { defaultContactLinks, defaultCustomLinks, defaultDescription, defaultUserDetails } from '../DefaultViewData'

export const PortDataContext = React.createContext<PortContextProps|null>(null);

export const usePortData = () => {
    return useContext(PortDataContext);
};

interface OptionProviderProp {
    children: React.ReactNode;
}

export const PortDataProvider= ({ children }: OptionProviderProp) => {

    const [ userDetails, setUserDetails ] = useState<UserDetails>(defaultUserDetails);
    const [ contactLinks, setContactLinks ] = useState<ContactLink[]>(defaultContactLinks);

    const [ description, setDescription ] = useState<Description>(defaultDescription)

    const [ customLinks, setCustomLinks ] = useState<CustomLink[]>(defaultCustomLinks)

    const port: Port = {
        userDetails,
        contactLinks,
        description,
        customLinks
    }

    const value = {
        setUserDetails,
        userDetails,
        contactLinks,
        setContactLinks,
        description,
        setDescription,
        customLinks,
        setCustomLinks,
        port
    }

    return (
        <PortDataContext.Provider value={ value }>
            {children}
        </PortDataContext.Provider>
    );
};