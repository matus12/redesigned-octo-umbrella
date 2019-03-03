import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = (state) => (
  <Layout>
    <SEO title="Page two" />
    {console.log(state)}
    <h1>{state.location.state.value}</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
