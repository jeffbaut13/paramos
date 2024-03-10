import gsap from "gsap";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
const isMobile = window.innerWidth <= 1024;
const DocumentalMoises = ({ playMoises, setPlayMoises }) => {
  useEffect(() => {
    if (playMoises) {
      const tl = gsap.timeline();
      if (isMobile) {
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
      <div className="moises relative w-full h-full paddingComponentes flex">
        <div className="BoxMoisesImg bg-black BoxesImgStart bg-center">
          <div className="player-wrapper">
            <img
              className="xperiaimgBg w-full h-full object-cover"
              src="/experiencia/moises.webp"
              alt=""
            />
            {playMoises && (
              <ReactPlayer
                playing={playMoises == true ? true : false}
                url="https://vimeo.com/921262445"
                className="react-player"
                width="1420px"
                height="655px"
                controls
              />
            )}
            {!playMoises && (
              <>
                <span
                  onClick={() => {
                    if (playMoises == true) {
                      setPlayMoises(false);
                    } else {
                      setPlayMoises(true);
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
        <div className="BoxMoisesText BoxesTextEnd flex flex-col items-center justify-center">
          <p className=" moisesTexto font-bold uppercase tamanoTitulos tracking-widest whitespace-nowrap">
            En boyacá
            <br />
            nace la historia
            <br />
            de nuestro
            <br />
            primer guardián
            <br />
            del páramo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DocumentalMoises;
