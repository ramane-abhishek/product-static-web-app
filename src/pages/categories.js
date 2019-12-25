import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
const Categories = ({ data }) => {
  const categories = data.allContentfulCategory.edges
  return (
    <Layout>
      <h1>{"Here's a list of all Categories!"}</h1>
      <div className="flex flex-wrap">
        {categories.map(({ node: category }) => (
          <Link to={`/categories/${category.slug}`}>
            <div key={category.id} className="px-2">
              <div
                key={category.id}
                className="w-full bg-gray-500 px-2 py-2 mx-2 my-2"
              >
                <div>
                  {category.categoryName}
                  <h3>{category.id}</h3>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Link to="/">Go back to the homepage</Link>
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
          categoryName
        }
      }
    }
  }
`
