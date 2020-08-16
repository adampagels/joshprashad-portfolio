import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
const Project = ({ data }) => {
  const { title, shotWith, photo } = data.contentfulHomeGallery
  return (
    <Layout>
      <SEO title={title} />
      <div>
        <h1>{title}</h1>
        <img alt={photo.file.url} src={photo.file.url} />
        <p>{shotWith}</p>
        <Link to="/">Back to Home</Link>
      </div>
    </Layout>
  )
}
export default Project
export const pageQuery = graphql`
  query($slug: String!) {
    contentfulHomeGallery(slug: { eq: $slug }) {
      title
      slug
      shotWith
      photo {
        file {
          url
        }
      }
    }
  }
`
