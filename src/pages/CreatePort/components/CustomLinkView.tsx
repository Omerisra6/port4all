import React from 'react'
import { styled } from "styled-components";
import { CustomLink } from '../../../types'

interface CustomLinkProps {
    customLink: CustomLink;
    disabled: boolean;
}


const StyledCustomLink = styled.a<{ customLink: CustomLink }>`
    width: 90%;
    padding: 4px 0;
    border: ${ ({ customLink }) =>  `${ customLink.border.width }px solid ${ customLink.border.color }` };
    border-radius: ${ ({ customLink }) =>  `${ customLink.border.radius }px` };
    color: ${ ({ customLink }) => customLink.color };
    background-color: ${ ({ customLink }) => customLink.bgColor };
    
    &:hover{
        color: ${ ({ customLink }) => customLink.hoverColor };
        background-color: ${ ({ customLink }) => customLink.hoverBgColor };
    }

    .custom-link-text{
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
const CustomLinkView = ({ customLink, disabled } : CustomLinkProps) => {

    const linkHref = disabled ? '#' : customLink.url.toString()
    
    return (
        <StyledCustomLink className="custom-link" href={ linkHref }  customLink={ customLink }>

            <span className="custom-link-text">{ customLink.text }</span>

        </StyledCustomLink>
    )
}

export default CustomLinkView