import React from 'react'
import { styled } from 'styled-components'
import CreatePortView from './components/CreatePortView'
import CreatePortEditor from './components/CreatePortEditor'
import { CurrentOptionProvider } from '../../contexts/CurrentOptionContext'
import { PortDataProvider } from '../../contexts/PortDataContext'

const StyledCreatePort = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    overflow-y: auto;

    & > *{
        flex-grow: 1;
        flex-basis: 50%;
    }
`
export default function CreatePort() {
  return (
    <StyledCreatePort className='create-port-page-container'>

        <CurrentOptionProvider>

            <PortDataProvider>
                
                <CreatePortEditor/>
                <CreatePortView/>       

            </PortDataProvider>
            
        </CurrentOptionProvider>
        
    </StyledCreatePort>
  )
}