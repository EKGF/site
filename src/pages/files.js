import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link } from "gatsby-theme-material-ui";

const convertFileNameToUrl = node =>
  node.relativePath === 'pages/index.js' ? '/' : 
  node.relativePath.replace("pages/", "").replace("\.js", "").replace("\.md", "")

const cellForFileName = node => {
  return node.relativePath.startsWith('pages/') ?
    <td><Link to={convertFileNameToUrl(node)}>{node.relativePath}</Link></td> :
    <td>{node.relativePath}</td>
}

export default ({ data }) => {
  //console.log(data)
  return (
    <Layout>
      <div>
        <h1>All Files at this site:</h1>
        <table>
          <thead>
            <tr>
              <th>Path</th>
              <th>Size</th>
              <th>Type</th>
              <th>Created</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges.map(({ node }, index) => (
              <tr key={index}>
                {cellForFileName(node)}
                <td>{node.prettySize}</td>
                <td>{node.extension}</td>
                <td>{node.birthTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`
