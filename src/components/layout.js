/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
      <span
         style={{
          backgroundImage: "url('https://image.tmdb.org/t/p/original/xRWht48C2V8XNfzvPehyClOvDni.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: "0.4",
          position: "fixed",
          width: "100%",
          height: "100%"
         }}
      >
      </span>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `200px`,
            paddingTop: 0,
            position: "relative",
            zIndex: "2",
        }}
        >
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
