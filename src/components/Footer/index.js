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
  padding: ${rem(10)} ${rem(30)};
  margin-left: auto;
  margin-right: auto;
  border-top: 1px solid ${props => props.theme.colorBorderLight};
  display: flex;
  
  @media ${props => props.theme.mediumUp} {
    padding: ${rem(20)} ${rem(30)};
  }
  @media ${props => props.theme.largeUp} {
    padding: ${rem(30)} ${rem(30)};
  }
  @media ${props => props.theme.xlargeUp} {
    padding: ${rem(40)} ${rem(30)};
  }
`

const FooterLogo = styled.p`
  font-family: ${props => props.theme.ffSecondary};
  font-size: ${rem(12)};
  font-weight: 300;
  width: 50%;
  line-height: ${rem(42)};

  @media ${props => props.theme.smallUp} {
    font-size: ${rem(14)};
    max-width: 55vw;
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
  line-height: ${rem(42)};

  @media ${props => props.theme.mediumUp} {
    font-size: ${rem(14)};
  }

  a {
      display: inline-block;
      margin-right: ${rem(5)};
      line-height: ${rem(42)};

      @media ${props => props.theme.mediumUp} {
        margin-right: ${rem(30)};
      }

      &:hover {
        opacity: 0.5;
      }
  }
  img {
      width: ${rem(22)};
      height: ${rem(22)};
      display: inline-block;
      vertical-align: middle;
  }
  span {
    display: none;

    @media ${props => props.theme.mediumUp} {
      display: inline-block;
      vertical-align: middle;
    }
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
            <a href="https://www.behance.net/eduardonunes" target="_blank"><img src={Behance} /> <span>Behance</span></a>
            <a href="https://dribbble.com/eduardonunes" target="_blank"><img src={Dribbble} /> <span>Dribbble</span></a>
            <a href="https://github.com/emmnunes" target="_blank"><img src={GitHub} /> <span>GitHub</span></a>
            <a href="http://tumblr.eduardonunes.me/" target="_blank"><img src={Tumblr} /> <span>Tumblr</span></a>
        </FooterLinks>
    </MainFooter>
    )
  }
}

export default Footer
