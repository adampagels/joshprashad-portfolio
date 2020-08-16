const path = require(`path`)
const slash = require(`slash`)
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(
    `
      {
        allContentfulHomeGallery {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `
  )
    .then(result => {
      if (result.errors) {
        console.log("Error retrieving contentful data", result.errors)
      }

      const photoTemplate = path.resolve("./src/templates/photo.js")

      result.data.allContentfulHomeGallery.edges.forEach(edge => {
        createPage({
          path: `/${edge.node.slug}/`,
          component: slash(photoTemplate),
          context: {
            slug: edge.node.slug,
            id: edge.node.id,
          },
        })
      })
    })
    .catch(error => {
      console.log("Error retrieving contentful data", error)
    })
}
