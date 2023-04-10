import React, { useState } from 'react';
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import BackgroundVideo from "./bg-video"
import VideoModal from './video-modal';

const ProjectCard  = ({ title, desc, cover, video }) => {
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
    <li className=" reveal-fx reveal-fx--translate-up">
    <button onClick={() => openModal('https://example.com/video.mp4')}>
        Open Modal
      </button>
      <VideoModal isOpen={isOpen} closeModal={closeModal} videoUrl={video} />
      <Link className=" project-card" to='/'>
        <div className="video-container">
          <BackgroundVideo video={cover}/>
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