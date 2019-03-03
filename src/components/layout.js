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
        <h1
        style={{
          position: "relative",
          zIndex: "2",
          textAlign: "center",
          paddingTop: "30px"
        }}>
          NECHAAAAAAAAAAJ
        </h1>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 1800,
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
