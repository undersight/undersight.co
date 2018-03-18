import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled, { ThemeProvider } from "styled-components"
import WebFont from 'webfontloader';

import Header from '../components/Header'

import theme from "../themes/main.js"
import inRegexArray from "../helpers/in-regex-array.js"

import "../assets/styles/reset.css"

const largeHeaderPages = [
  /^\/$/, // index
]

class TemplateWrapper extends React.Component {
  constructor(props) {
    super()

    this.state = {loadState: "loading"}
  }

  componentDidMount = () => {
    WebFont.load({
      typekit: {
        id: 'bhs8rbg'
      }
    });
    this.setState({loadState: "loaded"})
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className={"site-wrapper " + this.state.loadState}>
          <Helmet
            title="Undersight.co"
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          />

          <Header headerSize={inRegexArray(this.props.location.pathname, largeHeaderPages) ? 'large' : 'small'} />

          <div>
            {this.props.children()}
          </div>
        </div>
      </ThemeProvider>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
