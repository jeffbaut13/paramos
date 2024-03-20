import gsap from "gsap";
import { space } from "postcss/lib/list";
import React, { useContext, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { IconPlay } from "./IconPlay";
import { AudioContext } from "../context/AudioProvider";
const isMobile = window.innerWidth < 640;
const tablet = window.innerWidth >= 640 && window.innerWidth < 1280;
const full = window.innerWidth >= 1500;
const laptop = window.innerWidth >= 1280 && window.innerWidth < 1500;
const DocumentalMoises = ({ playMoises, setPlayMoises }) => {
  const [pause, setPause] = useState(false);
  const { isPlaying, playAudio, pauseAudio } = useContext(AudioContext);

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
  useEffect(() => {
    if (playMoises) {
      if (isPlaying) {
        pauseAudio();
      }
      const tl = gsap.timeline();
      if (isMobile || tablet) {
        tl.fromTo(
          ".BoxMoisesText",
          {
            height: "50%",
          },
          {
            height: "0%",
          }
        );
        tl.fromTo(
          ".BoxMoisesImg",
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
          ".BoxMoisesText",
          {
            width: "50%",
          },
          {
            width: "0%",
          }
        );
        tl.fromTo(
          ".BoxMoisesImg",
          {
            width: "50%",
          },
          {
            width: "100%",
          },
          "<"
        );
      }
      tl.to(".blurParamos", { opacity: 1, duration: 1 }, "<-=0.5");
      tl.to(
        ".BoxMoisesImg .xperiaimgBg",
        {
          opacity: 0,
        },
        "<-=0.5"
      );
      tl.to(".moises", {
        padding: 0,
        duration: 0.1,
      });

      tl.to(".BoxMoisesImg .react-player", {
        opacity: 1,
        duration: 1,
        pointerEvents: "all",
      });
    } else {
      gsap.to(".BoxMoisesImg .xperiaimgBg", {
        opacity: 1,
      });

      const tl = gsap.timeline();
      if (isMobile || tablet) {
        tl.fromTo(
          ".BoxMoisesText",
          {
            height: "0%",
          },
          {
            height: "50%",
          }
        );
        tl.fromTo(
          ".BoxMoisesImg",
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
          ".BoxMoisesText",
          {
            width: "0%",
          },
          {
            width: "50%",
          }
        );
        tl.fromTo(
          ".BoxMoisesImg",
          {
            width: "100%",
          },
          {
            width: "50%",
          },
          "<"
        );
        tl.to(".moises", {
          padding: "0.5rem",
          duration: 0.1,
        });
      }
    }
  }, [playMoises]);
  return (
    <div className=" documentalMoises w-full h-full flex">
      <div className="moises relative w-full h-full paddingComponentes flex xs:flex-col-reverse lg:flex-row">
        <div className="BoxMoisesImg lg:w-1/2 max-lg:h-1/2 bg-black BoxesImgStart bg-center">
          <div
            onMouseEnter={() => {
              gsap.to(".BoxMoisesImg .btncloseVideo", {
                opacity: 1,
                ease: "power1.inOut",
              });
            }}
            onMouseLeave={() => {
              gsap.to(".BoxMoisesImg .btncloseVideo", {
                opacity: 0,
                ease: "power1.inOut",
              });
            }}
            className="player-wrapper"
          >
            <img
              onClick={() => setPlayMoises(true)}
              className="cursor-pointer xperiaimgBg w-full h-full object-cover"
              src={`/experiencia/${isMobile ? "moisesM" : "moises"}.webp`}
              alt=""
            />
            {playMoises && (
              <ReactPlayer
                onPause={() => setPause(true)}
                onPlay={() => setPause(false)}
                playing={playMoises == true ? true : false}
                url="https://youtu.be/CAsd4cpIru0"
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
            {playMoises && (
              <span
                onClick={() => {
                  setPlayMoises(false);
                  playAudio();
                }}
                className="btncloseVideo cursor-pointer fadeIn absolute w-8 p-[11px] rounded-full border border-white bottom-16 left-1/2 translate-x-[-50%] iconoCloseMoises"
              >
                <img src="/svg/close.svg" alt="" />
              </span>
            )}
            {!playMoises && (
              <>
                <IconPlay
                  handleClick={() => {
                    if (playMoises == true) {
                      setPlayMoises(false);
                    } else {
                      setPlayMoises(true);
                    }
                  }}
                />
              </>
            )}
          </div>
        </div>
        <div className="BoxMoisesText lg:w-1/2 max-lg:h-1/2 BoxesTextEnd flex flex-col items-center justify-center">
          <div className="anchoInicialPrimario xl:w-[65%] xs:w-[75%] flex flex-col items-center justify-evenly xl:h-3/5">
            <h1 className="conoceTexto font-bold uppercase tamanoTitulos   tracking-widest w-full">
              CONOCE A NUESTRO PRIMER GUARDIÁN, MOISÉS MORENO
            </h1>
            <p className="parrafodescripcion text-black">
              Residente de Monguí, Boyacá, ha dejado una huella imborrable en la
              conservación ambiental y la preservación de los páramos
              colombianos, especialmente a través de su dedicación incansable
              hacia los frailejones. Conocer su historia es esencial para
              entender cómo podemos proteger nuestro entorno y nos motiva a
              actuar en beneficio de las futuras generaciones.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentalMoises;
