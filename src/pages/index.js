import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import ProjectGrid from '../components/Project/projectGrid'
import ProjectThumbnail from '../components/Project/projectThumbnail'

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges.map((edge) => (
    <>
      <Helmet
        title="Undersight.co"
        meta={[
          { name: 'name', content: 'Undersight.co' },
          {
            name: 'description',
            content:
              'Undersight.co is the digital playground of Eduardo Nunes. Designer & creative developer from Portugal.',
          },
          {
            name: 'keywords',
            content:
              'undersight, design, eduardo nunes, Web, Frontendelopment, frontend, graphic',
          },
          { name: 'image', content: '/images/og.png' },
          { property: 'og:type', content: 'website' },
          { property: 'og:site_name', content: 'Undersight.co' },
          { property: 'og:title', content: 'Undersight.co' },
          {
            property: 'og:description',
            content:
              'Undersight.co is the digital playground of Eduardo Nunes. Designer & creative developer from Portugal.',
          },
          {
            property: 'og:image',
            content: 'https://www.undersight.co/images/og.png',
          },
          {
            property: 'og:url',
            content:
              'https://www.undersight.co',
          },
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Undersight.co' },
          {
            name: 'twitter:description',
            content:
              'Undersight.co is the digital playground of Eduardo Nunes. Designer & creative developer from Portugal.',
          },
          {
            name: 'twitter:image:src',
            content: 'https://www.undersight.co/images/og.png',
          },
          { name: 'twitter:site', content: '@undersight_co' },
          { name: 'twitter:creator', content: '@undersight_co' },
          { itemprop: 'name', content: 'Undersight.co' },
          {
            itemprop: 'description',
            content:
              'Undersight.co is the digital playground of Eduardo Nunes. Designer & creative developer from Portugal.',
          },
          {
            itemprop: 'image',
            content: 'https://www.undersight.co/images/og.png',
          },
        ]}
      ></Helmet>
    <ProjectThumbnail key={edge.node.id} project={edge.node} />
    </>
  ))

  return <ProjectGrid>{Posts}</ProjectGrid>
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
`
