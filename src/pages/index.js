import React from 'react'
import Link from 'gatsby-link'
import styled, { css } from "styled-components"
import { rem, hideVisually } from "polished"

import ProjectThumbnail from "../components/Project/project-thumbnail"

const Projects = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: calc(100vw + 80px);

  @media ${props => props.theme.mediumUp} {
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: calc(50vw + 100px);
  }

  @media ${props => props.theme.xxlargeUp} {
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: calc(100vw / 3 + 100px);
  }

  @media ${props => props.theme.xxxlargeUp} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-rows: calc(25vw + 100px);
  }
`

const IndexPage = ({ data: { allMarkdownRemark: { edges } } }) => {
  const Posts = edges
    .map(edge => <ProjectThumbnail key={edge.node.id} project={edge.node} />);

  return(
    <Projects>
      {Posts}
    </Projects>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___order] }) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            type
            thumbnail {
              publicURL
            }
          }
        }
      }
    }
  }
`;