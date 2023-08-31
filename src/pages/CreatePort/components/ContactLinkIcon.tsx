import React from 'react'
import { ContactLink, OptionsContextProps, PlatformColorsMap } from '../../../types'
import { styled } from 'styled-components'
import { useCurrentOption } from '../../../contexts/CurrentOptionContext';


interface ContactLinkIconProps {
  contactLink: ContactLink;
  disabled: boolean;
}

const platformsColors: PlatformColorsMap = {
  'whatsapp': '#128C7E ',
  'facebook': '#3b5998 ',
  'instagram': '#962fbf',
  'tiktok': '#EE1D52',
  'twitter': '#1D9BF0'
}

const StyledIconContainer = styled.a<{contactLink: ContactLink}>`
  display: flex;
  height: 23px;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
  cursor: pointer;

  .contact-icon{
    color: ${ ({ contactLink }) => !! contactLink.contact ? platformsColors[ contactLink.platform ] : 'var( --black )' };
  }

  .contact-icon:hover{
    color: ${ ({ contactLink }) => platformsColors[ contactLink.platform ] };
  }

`
const ContactLinkIcon = ( { contactLink, disabled}: ContactLinkIconProps) => {

  const { setCurrentOption }  = useCurrentOption() as OptionsContextProps

  const contactUrl = contactLink.baseUrl.toString + contactLink.contact
  const linkHref = disabled ? '#' : contactUrl

  return (
    <StyledIconContainer href={ linkHref } contactLink={ contactLink } onClick={ () => setCurrentOption('customLinks') }>

      <i className={`fa-brands fa-${contactLink.platform} fa-lg contact-icon`}></i>

    </StyledIconContainer>
  )
}

export default ContactLinkIcon