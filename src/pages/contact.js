import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import PageHeader from "../components/page-header"

import HeroVideo from "../videos/hero.mp4"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <PageHeader title="Contact"/>
<div className="contact flex flex-col justify-center items-center py-24 lg:py-40">
  <a tel="+1 (323) 574-2422">+1 (323) 574-2422</a>
  <a mailto="hi@rocio.dance">hi@rocio.dance</a>
</div>

  </Layout>
)

export default ContactPage
