import React from "react"
import { Link, graphql } from "gatsby"
import * as PropTypes from "prop-types"
import Layout from "../components/layout"
const propTypes = {
  data: PropTypes.object.isRequired,
}
class CategoryTemplate extends React.Component {
  render() {
    const allProduct = this.props.data.allContentfulProduct.edges
    console.log(allProduct)
    return (
      <Layout>
        {/* <div className="sticky top-0"> */}
        <div>Something</div>
        <div className="flex flex-wrap">
          {allProduct.map(({ node: product }) => (
            <Link to={`/products/${product.slug}`}>
              <div key={product.id} className="px-2">
                <div
                  key={product.id}
                  className="w-full bg-gray-500 px-2 py-2 mx-2 my-2"
                >
                  <div>
                    {product.categoryName}
                    <h3>{product.id}</h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Layout>
    )
  }
}
CategoryTemplate.propTypes = propTypes
export default CategoryTemplate
export const pageQuery = graphql`
  query($categoryId: String) {
    allContentfulProduct(
      filter: { categoryId: { elemMatch: { id: { eq: $categoryId } } } }
    ) {
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
