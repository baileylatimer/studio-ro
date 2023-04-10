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

const ShowreelPage = () => (
  <Layout>
    <SEO title="Showreel" />
<PageHeader title="Showreel"/>

<div className="flex flex-col lg:flex-row  lg:mt-20">
  <ProjectCard title="21 questions" desc="50 Cent" cover={Img1}/>
  <ProjectCard title="Can I" desc="Drake" cover={Img2}/>
</div>
<div className="flex flex-col lg:flex-row">
  <ProjectCard title="Titi Mi Pregunto" desc="Bad Bunny" cover={Img3}/>
  <ProjectCard title="Mi Amor" desc="Wade" cover={Img4}/>
</div>

  </Layout>
)

export default ShowreelPage
