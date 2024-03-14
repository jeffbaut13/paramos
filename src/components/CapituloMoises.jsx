import gsap from "gsap";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { IconPlay } from "./IconPlay";

const isMobile = window.innerWidth < 640;
const tablet = window.innerWidth >= 640 && window.innerWidth < 1280;
const full = window.innerWidth >= 1500;
const laptop = window.innerWidth >= 1280 && window.innerWidth < 1500;

export const CapituloMoises = ({ playCapitulo, setPlayCapitulo }) => {
  const [pause, setPause] = useState(false);
  useEffect(() => {
    if (pause) {
      const tl = gsap.timeline();
      tl.fromTo(
        ".BoxMoisesImg .btncloseVideo",
        { opacity: 0 },
        { opacity: 1, ease: "power1.inOut" }
      );
      tl.add(() => setPause(false));
    }
    if (pause == false) {
      gsap.fromTo(
        ".BoxMoisesImg .btncloseVideo",
        { opacity: 1 },
        { opacity: 0, delay: 2, duration: 2, ease: "power1.inOut" }
      );
    }
  }, [pause]);

  return (
    //<div className="capituloMoises absolute w-full h-full z-[1] flex">
    <div className="capituloMoises relative ocultarEnOrigen w-full h-full z-[1] flex">
      <div className="opacity-1 relative w-full h-full p-0 bg-black">
        {isMobile ? (
          <img
            className="xperiaimgBg w-full h-full object-cover"
            src="/experiencia/experiencia.webp"
            alt=""
          />
        ) : (
          <img
            className="xperiaimgBg w-full h-full object-cover"
            src="/experiencia/experiencia.webp"
            alt=""
          />
        )}

        {!playCapitulo && (
          <>
            <IconPlay
              handleClick={() => {
                if (playCapitulo == true) {
                  setPlayCapitulo(false);
                } else {
                  setPlayCapitulo(true);
                }
              }}
            />
          </>
        )}
        {playCapitulo && (
          <ReactPlayer
            onPause={() => setPause(true)}
            onPlay={() => setPause(false)}
            playing={playCapitulo == true ? true : false}
            url="https://youtu.be/wP18CMcPoro"
            className="react-player"
            loop
            width={
              isMobile ? "350px" : full ? "1400px" : laptop ? "1000px" : "100%" // Otra condición por defecto si ninguna de las anteriores se cumple
            }
            height={`100%`}
            controls
          />
        )}
        {playCapitulo && (
          <span
            onClick={() => setPlayCapitulo(false)}
            className="btncloseVideo cursor-pointer fadeIn absolute w-8 p-[11px] rounded-full border border-white bottom-16 left-1/2 translate-x-[-50%] iconoCloseMoises"
          >
            <img src="/svg/close.svg" alt="" />
          </span>
        )}
      </div>
    </div>
  );
};
