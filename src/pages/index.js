import React from 'react'
import { graphql } from 'gatsby'

import ProjectGrid from '../components/Project/projectGrid'
import ProjectThumbnail from '../components/Project/projectThumbnail'

const IndexPage = ({ data: { allMarkdownRemark: { edges } } }) => {
  const Posts = edges
    .map(edge => <ProjectThumbnail key={edge.node.id} project={edge.node} />);

  return(
    <ProjectGrid>
      {Posts}
    </ProjectGrid>
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