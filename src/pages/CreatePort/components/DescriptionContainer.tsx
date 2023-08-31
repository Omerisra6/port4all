import React from 'react'
import { styled } from 'styled-components'
import { usePortData } from '../../../contexts/PortDataContext'
import { Description, OptionsContextProps, PortContextProps } from '../../../types'
import { useCurrentOption } from '../../../contexts/CurrentOptionContext'

const StyledDescriptionContainer = styled.div<{ description: Description }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    border: var(--editor-dashed-border);
    font-size: 0.8rem;
    padding: 10px 0;
    cursor: pointer;
    font-weight: ${ ( { description } ) => description.bold ? 'bold' : 'normal' };
    color: ${ ( { description } ) => description.color ?? '#000' };
`
export default function DescriptionContainer() {

    const { setCurrentOption }  = useCurrentOption() as OptionsContextProps
    const { description } = usePortData() as PortContextProps
    
    return (
        <StyledDescriptionContainer description={ description } onClick={ () => setCurrentOption('description') }>

            { description.text }

        </StyledDescriptionContainer>
    )
}
