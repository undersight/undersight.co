import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { rem } from 'polished'
import { GatsbyImage } from "gatsby-plugin-image"

const Thumbnail = styled.article`
  overflow: hidden;

  a {
    width: 100%;
  }

  &:hover div {
    background: ${(props) => props.theme.colorYellow};
  }
`

const ProjectImage = styled.div`
  width: 100%;
  height: calc(100% - 60px);
  position: relative;

  @media ${(props) => props.theme.mediumUp} {
    height: calc(100% - 90px);
  }

  div[data-placeholder-image] {
    display: none;
  }

  .gatsby-image-wrapper img {
    position: static !important;
    width: auto !important;
    height: 100% !important;
    transform: translateX(-${props => props.position || "0"}%);
  }
`

const ProjectMeta = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${rem(60)};
  background: ${(props) => props.theme.colorWhite};
  padding-left: ${rem(15)};
  padding-right: ${rem(15)};

  @media ${(props) => props.theme.mediumUp} {
    padding-left: ${rem(30)};
    padding-right: ${rem(30)};
    height: ${rem(90)};
  }
`

const ProjectTitle = styled.h1`
  font-family: ${(props) => props.theme.ffPrimary};
  font-size: ${rem(16)};
  line-height: 1;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0;

  @media ${(props) => props.theme.smallUp} {
    font-size: ${rem(18)};
  }

  @media ${(props) => props.theme.mediumUp} {
    font-size: ${rem(20)};
  }
`

const ProjectType = styled.h2`
  font-family: ${(props) => props.theme.ffSecondary};
  font-size: ${rem(12)};
  font-weight: 300;
  margin: 0;
  font-variation-settings: 'wght' 500, 'wdth' 105;

  @media ${(props) => props.theme.smallUp} {
    font-size: ${rem(14)};
  }

  @media ${(props) => props.theme.mediumUp} {
    line-height: ${rem(32)};
  }

  @media ${(props) => props.theme.xlargeUp} {
    font-size: ${rem(16)};
  }
`

class ProjectThumbnail extends React.Component {
  constructor(props) {
    super()

    this.state = {
      project: props.project,
      frames: 1,
      imageWidth: 0,
      currentFrame: 0,
      imageOffset: 0,
    }

    this._mouseEnter = this._mouseEnter.bind(this)
    this._mouseLeave = this._mouseLeave.bind(this)
  }

  _randomizeImage() {
    let imageHeight = this.state.project.frontmatter.thumbnail.childImageSharp.original.height
    let imageWidth = this.state.project.frontmatter.thumbnail.childImageSharp.original.width

    const frameCount = Math.floor(imageWidth / imageHeight)
    const startFrame = Math.floor(Math.random() * frameCount)

    this.setState({
      frames: frameCount,
      imageWidth: imageWidth,
      currentFrame: startFrame,
    })
  }

  _cycleImage() {
    let currentFrame = this.state.currentFrame

    if (currentFrame < this.state.frames - 1) {
      currentFrame++
    } else {
      currentFrame = 0
    }

    this._updateBackground(currentFrame)
  }

  _updateBackground(currentFrame) {

    this.setState({
      currentFrame: currentFrame,
    })
  }

  _mouseEnter() {
    this._cycleImage()

    this.interval = setInterval(() => {
      this._cycleImage()
    }, 600)
  }

  _mouseLeave() {
    clearInterval(this.interval)
  }

  componentDidMount() {
    this._randomizeImage()
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <Thumbnail
        onMouseEnter={this._mouseEnter}
        onMouseLeave={this._mouseLeave}
        onTouchStart={this._mouseEnter}
        onTouchEnd={this._mouseLeave}
      >
        <Link to={this.state.project.frontmatter.path}>
          <ProjectImage position={this.state.currentFrame * (100 / this.state.frames)}>
            <GatsbyImage
              image={this.state.project.frontmatter.thumbnail.childImageSharp.gatsbyImageData}
              alt={this.state.project.frontmatter.title}
              style={{
                width: `auto`,
                height: `100%`,
                position: `absolute`
              }}
            />
          </ProjectImage>
          <ProjectMeta>
            <ProjectTitle>{this.state.project.frontmatter.title}</ProjectTitle>
            <ProjectType>{this.state.project.frontmatter.type}</ProjectType>
          </ProjectMeta>
        </Link>
      </Thumbnail>
    )
  }
}

export default ProjectThumbnail
