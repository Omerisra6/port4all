import React from 'react'
import { styled } from "styled-components";
import { usePortData } from '../../../contexts/PortDataContext';
import { PortContextProps } from '../../../types';
import CustomLinkView from './CustomLinkView';

const StyledLinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    width: 90%;
    padding: 5px 0;
    border: var(--editor-dashed-border);
    font-size: 0.8rem;
`


export default function CustomLinksContainer() {

    const { customLinks } = usePortData() as PortContextProps

    return (
        <StyledLinksContainer>

            { customLinks.map((customLink, index) => {

                return <CustomLinkView customLink={ customLink } disabled={ true } key={index}/>

            })}
            
        </StyledLinksContainer>
    )
}
