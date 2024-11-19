
import React from "react";
import "./HomePage.scss";
import AudioPlayer from "../components/AudioPlayer";
import VideoPlayer from "../components/VideoPlayer";

const HomePage = () => {
  return (
    <main style={{ padding: "20px", backgroundColor: "#000", color: "#fff" }}>
      <h1>Bienvenue sur Joan Music</h1>
      <AudioPlayer
        src="/audio/Nouv-dep-avec-mastering.mp3"
        title="Nouveau départ avec mastering"
      />
      <AudioPlayer
        src="/audio/Nouv-dep-sans-mastering.mp3"
        title="Nouveau départ sans mastering"
      />
       <VideoPlayer
        src="/videos/wredgis-essai.mp4"
        title="Tutoriel : Comment jouer cet instrument"
      />
    </main>
  );
};

export default HomePage;
