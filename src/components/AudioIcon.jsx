import React, { useContext, useEffect, useState } from "react";
import { gsap } from "gsap";
import { AudioContext } from "../context/AudioProvider";

const AudioControl = () => {
  const { isPlaying, playAudio, pauseAudio } = useContext(AudioContext);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      setShouldAnimate(true);
    }

    // Función para animar las líneas con GSAP
    const animateLines = () => {
      // Animación para línea 1
      gsap.to(".line1", {
        height: "90%",
        yoyo: true,
        repeat: -1,
        duration: 0.5,
        ease: "power1.in",
      });

      // Animación para línea 3
      gsap.to(".line3", {
        height: "85%",
        yoyo: true,
        repeat: -1,
        duration: 0.6,
        ease: "power1.inOut",
      });
    };

    // Iniciar animación si se debe animar y el audio está reproduciéndose
    if (shouldAnimate && isPlaying) {
      animateLines();
    }
    console.log(isPlaying);
    // Detener animación si no se debe animar o el audio se pausa
    if (!shouldAnimate || !isPlaying) {
      gsap.killTweensOf(".line1");
      gsap.killTweensOf(".line3");
    }
  }, [shouldAnimate, isPlaying]);

  const handleTogglePlay = () => {
    if (isPlaying) {
      pauseAudio();
      setShouldAnimate(false);
    } else {
      playAudio();
      setShouldAnimate(true);
    }
  };

  return (
    <div
      className=" cursor-pointer w-full h-full flex justify-between items-center"
      onClick={handleTogglePlay}
    >
      <span className="line1 w-[10%] h-1/2 inline-block bg-white rounded-full"></span>
      <span className="line2 w-[10%] h-full inline-block bg-white rounded-full"></span>
      <span className="line3 w-[10%] h-1/2 inline-block bg-white rounded-full"></span>
    </div>
  );
};

export default AudioControl;
