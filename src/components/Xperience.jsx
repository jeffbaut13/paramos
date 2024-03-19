import React, { useContext, useEffect, useState } from "react";
import gsap from "gsap";
import ReactPlayer from "react-player";
import Button from "./Button";
import { IconPlay } from "./IconPlay";
import { AudioContext } from "../context/AudioProvider";

const isMobile = window.innerWidth < 640;
const tablet = window.innerWidth >= 640 && window.innerWidth < 1280;
const full = window.innerWidth >= 1500;
const laptop = window.innerWidth >= 1280 && window.innerWidth < 1500;
const rapido = 0.5;
const normal = 1;
const medio = 1.5;
const lento = 2;
const Xperience = ({ play, setPlay }) => {
  const [pause, setPause] = useState(false);

  const { isPlaying, playAudio, pauseAudio } = useContext(AudioContext);

  useEffect(() => {
    if (pause) {
      const tl = gsap.timeline();
      tl.fromTo(
        ".experienciaImagen .btncloseVideo",
        { opacity: 0 },
        { opacity: 1, ease: "power1.inOut" }
      );
      tl.add(() => setPause(false));
    }
    if (pause == false) {
      gsap.fromTo(
        ".experienciaImagen .btncloseVideo",
        { opacity: 1 },
        { opacity: 0, delay: 2, duration: 2, ease: "power1.inOut" }
      );
    }
  }, [pause]);

  useEffect(() => {
    if (play) {
      if (isPlaying) {
        pauseAudio();
      }
      const tl = gsap.timeline();
      if (isMobile || tablet) {
        tl.fromTo(
          ".experienciaTextoBox",
          {
            height: "50%",
          },
          {
            height: "0%",
          }
        );
        tl.fromTo(
          ".experienciaImagen",
          {
            height: "50%",
          },
          {
            height: "100%",
          },
          "<"
        );
      } else {
        tl.fromTo(
          ".experienciaImagen",
          {
            width: "50%",
          },
          {
            width: "100%",
          }
        );
        tl.fromTo(
          ".experienciaTextoBox",
          {
            width: "50%",
          },
          {
            width: "0%",
          },
          "<"
        );
      }
      tl.to(".blurParamos", { opacity: 1, duration: 1 }, "<-=0.5");
      tl.to(
        ".experienciaImagen .xperiaimgBg",
        {
          opacity: 0,
        },
        "<-=0.5"
      );
      tl.to(".documental .paddingComponentes", {
        padding: 0,
        duration: 0.1,
      });

      tl.to(".experienciaImagen .react-player", {
        opacity: 1,
        duration: 0.5,
        pointerEvents: "all",
      });
    } else {
      const tl = gsap.timeline();
      if (isMobile || tablet) {
        tl.fromTo(
          ".experienciaTextoBox",
          {
            height: "0%",
          },
          {
            height: "50%",
          }
        );
        tl.fromTo(
          ".experienciaImagen",
          {
            height: "100%",
          },
          {
            height: "50%",
          },
          "<"
        );
      } else {
        tl.fromTo(
          ".experienciaImagen",
          {
            width: "100%",
          },
          {
            width: "50%",
          }
        );
        tl.fromTo(
          ".experienciaTextoBox",
          {
            width: "0%",
          },
          {
            width: "50%",
          },
          "<"
        );
      }
      tl.to(".documental .paddingComponentes", {
        padding: "0.5rem",
        duration: 0.1,
      });
      gsap.to(".experienciaImagen .xperiaimgBg", {
        opacity: 1,
      });
    }
  }, [play]);

  return (
    <div className="documental w-full h-full flex ">
      <div className="relative w-full h-full paddingComponentes flex xs:flex-col lg:flex-row">
        <div className="experienciaTextoBox lg:w-1/2 max-lg:h-1/2 BoxesTextStart flex flex-col items-center justify-center">
          <p className="experienciaTexto  font-bold uppercase tamanoTitulos tracking-widest whitespace-nowrap">
            Juntos <br />
            cambiaremos <br />
            el destino <br />
            de nuestros <br />
            Páramos
          </p>
        </div>
        <div className="bg-black experienciaImagen lg:w-1/2 max-lg:h-1/2 relative BoxesImgEnd">
          <div
            onMouseLeave={() => {
              gsap.to(".experienciaImagen .btncloseVideo", {
                opacity: 0,
                ease: "power1.inOut",
              });
            }}
            onMouseEnter={() =>
              gsap.to(".experienciaImagen .btncloseVideo", {
                opacity: 1,
                ease: "power1.inOut",
              })
            }
            className="player-wrapper"
          >
            <img
              onClick={() => setPlay(true)}
              className="cursor-pointer xperiaimgBg w-full h-full object-cover"
              src={`/experiencia/${
                isMobile ? "experienciaM" : "experiencia"
              }.webp`}
              alt=""
            />
            {play && (
              <ReactPlayer
                onPause={() => setPause(true)}
                onPlay={() => setPause(false)}
                playing={play == true ? true : false}
                url="https://www.youtube.com/watch?v=wP18CMcPoro"
                className="react-player"
                width={
                  isMobile
                    ? "350px"
                    : full
                    ? "1400px"
                    : laptop
                    ? "1000px"
                    : "100%" // Otra condición por defecto si ninguna de las anteriores se cumple
                }
                height={`100%`}
                controls
              />
            )}
            {play && (
              <span
                onClick={() => {
                  setPlay(false);
                  playAudio();
                }}
                className="btncloseVideo cursor-pointer fadeIn absolute w-8 p-[11px] rounded-full border border-white bottom-16 left-1/2 translate-x-[-50%] iconoCloseMoises"
              >
                <img src="/svg/close.svg" alt="" />
              </span>
            )}
            {!play && (
              <>
                <IconPlay
                  handleClick={() => {
                    if (play == true) {
                      setPlay(false);
                    } else {
                      setPlay(true);
                    }
                  }}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Xperience;
