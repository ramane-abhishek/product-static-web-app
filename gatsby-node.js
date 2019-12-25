const path = require(`path`)
const slash = require(`slash`)
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  // we use the provided allContentfulBlogPost query to fetch the data from Contentful
  return graphql(
    `
      {
        allContentfulProduct {
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
        console.log("Error retrieving contentful Product data", result.errors)
      }
      console.log(JSON.stringify(result))

      // Resolve the paths to our template
      const productDetailsTemplate = path.resolve(
        "./src/templates/productDetails.js"
      )
      // Then for each result we create a page.
      result.data.allContentfulProduct.edges.forEach(edge => {
        createPage({
          path: `/products/${edge.node.slug}/`,
          component: slash(productDetailsTemplate),
          context: {
            slug: edge.node.slug,
            id: edge.node.id,
          },
        })
      })
    })
    .then(
      graphql(`   
        {
          allContentfulCategory {
            edges {
              node {
                id
                slug
              }
            }
          }
        }`)
        .then(result=>{
          if(result.error){
            console.log("Error retrieving contentful Product data", result.errors)
          }
          console.log(JSON.stringify(result))
          // Resolve the paths to our template
          const categoryProductListTemplate = path.resolve(
            "./src/templates/categoryProductList.js"
          )
          // Then for each result we create a page.
          result.data.allContentfulCategory.edges.forEach(edge => {
            createPage({
              path: `/category/${edge.node.slug}/`,
              component: slash(categoryProductListTemplate),
              context: {
                slug: edge.node.slug,
                id: edge.node.id,
              },
            })
          })
        })
    )
    .catch(error => {
      console.log("Error retrieving contentful data", error)
    })
}
