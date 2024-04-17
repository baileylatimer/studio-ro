import React from "react"
import { useIntl } from 'gatsby-plugin-intl';
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import PageHeader from "../../components/page-header"
import ProjectCard from "../../components/project-card"
import Btn from "../../components/btn"
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
    <SEO title="Commercial | Showreel" />
<PageHeader title="Showreel"/>

<div className="flex w-full justify-center mb-8">
  <Btn link="/showreel/all" text="All" type="btn--ghost mr-4"/>
  <Btn link="/showreel/heels" text="Heels" type="btn--ghost mr-4"/>
  <Btn link="/showreel/commerical" text={intl.formatMessage({ id: 'commercial' })}  type=" "/>
</div>

<div className="flex flex-col lg:flex-row ">
<ProjectCard cover={WomanizerShort} video={Womanizer} videoTitle="BrittanySpears_Womanizer" title="Womanizer" desc="Brittany Spears" tag="hip-hop" teacher="Briony Albert" location="Tmilly TV"/>
<ProjectCard cover={Hhs3} video={Hh5} videoTitle="Rosalia_A-PALE" title="A Pale" desc="Rosalia" tag="heels"  teacher="Elizabeth Haldo" location="Studio FX"/>
  {/* <ProjectCard cover={Hhs4} video={Hh1} videoTitle="50-Cent_21-Questions" title="21 Questions" desc="50 Cent" tag="heels"/> */}
</div>
<div className="flex flex-col lg:flex-row ">

  {/* <ProjectCard cover={Hhs2} video={Hh3} videoTitle="Chingy_Fly-Like-Me" title="Fly Like Me" desc="Chingy" tag="heels"/> */}
  <ProjectCard cover={Hhs1} video={Hh6} videoTitle="BowWow_Let-Me-Hold-You" title="Let Me Hold You" desc="Bow Wow" tag="heels"  teacher="Elizabeth Haldo" location="Studio FX"/>
</div>
{/* <div className="flex flex-col lg:flex-row justify-end ">

  <ProjectCard cover={Hhs5} video={Hh4} videoTitle="Jealousy-Lies_Elliot-Trent" title="Jealousy & Lies" desc="Elliot Trent" tag="heels"/>
</div> */}


  </Layout>
  );
}
export default ShowreelPage