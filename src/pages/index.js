import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/hero"
import ProjectCardHome from "../components/project-card-home"
import HomeAbout from "../components/home-about"

import Heels2 from "../videos/heels-2.mp4"

import Heels from "../videos/heels.mp4"



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <HomeAbout />
<div className="flex flex-col lg:flex-row  lg:mt-20">
  <ProjectCardHome link='/showreel/heels' cover={Heels2}  title="Heels" desc="01"/>
  <ProjectCardHome link='/showreel/hip-hop' cover={Heels}  title="Hip Hop" desc="02"/>
</div>


  </Layout>
)

export default IndexPage
