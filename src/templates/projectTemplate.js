import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import styled, { css } from "styled-components"
import { rem, hideVisually } from "polished"

import ProjectContent from "../components/Project/projectContent"
import ProjectThumbnail from "../components/Project/projectThumbnail"

const Project = styled.main`
  width: 100%;
  transition: all 0.2s ease-out;
  opacity: 0;
  transform: translateY(-${rem(20)});

  &.loading {
    opacity: 0;
    transform: translateY(-${rem(20)});
  }

  &.loaded {
    opacity: 1;
    transform: none;
  }
`
const ProjectNavigation = styled.nav`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: calc(100vw + 80px);

  @media ${props => props.theme.mediumUp} {
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: calc(50vw + 100px);
  }
`

class ProjectWrapper extends React.Component {
  constructor() {
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
      <Project className={this.state.loadState}>
        {this.props.children}
      </Project>
    )
  }
}

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
  pathContext
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  const { next, prev } = pathContext;

  return (
    <ProjectWrapper>
      <ProjectContent role="main">
        <header>
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.type}</h2>
        </header>

        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </ProjectContent>

      <ProjectNavigation>
        {prev && (
          <ProjectThumbnail key={prev.id} project={prev} />
        )}
        {next && (
          <ProjectThumbnail key={next.id} project={next} />
        )}
      </ProjectNavigation>
    </ProjectWrapper>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        type
        order
      }
    }
  }
`;