import React from 'react'
import styled from "styled-components"
import { rem } from "polished"

const Error = styled.section`
  width: 100%;
  margin-top: ${rem(80)};
  padding: ${rem(50)} ${rem(30)};
  text-align: center;

  h1 {
    font-family: ${props => props.theme.ffPrimary};
    font-size: ${rem(24)};
    line-height: 1;
    font-weight: 700;
    margin: 0;

    @media ${props => props.theme.smallUp} {
      font-size: ${rem(36)};
    }

    @media ${props => props.theme.mediumUp} {
      font-size: 4vw;
    }

    @media ${props => props.theme.largeUp} {
      font-size: 3vw;
    }

    @media ${props => props.theme.xxlargeUp} {
      font-size: ${rem(72)};
    }
  }
`

const NotFoundPage = () => (
  <div>
    <Error>
      <h1><span role="img" aria-label="Sad emoji">😔</span><br />Page not found...</h1>
    </Error>
  </div>
)

export default NotFoundPage
