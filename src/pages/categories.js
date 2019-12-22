import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
const Categories = ({ data }) => {
  const categories = data.allContentfulCategory.edges
  return (
    <Layout>
      <h1>{"Here's a list of all Categories!"}</h1>
      <div>
        {categories.map(({ node: category }) => (
          <div key={category.id}>
            <h1>{category.slug}</h1>
            <h3>{category.id}</h3>
          </div>
        ))}
        <Link to="/">Go back to the homepage</Link>
      </div>
    </Layout>
  )
}
export default Categories
export const query = graphql`
  query category {
    allContentfulCategory {
      edges {
        node {
          id
          slug
        }
      }
    }
  }  
`
