import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/hero"
import ProjectCard from "../components/project-card"
import HomeAbout from "../components/home-about"

import Heels2 from "../videos/heels-2.mp4"
import HipHop2 from "../videos/hip-hop-2.mp4"

import Video1 from "../videos/video-1.mp4"
import Video2 from "../videos/video-2.mp4"
import Video3 from "../videos/video-3.mp4"
import Video4 from "../videos/video-4.mp4"

import Heels from "../videos/heels.mp4"
import HipHop from "../videos/hip-hop.mp4"


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
