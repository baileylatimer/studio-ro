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
  </Layout>
)

export default ContactPage
