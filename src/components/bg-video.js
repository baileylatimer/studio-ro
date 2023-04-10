import React from "react"


const BackgroundVideo= props => (
    <video
      className="background-video"
      autoPlay
      loop
      muted
      playsInline

    >
      <source src={props.video} type="video/mp4" />
    </video>
 );

export default BackgroundVideo
