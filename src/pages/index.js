import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Content from "../components/content";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div>
      <Content />
    </div>
    <Link to="/movie/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
