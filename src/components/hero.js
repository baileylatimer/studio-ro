import React from "react";
import { useIntl } from 'gatsby-plugin-intl';
import BackgroundVideo from "./bg-video";
import Video from "../videos/hero-vid.mp4";

const Hero = props => {
  const intl = useIntl();  // Initialize the internationalization hook
  console.log(intl);  // Check the intl object

  return (
    <div className="hero">
      <BackgroundVideo video={Video}/>
      <div className="overlay-bottom"></div>
      <h1 className="text-xxl text-white ro">RO</h1>
      <h1 className="text-xxl text-white cio">CIO</h1>
      <p className="hero-desc text-white ">
        {intl.formatMessage({ id: 'heroDescription' })}
      </p>
    </div>
  );
};

export default Hero;
