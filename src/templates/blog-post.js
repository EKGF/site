/**
  This file comes from the Gatsby tutorial, it wraps around every Markdown file that it finds under src/.
  We should extend this into looking like a normal page. Probably think about multiple types of pages:
  - blog posts / articles
  - references to external articles plus review comments
  - references to external ontology sites, dataset providers and so forth (might not be Markdown based but RDF based)
  - ...
*/
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <div>
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      excerpt
    }
  }
`
