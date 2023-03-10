import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { rem } from 'polished'
import { graphql } from 'gatsby'

import ProjectThumbnail from '../components/Project/projectThumbnail'

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
  margin-top: ${rem(40)};

  &:first-child {
    margin-top: ${rem(10)};
  }

  article {
    width: 90%;
    max-width: ${rem(740)};
    margin: ${rem(60)} auto;

    &:first-child {
      margin-top: 0;
    }

    iframe {
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: ${rem(48)};
    }

    p {
      font-family: ${(props) => props.theme.ffPrimary};
      font-feature-settings: 'dlig', 'liga', 'calt';
      font-size: ${rem(16)};
      line-height: 1.6;
      margin: 0 auto 1em auto;
      max-width: 44ch;
      letter-spacing: -0.018em;
      hyphens: none;
    }

    blockquote {
      p {
        font-style: italic;
        font-feature-settings: 'dlig', 'liga', 'calt';
        font-size: ${rem(20)};
        letter-spacing: -0.03em;

        line-height: 1.4;
        margin: 1em 0;
        max-width: 35ch;
      }
    }

    a {
      text-decoration: underline;
      transition: color 0.2s ease-out;

      &:hover {
        color: ${(props) => props.theme.colorGreyDark};
      }
    }
  }

  .video {
    width: 100%;
    height: 56.25vw;
  }

  @media ${(props) => props.theme.smallUp} {
    margin-top: ${rem(50)};

    &:first-child {
      margin-top: ${rem(20)};
    }

    article p {
      font-size: ${rem(18)};
      margin-bottom: ${rem(28)};
    }
    article blockquote p {
      font-size: ${rem(22)};
    }
  }
  @media ${(props) => props.theme.mediumUp} {
    &:first-child {
      margin-top: ${rem(50)};
    }
    article p {
      font-size: ${rem(20)};
    }
    article blockquote p {
      font-size: ${rem(24)};
    }
  }
  @media ${(props) => props.theme.largeUp} {
    &:first-child {
      margin-top: ${rem(60)};
    }

    article {
      margin: ${rem(80)} auto;
    }
    article p {
      font-size: ${rem(22)};
    }
    article blockquote p {
      font-size: ${rem(28)};
    }
  }
  @media ${(props) => props.theme.xxlargeUp} {
    &:first-child {
      margin-top: ${rem(60)};
    }

    article {
      margin: ${rem(80)} auto;
    }
    article p {
      font-size: ${rem(26)};
    }
    article blockquote p {
      font-size: ${rem(32)};
    }
  }
`

const ProjectNavigation = styled.nav`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: calc(100vw + 80px);

  @media ${(props) => props.theme.mediumUp} {
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: calc(50vw + 100px);
  }

  @media ${(props) => props.theme.mediumDown} {
    article:first-of-type {
      display: none;
    }
  }
`

const ProjectHeader = styled.header`
  width: 90%;
  max-width: 28.5em;
  margin: 0 auto ${rem(30)} auto;

  @media ${(props) => props.theme.smallUp} {
    font-size: ${rem(18)};
  }
  @media ${(props) => props.theme.mediumUp} {
    font-size: ${rem(20)};
  }
  @media ${(props) => props.theme.largeUp} {
    font-size: ${rem(22)};
  }
  @media ${(props) => props.theme.xxlargeUp} {
    font-size: ${rem(26)};
  }
`

const ProjectTitle = styled.h1`
  font-family: ${(props) => props.theme.ffPrimary};
  font-size: ${rem(24)};
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  font-weight: bold;
  margin: 0;

  @media ${(props) => props.theme.smallUp} {
    font-size: ${rem(26)};
  }

  @media ${(props) => props.theme.largeUp} {
    font-size: ${rem(32)};
`

const ProjectType = styled.h2`
  font-family: ${(props) => props.theme.ffSecondary};
  font-size: ${rem(14)};
  line-height: 1;
  font-variation-settings: 'wght' 500, 'wdth' 110;
  margin-top: ${rem(15)};

  @media ${(props) => props.theme.smallUp} {
    font-size: ${rem(16)};
  }

  @media ${(props) => props.theme.mediumUp} {
    font-size: ${rem(18)};
  }

  @media ${(props) => props.theme.xlargeUp} {
    font-size: ${rem(20)};
  }
`

class ProjectWrapper extends React.Component {
  constructor() {
    super()

    this.state = { loadState: 'loading' }
  }

  componentDidMount() {
    this.setState({ loadState: 'loaded' })
  }

  componentWillUnmount() {
    this.setState({ loadState: 'loading' })
  }

  render() {
    return <Post className={this.state.loadState}>{this.props.children}</Post>
  }
}

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
  pageContext,
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  const { next, prev } = pageContext

  return (
    <div>
      <Helmet
        title={frontmatter.title + ' — Undersight.co'}
        meta={[
          { name: 'name', content: frontmatter.title + ' — Undersight.co' },
          {
            name: 'keywords',
            content:
              'undersight, design, eduardo nunes, Web, development, frontend, graphic',
          },
          {
            name: 'image',
            content: 'https://www.undersight.co' + frontmatter.og.publicURL,
          },
          { property: 'og:type', content: 'website' },
          { property: 'og:site_name', content: 'Undersight.co' },
          { property: 'og:title', content: frontmatter.title },
          {
            property: 'og:image',
            content: 'https://www.undersight.co' + frontmatter.og.publicURL,
          },
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Undersight.co' },
          {
            name: 'twitter:image:src',
            content: 'https://www.undersight.co' + frontmatter.og.publicURL,
          },
          { name: 'twitter:site', content: '@undersightco' },
          { name: 'twitter:creator', content: '@undersightco' },
        ]}
      />

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
          {prev && <ProjectThumbnail key={prev.id} project={prev} />}
          {next && <ProjectThumbnail key={next.id} project={next} />}
        </ProjectNavigation>
      </ProjectWrapper>
    </div>
  )
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
        og {
          publicURL
        }
      }
    }
  }
`
