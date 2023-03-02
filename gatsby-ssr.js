/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import * as React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/studio-feixen-sans-variable.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="studioFeixenSans"
    />,
    <link
      rel="preload"
      href="/fonts/triptych-grotesque.woff"
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
      key="triptychGrotesque"
    />,
    <link
      rel="preload"
      href="/fonts/triptych-italick.woff"
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
      key="triptychItalick"
    />,
    <link
      rel="preload"
      href="/fonts/triptych-roman.woff"
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
      key="triptychRoman"
    />,
  ])
}