import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
const Products = ({ data }) => {
  const products = data.allContentfulProduct.edges
  return (
    <Layout>
      <h1>{"Here's a list of all Products!"}</h1>
      <div>
        {products.map(({ node: product }) => (
          <div key={product.id}>
            <Link to={`/products/${product.slug}`}>{product.productName}</Link>
          </div>
        ))}
        <Link to="/">Go back to the homepage</Link>
      </div>
    </Layout>
  )
}
export default Products
export const query = graphql`
query products {
  allContentfulProduct {
    edges {
      node {
        id
        slug
        productId
        productName
      }
    }
  }
}
`
