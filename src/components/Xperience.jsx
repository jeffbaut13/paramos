import React, { useEffect, useState } from "react";
import gsap from "gsap";
import ReactPlayer from "react-player";
import Button from "./Button";
const isMobile = window.innerWidth < 640;
const tablet = window.innerWidth >= 640 && window.innerWidth < 1280;
const full = window.innerWidth >= 1500;
const laptop = window.innerWidth >= 1280 && window.innerWidth < 1500;
const rapido = 0.5;
const normal = 1;
const medio = 1.5;
const lento = 2;
const Xperience = ({ play, setPlay }) => {
  useEffect(() => {
    if (play) {
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
        duration: 1,
      });

      tl.to(".experienciaImagen .react-player", {
        opacity: 1,
        duration: 0.5,
        pointerEvents: "all",
      });
    } else {
      gsap.to(".experienciaImagen .xperiaimgBg", {
        opacity: 1,
      });
    }
  }, [play]);

  return (
    <div className="documental w-full h-full flex ">
      <div className="relative w-full h-full paddingComponentes flex xs:flex-col lg:flex-row">
        <div className="experienciaTextoBox BoxesTextStart flex flex-col items-center justify-center">
          <p className="experienciaTexto font-bold uppercase tamanoTitulos tracking-widest whitespace-nowrap">
            Más allá
            <br />
            de la siembra
            <br />
            de frailejones,
            <br />
            conectamos con
            <br />
            la naturaleza
          </p>
        </div>
        <div className="bg-black experienciaImagen relative BoxesImgEnd">
          <div className="player-wrapper">
            <img
              className="xperiaimgBg w-full h-full object-cover"
              src="/experiencia/experiencia.webp"
              alt=""
            />
            {play && (
              <ReactPlayer
                playing={play == true ? true : false}
                url="https://vimeo.com/922212934"
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
            {!play && (
              <>
                <span
                  onClick={() => {
                    if (play == true) {
                      setPlay(false);
                    } else {
                      setPlay(true);
                    }
                  }}
                  className="play cursor-pointer flex items-center justify-center font-normal absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-20 px-8 py-2 flex-center-col text-center border-2 rounded-lg hover:bg-[#B78B67] transition-all ease duration-300 border-[#B78B67]"
                >
                  <svg
                    id="uuid-433ace1b-e96f-404f-9ec6-afe6f04d4d5f"
                    data-name="Capa 2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16.2 19.06"
                  >
                    <g
                      id="uuid-ed807192-3682-40ea-8a94-a1b5cb9c2e05"
                      data-name="Capa 1"
                    >
                      <path
                        d="M0,1.46v16.15c0,1.07.92,1.78,1.72,1.31l13.8-8.07c.9-.53.9-2.09,0-2.62L1.72.15C.92-.32,0,.38,0,1.46Z"
                        style={{ fill: "#fff", strokeWidth: "0px" }}
                      />
                    </g>
                  </svg>
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Xperience;
