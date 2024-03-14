import gsap from "gsap";
import { space } from "postcss/lib/list";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { IconPlay } from "./IconPlay";
const isMobile = window.innerWidth < 640;
const tablet = window.innerWidth >= 640 && window.innerWidth < 1280;
const full = window.innerWidth >= 1500;
const laptop = window.innerWidth >= 1280 && window.innerWidth < 1500;
const DocumentalMoises = ({ playMoises, setPlayMoises }) => {
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
  useEffect(() => {
    if (playMoises) {
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
        duration: 1,
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
    }
  }, [playMoises]);
  return (
    <div className=" documental w-full h-full flex">
      <div className="moises relative w-full h-full paddingComponentes flex xs:flex-col-reverse lg:flex-row">
        <div className="BoxMoisesImg bg-black BoxesImgStart bg-center">
          <div onMouseEnter={() => setPause(true)} className="player-wrapper">
            <img
              className="xperiaimgBg w-full h-full object-cover"
              src="/experiencia/moises.webp"
              alt=""
            />
            {playMoises && (
              <ReactPlayer
                onPause={() => setPause(true)}
                onPlay={() => setPause(false)}
                playing={playMoises == true ? true : false}
                url="https://youtu.be/hU4TeVmUWGs"
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
                onClick={() => setPlayMoises(false)}
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
        <div className="BoxMoisesText BoxesTextEnd flex flex-col items-center justify-center">
          <p className=" moisesTexto font-bold uppercase tamanoTitulos tracking-widest whitespace-nowrap">
            Nuestro primer <br />
            guardián del <br /> Páramo. <br />
            <br />
            Un hombre que ha <br />
            dedicado su vida <br />a cultivar <br />
            frailejones.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DocumentalMoises;
