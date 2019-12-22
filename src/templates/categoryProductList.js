// import React from "react"
// import { graphql } from "gatsby"
// import * as PropTypes from "prop-types"
// import Layout from "../components/layout"

// const propTypes = {
//   data: PropTypes.object.isRequired,
// }

// class CategoryTemplate extends React.Component {
//   render() {
//     const category = this.props.data.contentfulProduct

//     console.log(category)

//     return (
//       <Layout>
//         {/* <div className="sticky top-0"> */}
//         <div>Something</div>
//       </Layout>
//     )
//   }
// }

// CategoryTemplate.propTypes = propTypes

// export default CategoryTemplate

// export const pageQuery = graphql`
//   query($category: String!) {
//     contentfulProduct(category: { eq: $category }) {
//       productId
//       productName
//       category
//     }
//   }
// `
