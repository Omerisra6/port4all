import { styled } from 'styled-components'
import UserDetailsContainer from './UserDetailsContainer'
import ContactLinksContainer from './ContactLinksContainer'
import DescriptionContainer from './DescriptionContainer'
import CustomLinksContainer from './CustomLinksContainer'

const StyledPortViewWrapper = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledPortViewContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    height: 70%;
    width: 60%;
    background-color: var( --white );
    border-radius: 42px;
    box-shadow: 0 50px 100px -20px rgba(50,50,93,.25),0 30px 60px -30px rgba(0,0,0,.3),inset 0 -2px 6px 0 rgba(10,37,64,.35);
    padding: 10% 5%;
    max-width: 300px;
    min-width: 260px;

    @media( max-width: 600px ){
        min-height: 400px;
    }
`

const CreatePortView = () => {
  return (
    <StyledPortViewWrapper className='create-port-view-wrapper'>

        <StyledPortViewContainer>

            <UserDetailsContainer/>

            <ContactLinksContainer/>

            <DescriptionContainer/>
            
            <CustomLinksContainer/>

        </StyledPortViewContainer>

    </StyledPortViewWrapper>
  )
}

export default CreatePortView;
