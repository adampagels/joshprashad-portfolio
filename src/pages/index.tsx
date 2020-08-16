import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }: { data: any }) => {
  const gallery = data.allContentfulHomeGallery.edges

  return (
    <Layout>
      <SEO title="Home" />
      <div
        style={{
          height: "100%",
          width: "90%",
          display: "flex",
          flexWrap: "wrap",
          margin: "auto",
        }}
      >
        {gallery.map(({ node: photo }: { node: any }) => (
          // <Link to={`/${photo.slug}`} style={{
          //   height: "300px",
          //   flexGrow: 1,
          // }}>
          <img
            style={{
              margin: "4px",
              height: "450px",
              maxWidth: "920px",
              flexGrow: 1,
            }}
            alt={photo.photo.file.url}
            src={photo.photo.file.url}
          ></img>
          /* </Link> */
        ))}
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    allContentfulHomeGallery(sort: { fields: order }) {
      edges {
        node {
          id
          title
          slug
          photo {
            file {
              url
            }
          }
        }
      }
    }
  }
`
