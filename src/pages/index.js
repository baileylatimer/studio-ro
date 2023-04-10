import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/hero"
import ProjectCard from "../components/project-card"
import HomeAbout from "../components/home-about"
import HeroVideo from "../videos/hero.mp4"

import Img1 from "../images/img--01.jpg"
import Img2 from "../images/img--02.jpg"
import Img3 from "../images/img--03.jpg"
import Img4 from "../images/img--04.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <HomeAbout />
    {/* <video autoplay  loop playsinline>
      <source src={HeroVideo} type="video/mp4" />
    </video> */}
<div className="flex flex-col lg:flex-row">
  <ProjectCard title="Heels" desc="01" url="showreel" cover={Img1}/>
  <ProjectCard title="Hip hop" desc="02" url="showreel" cover={Img2}/>
</div>
{/* <div className="flex flex-col lg:flex-row">
  <ProjectCard title="Ballet" desc="03" url="showreel" cover={Img3}/>
  <ProjectCard title="Flaminco" desc="04" url="showreel" cover={Img4}/>
</div> */}

  </Layout>
)

export default IndexPage
