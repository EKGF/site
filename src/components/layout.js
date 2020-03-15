/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const headerTitle = (data, subTitle) => {
  if (subTitle) {
    return data.site.siteMetadata.shortTitle + ' - ' + subTitle
  }
  return data.site.siteMetadata.title
}

const Layout = ({ children, subTitle }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title,
              shortTitle
            }
          }
        }
      `}
      render={data => (
        <div style={{ minHeight: '100vh', backgroundColor: '#FFF' }}>
          <Header siteTitle={headerTitle(data, subTitle)} />
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 100,
            }}
          >
            <main>{children}</main>
            <footer style={{ paddingTop: 10 }}>
              © {new Date().getFullYear()}, Enterprise Knowledge Graph Foundation
            </footer>
          </div>
        </div>
      )}
    />
  )
}

Layout.defaultProps = {
  subTitle: ''
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  subTitle: PropTypes.string
}

export default Layout
