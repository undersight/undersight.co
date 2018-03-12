import React from 'react'
import Link from 'gatsby-link'
import styled, { css } from "styled-components"
import { rem, hideVisually } from "polished"

const MainHeader = styled.header`
  width: 100%;
  padding: ${rem(150)};
`

const SiteTitle = styled.h1`
  font-family: ${props => props.theme.ffPrimary};
  font-size: 4vw;
  line-height: 4vw;
  max-width: 50vw;
  font-weight: 500;
`

const SiteByline = styled.p`
  font-family: ${props => props.theme.ffSecondary};
  font-size: ${rem(20)};
  line-height: ${rem(30)};
  font-weight: 300;
  margin-top: ${rem(50)};
`

const Header = () => (
  <MainHeader>
    <SiteTitle><strong>Undersight.co</strong> is the digital playground of Eduardo Nunes.</SiteTitle>
    <SiteByline>
      Full-time graphic designer, part-time noise maker.<br />
      Head of Design at Stockholm-based Kollegorna.
    </SiteByline>
  </MainHeader>
)

export default Header
