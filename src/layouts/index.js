import React from 'react'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import ReactGA from 'react-ga'

import '../assets/styles/reset.css'
import '../assets/styles/fonts.css'

import Header from '../components/Header'
import Footer from '../components/Footer'

import theme from '../themes/main.js'
import inRegexArray from '../helpers/in-regex-array.js'

const largeHeaderPages = [
  /^\/$/, // index
]

class TemplateWrapper extends React.Component {
  constructor(props) {
    super()

    this.state = { loadState: 'loading' }
  }

  componentDidMount = () => {
    this.setState({ loadState: 'loaded' })

    ReactGA.initialize('UA-116544151-1')
    ReactGA.pageview(window.location.pathname + window.location.search)
  }

  componentDidUpdate = () => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className={'site-wrapper ' + this.state.loadState}>
          <Helmet>
            <html lang="en" />

            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/images/apple-touch-icon.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/images/favicon-32x32.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/images/favicon-16x16.png"
            />
            <link rel="manifest" href="/site.webmanifest" />
            <link
              rel="mask-icon"
              href="/images/safari-pinned-tab.svg"
              color="#ff4d00"
            />
            <meta name="msapplication-TileColor" content="#fff9aa" />
            <meta name="theme-color" content="#fff9aa" />
          </Helmet>

          <Header
            headerSize={
              inRegexArray(this.props.location.pathname, largeHeaderPages)
                ? 'large'
                : 'small'
            }
          />

          <div>{this.props.children}</div>

          <Footer />
        </div>
      </ThemeProvider>
    )
  }
}

export default TemplateWrapper
