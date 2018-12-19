import React from 'react'
import styled from "styled-components"
import { rem } from "polished"

const Projects = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: calc(100vw + 80px);
  transition: all 0.2s ease-out;

  &.loading {
    opacity: 0;
    transform: translateY(-${rem(20)});
  }

  &.loaded {
    opacity: 1;
    transform: none;
  }

  @media ${props => props.theme.mediumUp} {
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: calc(50vw + 100px);
  }

  @media ${props => props.theme.xxlargeUp} {
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: calc(100vw / 3 + 100px);
  }

  /* @media ${props => props.theme.xxxlargeUp} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-rows: calc(25vw + 100px);
  } */
`
class ProjectGrid extends React.Component {
  constructor(props) {
    super()

    this.state = {loadState: "loading"}
  }

  componentDidMount() {
    this.setState({loadState: "loaded"})
  }

  componentWillUnmount() {
    this.setState({loadState: "loading"})
  }

  render() {
    return (
      <Projects className={this.state.loadState}>
          {this.props.children}
      </Projects>
    )
  }
}

export default ProjectGrid
