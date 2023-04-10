import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/hero"
import HeroVideo from "../videos/hero.mp4"

const AboutPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />

    {/* <video autoplay  loop playsinline>
      <source src={HeroVideo} type="video/mp4" />
    </video> */}

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        alt="gatsby astronaut"
      />
    </div>
    <p><Link to="/page-2/">Go to page 2</Link></p>
    <p><Link to="/using-typescript/">Go to "Using TypeScript"</Link></p>
  </Layout>
)

export default AboutPage
