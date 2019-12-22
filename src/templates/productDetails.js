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
      description: { description },
      image: {
        file: { url, fileName },
      },
    } = product
    return (
      <Layout>
        {/* <div className="sticky top-0"> */}
        <div>
          <h2 className="text-center text-xl uppercase text-gray-800">{productName}</h2>
        </div>
        <div className="block md:flex">
          <div className="flex-1 text-center px-4 py-2 m-2">
            <div>
              <img src={url} className=""></img>
            </div>
          </div>
          <div className="flex-1 text-center px-4 py-2 m-2">
          <div className="text-left sm:text-center md:text-right lg:text-justify">{description}</div>
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
