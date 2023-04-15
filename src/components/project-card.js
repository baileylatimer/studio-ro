import React, { useState } from 'react';
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import BackgroundVideo from "./bg-video"
import VideoModal from './video-modal';
import CustomCursor from "./cursor";

const ProjectCard  = ({ title, desc, cover, video, videoTitle, tag  }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  


  const openModal = (url) => {
    setIsOpen(true);
    setVideoUrl(url);
  };

  const closeModal = () => {
    setIsOpen(false);
    setVideoUrl('');
  };

  
  return (
    <li className={tag + " relative"}  >
    <button className="video-trigger" onClick={() => openModal('https://example.com/video.mp4')}>
        Open Modal
      </button>
      <VideoModal isOpen={isOpen} closeModal={closeModal} videoUrl={video} videoTitle={videoTitle}  />
      <Link className=" project-card">
        <div className="video-container ">
          <BackgroundVideo video={cover}/>
          <div className="video-wrapper">
            <div className="video-content">
              <div className="flex items-center play-btn pt-4 pl-4">
                <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 10L0.499999 19.5263L0.5 0.47372L17 10Z" fill="#DFDFDF"/>
                </svg>

                  <p className="ml-4 text-white">Watch reel</p>
              </div>
            </div>
          </div>
          <div className="overlay-top"></div>
        </div>
        <div class="flex justify-between my-4 mx-4">
            <h1 class="">{title}</h1>
            <h1 className="lg:mt-0 color-contrast-medium"id="card-title-2">{desc}</h1>
        </div>
        </Link>

    </li>
);
};

export default ProjectCard