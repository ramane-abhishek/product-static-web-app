 import React from "react"
 import { graphql } from "gatsby"
 import * as PropTypes from "prop-types"
 import Layout from "../components/layout"
 const propTypes = {
   data: PropTypes.object.isRequired,
 }
 class CategoryTemplate extends React.Component {
   render() {
     const allProduct = this.props.data.allContentfulProduct
     console.log(allProduct)
     return (
       <Layout>
         {/* <div className="sticky top-0"> */}
         <div>Something</div>
       </Layout>
     )
   }
 }
 CategoryTemplate.propTypes = propTypes
 export default CategoryTemplate
 export const pageQuery = graphql`
    query($categoryId: String) {
        allContentfulProduct(filter: {categoryId: {elemMatch: {id: {eq: $categoryId}}}}) {
          edges {
            node {
              id
              categoryId {
                id
              }
              productId
              productName
              slug
              image {
                file {
                  url
                }
              }
            }
          }
        }
      }
      
 `
