import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <h1>About {data.site.siteMetadata.title}</h1>
    <p>
    The  Enterprise Knowledge Graph Foundation (EKGF) is a non-profit trade organization serving as the authoritative source of standards, 
    best practices and open source components for organizations that deploy an enterprise knowledge graph.  
    The Foundation establishes a collaborative community and builds the marketplace for related services, products and datasets.

    </p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`