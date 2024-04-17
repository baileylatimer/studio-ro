import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useIntl } from 'gatsby-plugin-intl';
import Hero from "../components/hero"
import ProjectCardHome from "../components/project-card-home"
import HomeAbout from "../components/home-about"


import Heels from "../videos/heels.mp4"
import WomanizerShort from "../videos/womanizer-short.mp4"



const IndexPage = () => {
  const intl = useIntl();

  return (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <HomeAbout />
<div className="flex flex-col lg:flex-row  lg:mt-20">
  <ProjectCardHome link='/showreel/heels' cover={Heels}  title="Heels" desc="01"/>
  <ProjectCardHome link='/showreel/commercial' cover={WomanizerShort}  title={intl.formatMessage({ id: 'commercial' })}  desc="02"/>
</div>


  </Layout>
  );
}

export default IndexPage
