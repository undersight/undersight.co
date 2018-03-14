import { rem } from "polished"

const breakpoints = {
  xxsmall:   320,
  xsmall:    480,
  small:     640,
  medium:    960,
  large:     1080,
  xlarge:    1280,
  xxlarge:   1920,
  xxxlarge:   2400,
}

let mediaQueries = {}

Object.entries(breakpoints).forEach(([key, val]) => {
  mediaQueries[`${key}Down`] = `(max-width: ${rem(val)})`
  mediaQueries[`${key}Up`]   = `(min-width: ${rem(val+1)})`
})

export default mediaQueries
