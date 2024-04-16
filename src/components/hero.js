import React from "react"
import BackgroundVideo from "./bg-video"
import Video from "../videos/hero-vid.mp4"

const Hero = props => (
  
<div class="hero">
<BackgroundVideo video={Video}/>
<div className="overlay-bottom"></div>
<h1 className="text-xxl text-white ro">RO</h1>
<h1 className="text-xxl text-white cio">CIO</h1>
<p className="hero-desc text-white ">Rocio Colomer Jorda has 15 years of dance experience. With influences from her home country of spain, she now teaches in San Diego, CA.</p>
</div>
);

export default Hero