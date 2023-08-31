import { styled } from 'styled-components'
import { OptionsContextProps, PortContextProps } from '../../../types'
import { useCurrentOption } from '../../../contexts/CurrentOptionContext'
import { usePortData } from '../../../contexts/PortDataContext'

const StyledUserDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;
    cursor: pointer;

    .image-container{
        width: 90px;
        height: 90px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }

    img{
        width: 90px;
        height: 90px;
    }

    .username{
        font-size: 0.8rem;
    }
`

const UserDetailsContainer = () => {

    const { userDetails } = usePortData() as PortContextProps
    const { setCurrentOption }  = useCurrentOption() as OptionsContextProps

    return (
        <StyledUserDetails className='user-details-container' onClick={ () => setCurrentOption('userDetails') }>

            <div className='image-container'>

                <img className="profile-image" src={ userDetails.profile.toString() } alt="profile" />    

            </div>

            <div className='username'>{ userDetails.name }</div>


        </StyledUserDetails>
    )
}

export default UserDetailsContainer
