import React from "react"
import { useIntl } from 'gatsby-plugin-intl';
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import PageHeader from "../../components/page-header"
import ProjectCard from "../../components/project-card"

import Btn from "../../components/btn"
import Heels2 from "../../videos/heels-2.mp4"
import HipHop2 from "../../videos/hip-hop-2.mp4"
import Video1 from "../../videos/video-1.mp4"
import Video2 from "../../videos/video-2.mp4"
import Video3 from "../../videos/video-3.mp4"
import Heels from "../../videos/heels.mp4"
import Hh5 from "../../videos/hh-005.mp4"
import Hh6 from "../../videos/hh-006.mp4"
import Hhs1 from "../../videos/hhs-01.mp4"
import Hhs3 from "../../videos/hhs-03.mp4"
import Womanizer from "../../videos/womanizer.mp4"
import WomanizerShort from "../../videos/womanizer-short.mp4"

const ShowreelPage = () => {
  const intl = useIntl();

  return (
  
  <Layout>
    <SEO title="All | Showreel" />
<PageHeader title="Showreel"/>

<div className="flex w-full justify-center mb-8">
  <Btn link="/showreel/all" text="All" type=" mr-4"/>
  <Btn link="/showreel/heels" text="Heels" type="btn--ghost mr-4"/>
  <Btn link="/showreel/commercial" text={intl.formatMessage({ id: 'commercial' })}  type="btn--ghost "/>
</div>


<div className="flex flex-col lg:flex-row ">
<ProjectCard cover={WomanizerShort} video={Womanizer} videoTitle="BrittanySpears_Womanizer" title="Womanizer" desc="Brittany Spears" tag="hip-hop" teacher="Briony Albert" location="Tmilly TV"/>
  <ProjectCard  cover={HipHop2} video={Video3} videoTitle="Nicki-Minaj_Super-Freaky-Girl" title="Super Freaky Girl" desc="Nicki Minaj" tag="hip-hop" teacher="Hector Kramer" location="Limitless Studio"/>


</div>
<div className="flex flex-col lg:flex-row">
<ProjectCard cover={Heels2} video={Video1} videoTitle="Rosalia_LA-COMBI-VERSACE" title="LA COMBI VERSACE" desc="Rosalia" tag="heels" teacher="Rocio Colomer Jorda" location="Escola de Dansa Muro"/>
  <ProjectCard cover={Hhs3} video={Hh5} videoTitle="Rosalia_A-PALE" title="A Palé" desc="Rosalia" tag="heels"  teacher="Elizabeth Haldo" location="Studio FX"/>

</div>


<div className="flex flex-col lg:flex-row ">

<ProjectCard cover={Heels} video={Video2} videoTitle="Beyonce_Im-That-Girl" title="I'm That Girl" desc="Beyonce" tag="heels" teacher="Hector Kramer" location="Limitless Studio"/>
  <ProjectCard cover={Hhs1} video={Hh6} videoTitle="BowWow_Let-Me-Hold-You" title="Let Me Hold You" desc="Bow Wow" tag="heels"  teacher="Dylan Banares" location="Studio FX"/>
  {/* <ProjectCard cover={Hhs7} video={Hh7} videoTitle="Missy-Elliot_JOY" title="JOY" desc="Missy Elliot" tag="heels"/> */}
</div>
<div className="flex flex-col lg:flex-row ">
  {/* <ProjectCard cover={Hhs2} video={Hh3} videoTitle="Chingy_Fly-Like-Me" title="Fly Like Me" desc="Chingy" tag="heels"/> */}

</div>
{/* <div className="flex flex-col lg:flex-row ">
<ProjectCard  cover={HipHop} video={Video4} videoTitle="Dua-Lipa_FEVER" title="Fever" desc="Dua Lipa"/> 
  <ProjectCard cover={Hhs5} video={Hh4} videoTitle="Jealousy-Lies_Elliot-Trent" title="Jealousy & Lies" desc="Elliot Trent" tag="heels"/>
</div> */}


  </Layout>
  );
}
export default ShowreelPage