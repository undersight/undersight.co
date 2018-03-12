import React from 'react'
import Link from 'gatsby-link'
import styled, { css } from "styled-components"
import { rem, hideVisually } from "polished"

const Thumbnail = styled.article`
  display: flex;
  width: 100%;

  a {
    width: 100%;
  }

  &:hover div {
    background: ${props => props.theme.colorBorderLight};
  }
`
const ProjectImage = styled.article`
  width: 100%;
  height: calc(100% - 100px);
  background: no-repeat;
  background-position: 0 0;
  background-size: cover;
`

const ProjectMeta = styled.div`
  margin: 0;
  display: flex;
  padding: ${rem(36)} ${rem(30)};
  border-right: 1px solid ${props => props.theme.colorBorderLight};
`

const ProjectTitle = styled.h1`
  font-family: ${props => props.theme.ffPrimary};
  font-size: ${rem(28)};
  line-height: 1;
  font-weight: 500;
  margin: 0;
  width: 50%;
`

const ProjectType = styled.h2`
  font-family: ${props => props.theme.ffSecondary};
  font-size: ${rem(14)};
  line-height: ${rem(28)};
  font-weight: 300;
  margin: 0;
  width: 50%;
  text-align: right;
`

class ProjectThumbnail extends React.Component {
  constructor(props) {
    super()

    this.state = {
      project: props.project
    }
  }

  render() {
    return (
      <Thumbnail>
        <Link to={this.state.project.frontmatter.path}>
          <ProjectImage style={ { backgroundImage: `url(${this.state.project.frontmatter.thumbnail.publicURL})` }} />
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
