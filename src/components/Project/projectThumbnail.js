import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { rem } from 'polished'

const Thumbnail = styled.article`
  overflow: hidden;

  a {
    width: 100%;
  }

  &:hover div {
    background: ${props => props.theme.colorBorderLighter};
  }
`

const ProjectImage = styled.div`
  width: 100%;
  height: calc(100% - 70px);
  overflow: hidden;
  position: relative;

  @media ${props => props.theme.mediumUp} {
    height: calc(100% - 100px);
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: auto;
  }
`

const ProjectMeta = styled.div`
  margin: 0;
  display: flex;
  padding: ${rem(26)} ${rem(20)};
  padding-left: max(${rem(20)}, env(safe-area-inset-left));
  padding-right: max(${rem(20)}, env(safe-area-inset-right));

  @media ${props => props.theme.mediumUp} {
    padding: ${rem(36)} ${rem(30)};
    padding-left: max(${rem(30)}, env(safe-area-inset-left));
    padding-right: max(${rem(30)}, env(safe-area-inset-right));
    border-right: 1px solid ${props => props.theme.colorBorderLight};
  }
`

const ProjectTitle = styled.h1`
  font-family: ${props => props.theme.ffPrimary};
  font-size: ${rem(20)};
  line-height: 1;
  font-weight: 500;
  margin: 0;
  width: 50%;

  @media ${props => props.theme.smallUp} {
    font-size: ${rem(28)};
  }

  @media ${props => props.theme.mediumUp} {
    font-size: ${rem(32)};
  }
`

const ProjectType = styled.h2`
  font-family: ${props => props.theme.ffSecondary};
  font-size: ${rem(12)};
  line-height: ${rem(20)};
  font-weight: 300;
  margin: 0;
  width: 50%;
  text-align: right;

  @media ${props => props.theme.smallUp} {
    font-size: ${rem(14)};
    line-height: ${rem(28)};
  }

  @media ${props => props.theme.mediumUp} {
    line-height: ${rem(32)};
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
    let img = new Image()
    img.src = this.state.project.frontmatter.thumbnail.publicURL
    img.onload = () => {
      let imageHeight = img.height
      let imageWidth = img.width

      const frameCount = Math.floor(imageWidth / imageHeight)
      const startFrame = Math.floor(Math.random() * frameCount)

      this.setState({
        frames: frameCount,
        imageWidth: imageWidth,
        currentFrame: startFrame,
      })
    }
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
          <ProjectImage>
            <img
              style={{
                transform: `translateX(-${this.state.currentFrame *
                  (100 / this.state.frames)}%)`,
              }}
              src={this.state.project.frontmatter.thumbnail.publicURL}
              alt="{this.state.project.frontmatter.title}"
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
