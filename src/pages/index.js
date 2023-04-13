import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/hero"
import ProjectCard from "../components/project-card"
import HomeAbout from "../components/home-about"

import Heels2 from "../videos/heels-2.mp4"

import Heels from "../videos/heels.mp4"



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <HomeAbout />
<div className="flex flex-col lg:flex-row  lg:mt-20">
  <ProjectCard link='showreel' cover={Heels2} videoTitle="Rosalia_LA-COMBI-VERSACE" title="Heels" desc="01"/>
  <ProjectCard link='showreel' cover={Heels} videoTitle="Beyonce_Im-That-Girl" title="Hip Hop" desc="02"/>
</div>


  </Layout>
)

export default IndexPage
