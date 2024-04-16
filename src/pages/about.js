
import React from "react"
import { useIntl } from 'gatsby-plugin-intl';
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import PageHeader from "../components/page-header"
import TextCard from "../components/text-card"
import ContactBanner from "../components/contact-banner"

import HeroVideo from "../videos/hero.mp4"

const AboutPage = () => {
  const intl = useIntl();

  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: 'about' })} />
      <PageHeader title={intl.formatMessage({ id: 'about' })}/>
      <div className="flex w-full justify-center">
        <StaticImage placeholder="blurred" src="../images/ro-about.jpg" alt="Rocio Colomer Jorda • Dance" objectFit="cover" height="1200" width="2000" />
      </div>
      <div className="flex flex-col lg:flex-row">
        <TextCard text={intl.formatMessage({ id: 'aboutPageText1' })}/>
        <TextCard text={intl.formatMessage({ id: 'aboutPageText2' })}/>
      </div>
      <ContactBanner link="/contact" title={intl.formatMessage({ id: 'contact' })}/>
    </Layout>
  );
}

export default AboutPage;
