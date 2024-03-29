import React from 'react'
import styled from '@xstyled/emotion'

import icons from '../data/socials.json'

const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: background;
  color: text;
  padding-top: 100;
  margin-top: 200;
`

const SocialList = styled.div`
  display: flex;
  align-items: center;
`

const SocialLink = styled.a`
  margin: 0 10px;
`

const SocialImage = styled.img`
  height: 30;
  width: 30;
  transition: all 0.2s ease-in-out;
  filter: grayscale(100%);
  &:hover {
    filter: none;
  }
`

const Copyright = styled.p`
  margin-top: 50px;
`

const Footer = () => {
  return (
    <FooterStyled>
      <SocialList>
        {icons.map((icon, index) => {
          return (
            <SocialLink key={index} href={icon.url} target='_blank'>
              <SocialImage src={icon.imageUrl} alt={icon.title} />
            </SocialLink>
          )
        })}
      </SocialList>
      <Copyright>Copyright © 1990-2250 The Galactic News Int.</Copyright>
    </FooterStyled>
  )
}

export default Footer
