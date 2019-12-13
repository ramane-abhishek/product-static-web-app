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

    const {
      productName,
      category,
      description: { description },
      image: {
        file: { url, fileName },
      },
    } = product
    return (
      <Layout>
        <div>
          <h4>{productName}</h4>
        </div>
        <div>{description.description}</div>
      </Layout>
    )
  }
}

ProductTemplate.propTypes = propTypes

export default ProductTemplate

export const pageQuery = graphql`
  query($id: String!) {
    contentfulProduct(id: { eq: $id }) {
      productId
      productName
      category
      description {
        description
      }
      image {
        id
        file {
          url
          fileName
          contentType
        }
      }
    }
  }
`
