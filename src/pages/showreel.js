import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import PageHeader from "../components/page-header"
import ProjectCard from "../components/project-card"

import Heels2 from "../videos/heels-2.mp4"
import HipHop2 from "../videos/hip-hop-2.mp4"

import Video1 from "../videos/video-1.mp4"
import Video2 from "../videos/video-2.mp4"
import Video3 from "../videos/video-3.mp4"
import Video4 from "../videos/video-4.mp4"

import Heels from "../videos/heels.mp4"
import HipHop from "../videos/hip-hop.mp4"

const ShowreelPage = () => (
  <Layout>
    <SEO title="Showreel" />
<PageHeader title="Showreel"/>

<div className="flex flex-col lg:flex-row  lg:mt-20">
  <ProjectCard cover={Heels2} video={Video1} videoTitle="Rosalia_LA-COMBI-VERSACE" title="LA COMBI VERSACE" desc="Rosalia" tag="heels"/>
  <ProjectCard cover={Heels} video={Video2} videoTitle="Beyonce_Im-That-Girl" title="I'm That Girl" desc="Beyonce" tag="heels"/>
</div>
<div className="flex flex-col lg:flex-row">
  <ProjectCard  cover={HipHop2} video={Video3} videoTitle="Nicki-Minaj_Super-Freaky-Girl" title="Super Freaky Girl" desc="Nicki Minaj" tag="hip-hop"/>
  <ProjectCard  cover={HipHop} video={Video4} videoTitle="Dua-Lipa_FEVER" title="Fever" desc="Dua Lipa"/> 
</div>

  </Layout>
)

export default ShowreelPage