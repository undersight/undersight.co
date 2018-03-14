import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import styled, { css } from "styled-components"
import { rem, hideVisually } from "polished"

const PostContent = styled.section`
  width: 100%;

  header {
    width: 80%;
    max-width: ${rem(800)};
    margin: 0 auto ${rem(30)} auto;
  }

  h1 {
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
  }

  h2 {
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
  }

  article {
    width: 80%;
    max-width: ${rem(800)};
    margin: ${rem(60)} auto;

    p {
      font-family: ${props => props.theme.ffPrimary};
      font-size: ${rem(24)};
      line-height: 1.25;
      font-weight: 300;
      margin-bottom: ${rem(24)};
    
      @media ${props => props.theme.smallUp} {
        font-size: ${rem(28)};
      margin-bottom: ${rem(28)};
      }

      @media ${props => props.theme.mediumUp} {
        font-size: ${rem(32)};
        margin-bottom: ${rem(32)};
      }
    }
  }
`

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <PostContent role="main">
        <header>
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.type}</h2>
        </header>

        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
    </PostContent>
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
      }
    }
  }
`;