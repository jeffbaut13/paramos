import React, { createContext, useState } from "react";

const AudioContext = createContext();

const AudioProvider = ({ children }) => {
  const [audio, setAudio] = useState(new Audio("/audio.mp3"));
  const [isPlaying, setIsPlaying] = useState(false);
  audio.loop = true;
  const playAudio = () => {
    audio.play();
    setIsPlaying(true);
  };

  const pauseAudio = () => {
    audio.pause();
    setIsPlaying(false);
  };

  return (
    <AudioContext.Provider value={{ playAudio, pauseAudio, isPlaying }}>
      {children}
    </AudioContext.Provider>
  );
};

export { AudioProvider, AudioContext };
