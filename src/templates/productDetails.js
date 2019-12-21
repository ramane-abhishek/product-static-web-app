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
          <h2>{productName}</h2>
        </div>
        <div class="block md:flex">
          <div class="flex-1 text-center px-4 py-2 m-2">
            <div>
              <img src={url} className=""></img>
            </div>
          </div>
          <div class="flex-1 text-center px-4 py-2 m-2">
          <div>{description}</div>
          </div>
        </div>
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
