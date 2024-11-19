import React from "react";

const VideoPlayer = ({ src, title }) => {
  return (
    <div className="video-player">
      <h3>{title}</h3>
      <video controls width="100%" height="auto">
        <source src={src} type="video/mp4" />
        Votre navigateur ne prend pas en charge la vidéo.
      </video>
    </div>
  );
};

export default VideoPlayer;
