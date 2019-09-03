import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <form name="contact" netlify>
      <p>
        <label>
          URL <input type="url" name="url" />
        </label>
      </p>
      <p>
        <label>
          Short link <input type="text" name="short" />
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
