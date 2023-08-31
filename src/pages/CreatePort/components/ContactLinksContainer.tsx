import React from 'react'
import { styled } from 'styled-components'
import ContactLinkIcon from './ContactLinkIcon'
import { usePortData } from '../../../contexts/PortDataContext'
import { PortContextProps } from '../../../types'

const StyledLinksContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    border: var(--editor-dashed-border);
`


export default function ContactLinksContainer() {
    
    const { contactLinks } = usePortData() as PortContextProps

    return (
        <StyledLinksContainer>
            {
                contactLinks.map( contactLink => {
                    return <ContactLinkIcon contactLink={ contactLink } disabled={ true } key={ contactLink.platform }/>
                })
            }
        </StyledLinksContainer>
    ) 
}
