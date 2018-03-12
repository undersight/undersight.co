import fonts from "./fonts.js"
import easings from "./easings.js"
import zIndex from "./z-index.js"
import mediaQueries from "./media-queries.js"
import colorConstants from "./color-constants.js"
import keyframes from "./keyframes.js"

const shared = {
  ...fonts,
  ...easings,
  ...zIndex,
  ...mediaQueries,
  ...colorConstants,
  ...keyframes,
}

export default shared
