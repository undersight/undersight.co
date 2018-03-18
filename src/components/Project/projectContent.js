import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import styled, { css } from "styled-components"
import { rem, hideVisually } from "polished"

const Content = styled.section`
  width: 100%;
  margin-top: ${rem(100)};
  
  @media ${props => props.theme.smallUp} {
    margin-top: ${rem(130)};
  }
  @media ${props => props.theme.largeUp} {
    margin-top: ${rem(150)};
  }

  header {
    width: 80%;
    max-width: ${rem(800)};
    margin: 0 auto ${rem(30)} auto;
  }

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
      font-size: ${rem(48)};
    }
  }

  h2 {
    font-family: ${props => props.theme.ffSecondary};
    font-size: ${rem(14)};
    line-height: 1;
    font-weight: 300;
    margin-top: ${rem(10)};

    @media ${props => props.theme.smallUp} {
      font-size: ${rem(16)};
    }

    @media ${props => props.theme.mediumUp} {
      font-size: ${rem(18)};
    }
  }

  .copy {
    width: 80%;
    max-width: ${rem(800)};
    margin: ${rem(60)} auto;

    a {
      text-decoration: underline;
      transition: color 0.2s ease-out;

      &:hover {
        color: ${props => props.theme.colorGreyDark};
      }
    }

    p {
      font-family: ${props => props.theme.ffPrimary};
      font-size: ${rem(24)};
      line-height: 1.25;
      font-weight: 300;
      margin-bottom: ${rem(24)};
    
      @media ${props => props.theme.smallUp} {
        font-size: ${rem(28)};
      margin-bottom: ${rem(28)};
      }

      @media ${props => props.theme.mediumUp} {
        font-size: ${rem(32)};
        margin-bottom: ${rem(32)};
      }
    }
  }
`

class ProjectContent extends React.Component {
  constructor(props) {
    super()
  }

  render() {
    return (
        <Content role="main">
            {this.props.children}
        </Content>
    )
  }
}

export default ProjectContent
