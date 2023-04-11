import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import PageHeader from "../components/page-header"
import ProjectCard from "../components/project-card"

// import Img1 from "../images/img--01.jpg"
// import Img2 from "../images/img--02.jpg"
// import Img3 from "../images/img--03.jpg"
// import Img4 from "../images/img--04.jpg"
// import Heels from "../videos/heels.mp4"
// import HipHop from "../videos/hip-hop.mp4"
// import Heels2 from "../videos/heels-2.mp4"
// import HipHop2 from "../videos/hip-hop-2.mp4"
// import Video1 from "../videos/video-1.mp4"
// import Video2 from "../videos/video-2.mp4"
// import Video3 from "../videos/video-3.mp4"
// import Video4 from "../videos/video-4.mp4"

const ShowreelPage = () => (
  <Layout>
    <SEO title="Showreel" />
<PageHeader title="Showreel"/>

{/* <div className="flex flex-col lg:flex-row  lg:mt-20">
  <ProjectCard cover={Heels2} video={Video1} title="21 questions" desc="50 Cent"/>
  <ProjectCard cover={Heels} video={Video2} title="Can I" desc="Drake"/>
</div>
<div className="flex flex-col lg:flex-row">
  <ProjectCard  cover={HipHop2} video={Video3} title="Titi Mi Pregunto" desc="Bad Bunny"/>
  <ProjectCard  cover={HipHop} video={Video4} title="Mi Amor" desc="Wade"/> 
</div> */}

  </Layout>
)

export default ShowreelPage
