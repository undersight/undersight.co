/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path");

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  switch (stage) {
    case `build-html`:
    actions.setWebpackConfig({
      loader: ("null", {
        test: /webfontloader/,
        loader: "null-loader",
      }),
    })
  }
};

exports.createPages = ({ actions, graphql }) => {
  const { createRedirect } = actions

  createRedirect({
    fromPath: `/ok`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/bore`,
  })

  const { createPage } = actions;

  const projectTemplate = path.resolve(`src/templates/projectTemplate.js`);

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___order] }
        limit: 1000
      ) {
        edges {
          node {
            html
            frontmatter {
              path
              title
              type
              order
              thumbnail {
                publicURL
              }
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(({ node }, index) => {
      const prevPost = index === 0 ? posts[posts.length-1].node : posts[index - 1].node
      const nextPost = index === posts.length - 1 ? posts[0].node : posts[index + 1].node

      createPage({
        path: node.frontmatter.path,
        component: projectTemplate,
        context: {
          prev: prevPost,
          next: nextPost
        },
      });
    });

    return posts
  });
};