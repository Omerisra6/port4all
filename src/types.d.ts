export type EditorOption = keyof Port

export type UserDetails = {
    name: string,
    profile: URL
}

export type ContactLink = {
    platform: 'instagram' | 'twitter' | 'tiktok' | 'whatsapp' | 'facebook'
    baseUrl: URL,
    contact: string
}

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;
type StringColor =  RGB | RGBA |HEX

export type Description = {
    text: string | null,
    color: StringColor | null 
    bold: boolean | null
}

type Border = {
    width: number,
    radius: number,
    color: StringColor
}

export type CustomLink = {
    text: string,
    url: URL,
    color: StringColor,
    border: Border
    bgColor: StringColor,
    hoverColor: StringColor
    hoverBgColor: StringColor
}

export type Port = {
    userDetails: UserDetails,
    contactLinks: ContactLink[],
    description: Description,
    customLinks: CustomLink[]
}

export type PlatformColorsMap = {
    [platform in  ContactLink['platform']]: StringColor
}

export type PortContextProps = {
    userDetails: UserDetails,
    setUserDetails: React.Dispatch<React.SetStateAction<UserDetails>>,
    contactLinks: ContactLink[] ,
    setContactLinks: React.Dispatch<React.SetStateAction<ContactLink[]>>,
    description: Description,
    setDescription: React.Dispatch<React.SetStateAction<Description>>,
    customLinks: CustomLink[],
    setCustomLinks: React.Dispatch<React.SetStateAction<CustomLink[]>>,
    port: Port
}

export type OptionsContextProps = {
    currentOption: EditorOption,
    setCurrentOption: React.Dispatch<React.SetStateAction<EditorOption>>
}