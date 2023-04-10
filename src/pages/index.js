import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/hero"
import HomeAbout from "../components/home-about"
import HeroVideo from "../videos/hero.mp4"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <HomeAbout />
    {/* <video autoplay  loop playsinline>
      <source src={HeroVideo} type="video/mp4" />
    </video> */}

  </Layout>
)

export default IndexPage
