import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import PageHeader from "../../components/page-header"
import ProjectCard from "../../components/project-card"
import ContactBanner from "../../components/contact-banner"
import Btn from "../../components/btn"

import Heels2 from "../../videos/heels-2.mp4"
import HipHop2 from "../../videos/hip-hop-2.mp4"

import Video1 from "../../videos/video-1.mp4"
import Video2 from "../../videos/video-2.mp4"
import Video3 from "../../videos/video-3.mp4"
import Video4 from "../../videos/video-4.mp4"

import Heels from "../../videos/heels.mp4"
import HipHop from "../../videos/hip-hop.mp4"

import Hh1 from "../../videos/hh-001.mp4"
import Hh2 from "../../videos/video-2.mp4"
import Hh3 from "../../videos/hh-003.mp4"
import Hh4 from "../../videos/hh-004.mp4"
import Hh5 from "../../videos/hh-005.mp4"
import Hh6 from "../../videos/hh-006.mp4"
import Hh7 from "../../videos/hh-007.mp4"

import Hhs1 from "../../videos/hhs-01.mp4"
import Hhs2 from "../../videos/hhs-02.mp4"
import Hhs3 from "../../videos/hhs-03.mp4"
import Hhs4 from "../../videos/hhs-04.mp4"
import Hhs5 from "../../videos/hhs-05.mp4"
import Hhs6 from "../../videos/hhs-06.mp4"
import Hhs7 from "../../videos/hhs-07.mp4"

const ShowreelPage = () => (
  <Layout>
    <SEO title="Heels | Showreel" />
<PageHeader title="Showreel"/>



<div className="flex w-full justify-center mb-8">
  <Btn link="/showreel/all" text="All" type="btn--ghost mr-4"/>
  <Btn link="/showreel/heels" text="Heels" type=" mr-4"/>
  <Btn link="/showreel/commercial" text="Commercial"  type="btn--ghost "/>
</div>

<div className="flex flex-col lg:flex-row ">
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