import { keyframes } from "styled-components"
import { rem } from "polished"

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

const slideInDown = ({pos = 20}) => (keyframes`
  0% {
    transform: translateY(${rem(-pos)});
  }

  100% {
    transform: translateY(0);
  }
`)

const kfs = {
  fadeIn: fadeIn,
  slideInDown: slideInDown
}

export default kfs
