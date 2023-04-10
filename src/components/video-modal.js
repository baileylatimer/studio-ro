import React from 'react';
import ReactModal from 'react-modal';

const VideoModal = ({ isOpen, closeModal, videoUrl }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Video Modal"
    >
      {/* Render the video using the videoUrl prop */}
      <video src={videoUrl} controls />
      <button onClick={closeModal}>Close</button>
    </ReactModal>
  );
};

export default VideoModal;