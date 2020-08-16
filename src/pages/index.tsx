import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../sass/pages/index.scss"

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
            className="photo"
            alt={photo.title}
            src={photo.photo.file.url}
          ></img>
          /* </Link> */
        ))}
      </div>
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
