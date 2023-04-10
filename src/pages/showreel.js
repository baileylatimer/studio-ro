import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import PageHeader from "../components/page-header"
import ProjectCard from "../components/project-card"

import Img1 from "../images/img--01.jpg"
import Img2 from "../images/img--02.jpg"
import Img3 from "../images/img--03.jpg"
import Img4 from "../images/img--04.jpg"
import Heels from "../videos/heels.mp4"
import HipHop from "../videos/hip-hop.mp4"
import Heels2 from "../videos/heels-2.mp4"
import HipHop2 from "../videos/hip-hop-2.mp4"

const ShowreelPage = () => (
  <Layout>
    <SEO title="Showreel" />
<PageHeader title="Showreel"/>

<div className="flex flex-col lg:flex-row  lg:mt-20">
  <ProjectCard video={Heels2} title="21 questions" desc="50 Cent" cover={Img1}/>
  <ProjectCard video={HipHop2} title="Can I" desc="Drake" cover={Img2}/>
</div>
<div className="flex flex-col lg:flex-row">
  <ProjectCard video={HipHop} title="Titi Mi Pregunto" desc="Bad Bunny" cover={Img3}/>
  <ProjectCard video={Heels} title="Mi Amor" desc="Wade" cover={Img4}/>
</div>

  </Layout>
)

export default ShowreelPage
