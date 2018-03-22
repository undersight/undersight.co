import React from 'react'
import Link from 'gatsby-link'
import styled, { css } from "styled-components"
import { rem, hideVisually } from "polished"

import Behance from "../../assets/images/icons/behance.svg"
import Dribbble from "../../assets/images/icons/dribbble.svg"
import GitHub from "../../assets/images/icons/github.svg"
import Tumblr from "../../assets/images/icons/tumblr.svg"

const MainFooter = styled.footer`
  width: 100%;
  padding: ${rem(30)};
  margin-left: auto;
  margin-right: auto;
  border-top: 1px solid ${props => props.theme.colorBorderLight};
  display: flex;
  
  @media ${props => props.theme.mediumUp} {
    padding: ${rem(40)} ${rem(30)};
  }
  @media ${props => props.theme.largeUp} {
    padding: ${rem(50)} ${rem(30)};
  }
  @media ${props => props.theme.xlargeUp} {
    padding: ${rem(60)} ${rem(30)};
  }
`

const FooterLogo = styled.p`
  font-family: ${props => props.theme.ffSecondary};
  font-size: ${rem(12)};
  line-height: 1.2;
  font-weight: 300;
  width: 50%;

  @media ${props => props.theme.smallUp} {
    font-size: ${rem(14)};
    max-width: 55vw;
    line-height: 1;
  }

  @media ${props => props.theme.xlargeUp} {
    font-size: ${rem(14)};
    max-width: 50vw;
  }
`

const FooterLinks = styled.nav`
  font-family: ${props => props.theme.ffSecondary};
  font-size: ${rem(12)};
  line-height: 1.2;
  font-weight: 300;
  width: 50%;
  text-align: right;

  @media ${props => props.theme.smallUp} {
    font-size: ${rem(14)};
    line-height: 1;
  }

  a {
      display: inline-block;
      margin-right: ${rem(30)};
  }
  img {
      display: inline-block;
      vertical-align: middle;
  }
`

class Footer extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
    <MainFooter>
        <FooterLogo>
            Undersight
        </FooterLogo>
        <FooterLinks>
            <a href="/"><img src={Behance} /> Behance</a>
            <a href="/"><img src={Dribbble} /> Dribbble</a>
            <a href="/"><img src={GitHub} /> GitHub</a>
            <a href="/"><img src={Tumblr} /> Tumblr</a>
        </FooterLinks>
    </MainFooter>
    )
  }
}

export default Footer
