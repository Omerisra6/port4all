export const defaultUserDetails = { name: 'Click here to edit name', profile: new URL( 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' ) } as const

export const defaultContactLinks =  [
    { platform : 'instagram', baseUrl: new URL( 'https://www.instagram.com/' ), contact: '' } as const,
    { platform : 'twitter', baseUrl: new URL( 'https://twitter.com/' ), contact: '' } as const,
    { platform : 'tiktok', baseUrl: new URL( 'https://www.tiktok.com/@' ), contact: '' } as const,
    { platform : 'facebook', baseUrl: new URL( 'https://www.facebook.com/@' ), contact: '' } as const,
    { platform : 'whatsapp', baseUrl: new URL( 'https://wa.me/972549063651' ), contact: '' } as const,
]

export const defaultDescription =  { text: 'Click here to edit description', color: '#000000', bold: false } as const

export const defaultCustomLinks = [
    {
        text: 'Sample link 1',
        url: new URL( 'https://www.port4all.com' ),
        color: '#000',
        border: { width: 2, radius: 4, color: '#000' },
        bgColor: '#fff',
        hoverColor: '#fff',
        hoverBgColor: '#000'
    } as const,
    {
        text: 'Sample link 2',
        url: new URL( 'https://www.port4all.com' ),
        color: '#000',
        border: { width: 2, radius: 4, color: '#000' },
        bgColor: '#fff',
        hoverColor: '#fff',
        hoverBgColor: '#000'
    } as const,
    {
        text: 'Sample link 3',
        url: new URL( 'https://www.port4all.com' ),
        color: '#000',
        border: { width: 2, radius: 4, color: '#000' },
        bgColor: '#fff',
        hoverColor: '#fff',
        hoverBgColor: '#000'
    } as const,
    {
        text: 'Sample link 4',
        url: new URL( 'https://www.port4all.com' ),
        color: '#000',
        border: { width: 2, radius: 4, color: '#000' },
        bgColor: '#fff',
        hoverColor: '#fff',
        hoverBgColor: '#000'
    } as const
]