import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import PageHeader from "../components/page-header"

import HeroVideo from "../videos/hero.mp4"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <PageHeader title="About"/>
  </Layout>
)

export default AboutPage
