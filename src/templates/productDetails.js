import React from "react"
import { graphql } from "gatsby"
import * as PropTypes from "prop-types"
import Layout from "../components/layout"

const propTypes = {
  data: PropTypes.object.isRequired,
}

class ProductTemplate extends React.Component {
  render() {
    const product = this.props.data.contentfulProduct
    console.log("this is something", JSON.stringify(product))

    // const {
    //   productName: { productName },
    //   productDescription,
    //   price,
    //   image,
    //   brand,
    //   categories,
    // } = product
    return (
      <Layout>
        <span>{JSON.stringify(product)}</span>
      </Layout>
    )
  }
}

ProductTemplate.propTypes = propTypes

export default ProductTemplate

export const pageQuery = graphql`
  query($id: String!) {
    contentfulProduct(id: { eq: $id }) {
      productName
      description {
        description
      }
      category
    }
  }
`
