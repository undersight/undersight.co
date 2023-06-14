import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { rem } from 'polished'

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

    @media ${(props) => props.theme.xsmallDown} {
      width: 90%;
    }
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
    max-width: 40ch;

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
`

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: calc(1em + 0.3vw);
  margin-top: 2em;
`

const PrimaryButton = styled.a`
  display: table;
  font-family: ${(props) => props.theme.ffSecondary};
  font-variation-settings: 'wght' 600, 'wdth' 105;
  text-transform: uppercase;
  background-color: ${(props) => props.theme.colorBlack};
  color: ${(props) => props.theme.colorWhite};
  padding: 1em 2em;
  border-radius: 2em;
  white-space: nowrap;

  &:hover {
    background-color: ${(props) => props.theme.colorYellow};
    color: ${(props) => props.theme.colorBlack};
  }

  @media ${(props) => props.theme.smallDown} {
    font-size: ${rem(14)};
  }
`

const SecondaryButton = styled.a`
  display: table;
  font-family: ${(props) => props.theme.ffSecondary};
  font-variation-settings: 'wght' 600, 'wdth' 105;
  text-transform: uppercase;
  color: ${(props) => props.theme.colorBlack};
  padding: 1em 2em;
  border-radius: 2em;
  white-space: nowrap;

  &:hover {
    text-decoration: underline;
  }

  @media ${(props) => props.theme.smallDown} {
    font-size: ${rem(14)};
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

const PortfolioPage = () => {
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
            <h1><strong>Thank you</strong> for your interest in my portfolio.</h1>

            <p>Please click below to download a PDF with selected work, or open the deck as a Figma prototype.</p>

            <Buttons>
              <PrimaryButton href="https://undersight.s3.eu-north-1.amazonaws.com/eduardo_nunes-2023_product_design_deck.pdf">Download PDF</PrimaryButton>
              <SecondaryButton href="https://www.figma.com/proto/xdQVfdKCNyWYmUaLvcgp2o/Eduardo-Nunes-%E2%80%94-Portfolio?page-id=48%3A2&type=design&node-id=48-154&viewport=25%2C349%2C0.06&scaling=scale-down" target="_blank">Open in Figma</SecondaryButton>
            </Buttons>
          </div>
        </Left>

        <Right>
          <img src="/images/ed.jpg" alt="Portrait of Eduardo Nunes" />
        </Right>
      </PortfolioWrapper>
     </>)
}

export default PortfolioPage
