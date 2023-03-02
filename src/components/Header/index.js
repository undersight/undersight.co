import React from 'react'
import Link from 'gatsby-link'
import styled, { css } from 'styled-components'
import { rem } from 'polished'
import Headroom from 'react-headroom'

const MainHeader = styled.header`
  width: 100%;
  padding: ${rem(30)};
  margin-left: auto;
  margin-right: auto;

  @media ${(props) => props.theme.smallUp} {
    padding: ${rem(75)} ${rem(70)};
  }
  @media ${(props) => props.theme.mediumUp} {
    padding: ${rem(100)} ${rem(80)};
  }
  @media ${(props) => props.theme.largeUp} {
    padding: ${rem(120)} ${rem(100)};
  }
  @media ${(props) => props.theme.xlargeUp} {
    padding: ${rem(150)} ${rem(100)};
  }

  ${(props) =>
    props.size === 'small' &&
    css`
      padding: ${rem(20)};
      margin-bottom: ${rem(50)};
      background: ${(props) => props.theme.colorWhite};
      border-bottom: 1px solid ${(props) => props.theme.colorBorderLighter};
      position: relative;
      transition: background 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955);
      z-index: 9;

      small {
        display: none;
      }

      @media ${(props) => props.theme.smallUp} {
        padding: ${rem(20)};
      }
      @media ${(props) => props.theme.mediumUp} {
        padding: ${rem(20)};
        height: ${rem(80)};

        a {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        strong,
        small {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
        }
        strong {
          transition: transform 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955);
        }
        small {
          display: inline-block;
          transition: transform 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955),
            opacity 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955);
        }

        small {
          opacity: 0;
        }
      }
      @media ${(props) => props.theme.largeUp} {
        padding: ${rem(20)};
      }
      @media ${(props) => props.theme.xlargeUp} {
        padding: ${rem(20)};
      }
      @media ${(props) => props.theme.xxxlargeUp} {
        padding: ${rem(20)};
        margin-bottom: ${rem(100)};
      }

      &:hover {
        background: ${(props) => props.theme.colorYellow};
        border-color: ${(props) => props.theme.colorYellow};

        strong {
          transform: translateX(-200%) translateY(-50%);
        }
        small {
          opacity: 1;
          transform: translateX(-31%) translateY(-50%);
          transition: transform 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955),
            opacity 0.6s cubic-bezier(0.455, 0.03, 0.515, 0.955);
        }
      }
    `}
`

const SiteTitle = styled.h1`
  font-family: ${(props) => props.theme.ffPrimary};
  font-size: ${rem(22)};
  line-height: 1.4;
  font-weight: normal;
  max-width: 25ch;
  letter-spacing: -0.02em;

  strong {
    font-weight: bold;
  }

  @media ${(props) => props.theme.smallUp} {
    font-size: calc(1em + 2.4vw);
    line-height: 1.2;
  }

  ${(props) =>
    props.size === 'small' &&
    css`
      width: 100%;
      max-width: 100%;
      font-size: ${rem(16)};
      font-weight: normal;
      line-height: 1;
      transition: border 0.4s;
      display: table;
      transition: background 0.2s;
      margin-left: auto;
      margin-right: auto;
      text-align: center;

      strong {
        font-weight: normal;
      }

      @media ${(props) => props.theme.smallUp} {
        font-size: ${rem(18)};
        width: 100%;
        max-width: 100%;
      }

      @media ${(props) => props.theme.xlargeUp} {
        font-size: ${rem(20)};
        width: 100%;
        max-width: 100%;
      }
    `}
`

const SiteByline = styled.p`
  font-family: ${(props) => props.theme.ffSecondary};
  font-size: ${rem(16)};
  font-variation-settings: 'wght' 420, 'wdth' 105;
  line-height: 1.4;
  font-weight: normal;
  margin-top: ${rem(10)};

  a {
    text-decoration: underline;

    &:hover {
      color: ${(props) => props.theme.colorGreyDark};
    }
  }

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
`

class Header extends React.Component {
  render() {
    if (this.props.headerSize === 'small') {
      return (
        <Headroom>
          <MainHeader size="small">
            <Link to="/" title="Go to homepage">
              <SiteTitle size="small">
                <strong>Undersight.co</strong>
                <small> is the digital playground of Eduardo Nunes.</small>
              </SiteTitle>
            </Link>
          </MainHeader>
        </Headroom>
      )
    } else {
      return (
        <MainHeader>
          <SiteTitle>
            <strong>Undersight.co</strong> is the digital playground of Eduardo
            Nunes.
          </SiteTitle>
          <SiteByline>
            Designer & creative developer from Portugal.<br />
            <span>— ed at undersight dot co</span>
          </SiteByline>
        </MainHeader>
      )
    }
  }
}

export default Header
