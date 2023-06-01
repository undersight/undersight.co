import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { rem } from 'polished'
import { graphql } from 'gatsby'

import ProjectGrid from '../components/Project/projectGrid'
import ProjectThumbnail from '../components/Project/projectThumbnail'

const PortfolioWrapper = styled.div`
  display: flex;

  @media ${(props) => props.theme.mediumDown} {
    flex-direction: column;
  }
`

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0 50px 0;

  & > div {
    width: 80%;
  }

  h1 {
    font-family: ${(props) => props.theme.ffPrimary};
    font-size: ${rem(22)};
    line-height: 1.4;
    font-weight: normal;
    max-width: 25ch;
    letter-spacing: -0.02em;
    max-width: 21ch;

    strong {
      font-weight: bold;
    }

    br {
      margin-bottom: 5px;
    }

    @media ${(props) => props.theme.smallUp} {
      font-size: calc(1em + 1.4vw);
      line-height: 1.2;
    }
  }

  p {
    font-family: ${(props) => props.theme.ffSecondary};
    font-size: ${rem(16)};
    font-variation-settings: 'wght' 420, 'wdth' 100;
    line-height: 1.4;
    font-weight: normal;
    margin-top: ${rem(10)};
    max-width: 48ch;

    @media ${(props) => props.theme.smallDown} {
      br {
        display: none;
      }
      span {
        margin-left: 0.5em;
      }
    }

    @media ${(props) => props.theme.smallUp} {
      font-size: calc(1em + 0.3vw);
      margin-top: 1.4em;
    }
  }

  a {
    display: table;
    margin-top: 2em;
    font-family: ${(props) => props.theme.ffSecondary};
    font-size: ${rem(16)};
    font-variation-settings: 'wght' 600, 'wdth' 105;
    text-transform: uppercase;
    background-color: ${(props) => props.theme.colorBlack};
    color: ${(props) => props.theme.colorWhite};
    padding: 1em 2em;
    border-radius: 2em;

    &:hover {
      background-color: ${(props) => props.theme.colorYellow};
      color: ${(props) => props.theme.colorBlack};
    }

    @media ${(props) => props.theme.smallUp} {
      font-size: calc(1em + 0.3vw);
      margin-top: 2em;
    }
  }
`

const Right = styled.div`
  flex: 1;
  font-size: 0;

  img {
    width: 100%;

    @media ${(props) => props.theme.smallUp} {
      height: 100%;
      min-height: 20vw;
      height: 90vh;
      height: calc(100vh - 80px);
      object-fit: cover;
      object-position: 50% 10%;
    }
  }
`

const PortfolioPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges.map((edge) => (
    <ProjectThumbnail key={edge.node.id} project={edge.node} />
  ))

  return (
    <>
      <Helmet
        title="Eduardo Nunes — Designer & Creative Developer"
        meta={[
          { name: 'name', content: 'Undersight.co' },
          {
            name: 'description',
            content:
              'Undersight.co is the digital playground of Eduardo Nunes. Designer & creative developer from Portugal.',
          },
          {
            name: 'keywords',
            content:
              'undersight, design, eduardo nunes, Web, Frontendelopment, frontend, graphic',
          },
          { name: 'image', content: '/images/og.png' },
          { property: 'og:type', content: 'website' },
          { property: 'og:site_name', content: 'Undersight.co' },
          { property: 'og:title', content: 'Undersight.co' },
          {
            property: 'og:description',
            content:
              'Undersight.co is the digital playground of Eduardo Nunes. Designer & creative developer from Portugal.',
          },
          {
            property: 'og:image',
            content: 'https://www.undersight.co/images/og.png',
          },
          {
            property: 'og:url',
            content:
              'https://www.undersight.co',
          },
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Undersight.co' },
          {
            name: 'twitter:description',
            content:
              'Undersight.co is the digital playground of Eduardo Nunes. Designer & creative developer from Portugal.',
          },
          {
            name: 'twitter:image:src',
            content: 'https://www.undersight.co/images/og.png',
          },
          { name: 'twitter:site', content: '@undersight_co' },
          { name: 'twitter:creator', content: '@undersight_co' },
          { itemprop: 'name', content: 'Undersight.co' },
          {
            itemprop: 'description',
            content:
              'Undersight.co is the digital playground of Eduardo Nunes. Designer & creative developer from Portugal.',
          },
          {
            itemprop: 'image',
            content: 'https://www.undersight.co/images/og.png',
          },
        ]}
      ></Helmet>
      <PortfolioWrapper>
        <Left>
          <div>
            <h1><strong>Olá</strong> 👋<br />Thank you for your interest in my portfolio.</h1>

            <p>Please click the button below to download a PDF with selected work, or simply scroll down to read a few more in-depth case studies.</p>

            <a href="https://undersight.s3.eu-north-1.amazonaws.com/eduardo_nunes-2023_design_portfolio.pdf">Download</a>
          </div>
        </Left>

        <Right>
          <img src="/images/ed.jpg" />
        </Right>
      </PortfolioWrapper>
      <ProjectGrid>{Posts}</ProjectGrid>
     </>)
}

export default PortfolioPage

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___order] }) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            type
            thumbnail {
              publicURL
              childImageSharp {
                gatsbyImageData(layout: FIXED)
                original {
                  width
                  height
                }
              }
            }
          }
        }
      }
    }
  }
`
