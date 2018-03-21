import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import styled, { css } from "styled-components"
import { rem, hideVisually } from "polished"

import ProjectThumbnail from "../components/Project/projectThumbnail"

const Post = styled.main`
  width: 100%;
  transition: all 0.2s ease-out;
  opacity: 0;
  transform: translateY(-${rem(20)});

  &.loaded {
    opacity: 1;
    transform: none;
  }
`
const ProjectContent = styled.section`
  width: 100%;
  margin-top: ${rem(100)};

  article {
    width: 80%;
    max-width: ${rem(800)};
    margin: ${rem(60)} auto;

    iframe {
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: ${rem(48)};
    }

    p {
      font-family: ${props => props.theme.ffPrimary};
      font-size: ${rem(24)};
      line-height: 1.25;
      font-weight: 300;
      margin-bottom: ${rem(24)};
    }

    a {
      text-decoration: underline;
      transition: color 0.2s ease-out;

      &:hover {
        color: ${props => props.theme.colorGreyDark};
      }
    }
  }

  .fullwidth {
    width: 100%;
    height: auto;
  }
  
  @media ${props => props.theme.smallUp} {
    margin-top: ${rem(130)};

    article p {
      font-size: ${rem(28)};
      margin-bottom: ${rem(28)};
    }
  }
  @media ${props => props.theme.largeUp} {
    article p {
      font-size: ${rem(32)};
      margin-bottom: ${rem(32)};
    }
  }
  @media ${props => props.theme.largeUp} {
    margin-top: ${rem(150)};
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

  @media ${props => props.theme.mediumDown} {
    article:first-of-type {
      display: none;
    }
  }
`

const ProjectHeader = styled.header`
  width: 80%;
  max-width: ${rem(800)};
  margin: 0 auto ${rem(30)} auto;
`

const ProjectTitle = styled.h1`
  font-family: ${props => props.theme.ffPrimary};
  font-size: ${rem(24)};
  line-height: 1;
  font-weight: 700;
  margin: 0;

  @media ${props => props.theme.smallUp} {
    font-size: ${rem(36)};
  }

  @media ${props => props.theme.mediumUp} {
    font-size: ${rem(48)};
  } 
`

const ProjectType = styled.h2`
  font-family: ${props => props.theme.ffSecondary};
  font-size: ${rem(14)};
  line-height: 1;
  font-weight: 300;
  margin-top: ${rem(10)};

  @media ${props => props.theme.smallUp} {
    font-size: ${rem(16)};
  }

  @media ${props => props.theme.mediumUp} {
    font-size: ${rem(18)};
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
      <Post className={this.state.loadState}>
        {this.props.children}
      </Post>
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
    <div>
      <Helmet title={frontmatter.title + " — Undersight.co"} />

      <ProjectWrapper>
        <ProjectContent role="main">
          <ProjectHeader>
            <ProjectTitle>{frontmatter.title}</ProjectTitle>
            <ProjectType>{frontmatter.type}</ProjectType>
          </ProjectHeader>

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
    </div>
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