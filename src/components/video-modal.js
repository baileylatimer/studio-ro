import React from 'react';
import ReactModal from 'react-modal';

const VideoModal = ({ isOpen, closeModal, videoUrl, videoTitle }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Video Modal"
      className="video-modal"
    >
            <button unselectable="on" onClick={closeModal}>{videoTitle}</button>
      {/* Render the video using the videoUrl prop */}
      <video src={videoUrl} controls />

    </ReactModal>
  );
};

export default VideoModal;