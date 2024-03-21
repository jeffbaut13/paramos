import React, { useContext, useEffect, useState } from "react";
import gsap from "gsap";
import ReactPlayer from "react-player";
import Button from "./Button";
import { IconPlay } from "./IconPlay";

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
  const [mostrarMas, setMostrarMas] = useState(false);

  useEffect(() => {
    if (mostrarMas) {
      const tl = gsap.timeline();

      if (isMobile) {
        tl.to(".experienciaTextoBox", {
          height: "100%",
          borderRadius: "1.5rem",
        });
        tl.to(
          ".experienciaImagen",
          {
            height: "0%",
          },
          "<"
        );
      }
    }
    if (mostrarMas == false) {
      const tl = gsap.timeline();

      if (isMobile) {
        tl.to(".experienciaTextoBox", {
          height: "50%",
          borderRadius: "1.5rem 1.5rem 0 0",
        });
        tl.to(
          ".experienciaImagen",
          {
            height: "50%",
          },
          "<"
        );
      }
    }
  }, [mostrarMas]);

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
        {mostrarMas && (
          <span
            onClick={() => {
              setMostrarMas(false);
            }}
            className="btnCloseDosMil absolute z-50 w-3 cursor-pointer right-6 top-4"
          >
            <svg
              id="uuid-67bf61f3-378f-4a21-9846-0cb8be4b4215"
              data-name="Capa 2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 51.89 51.89"
            >
              <g
                id="uuid-d0726665-c8dc-4a92-976a-b8915e0e1925"
                data-name="Capa 1"
              >
                <path
                  d="M32.75,25.95l17.74-17.74c1.88-1.88,1.88-4.92,0-6.8-1.88-1.88-4.92-1.88-6.8,0l-17.74,17.74L8.21,1.41C6.33-.47,3.29-.47,1.41,1.41-.47,3.29-.47,6.33,1.41,8.21l17.74,17.74L1.41,43.69c-1.88,1.88-1.88,4.92,0,6.8,1.88,1.88,4.92,1.88,6.8,0l17.74-17.74,17.74,17.74c1.88,1.88,4.92,1.88,6.8,0,1.88-1.88,1.88-4.92,0-6.8l-17.74-17.74Z"
                  style={{ fill: "#000000", strokeWidth: "0px" }}
                />
              </g>
            </svg>
          </span>
        )}
        <div className="experienciaTextoBox lg:w-1/2 max-lg:h-1/2 BoxesTextStart flex flex-col items-center justify-center">
          <div className="anchoInicialPrimario xl:w-[65%] xs:w-[75%] flex flex-col items-center justify-evenly xl:h-3/5">
            <h1 className="conoceTexto font-bold uppercase tamanoTitulos   tracking-widest w-full">
              GUARDIANES DEL PÁRAMO, CUIDADORES DE NUESTRA HERENCIA NATURAL
            </h1>
            <p className="parrafodescripcion text-black">
              {isMobile ? (
                <>
                  <span>
                    Nuestros Guardianes se registraron y pacientemente esperaron
                    el llamado que
                    {mostrarMas ? (
                      <span>
                        los llevó a Boyacá, allí se capacitaron para cuidar y
                        sembrar frailejones. En el sitio de siembra, guiados por
                        sabedores ancestrales, pidieron permiso a la montaña y
                        al final, se despidieron del campamento con una moneda
                        que los certifica como los primeros Guardianes del
                        Páramo.
                        <br />
                        <br /> Mira la experiencia completa haciendo clic en el
                        video.
                      </span>
                    ) : (
                      <span
                        onClick={() => setMostrarMas(true)}
                        className="text-blue-500 text-xs w-full inline-block"
                      >
                        Leer mas...
                      </span>
                    )}
                  </span>
                </>
              ) : (
                <>
                  Nuestros Guardianes se registraron y pacientemente esperaron
                  el llamado que los llevó a Boyacá, allí se capacitaron para
                  cuidar y sembrar frailejones. En el sitio de siembra, guiados
                  por sabedores ancestrales, pidieron permiso a la montaña y al
                  final, se despidieron del campamento con una moneda que los
                  certifica como los primeros Guardianes del Páramo.
                  <br />
                  <br /> Mira la experiencia completa haciendo clic en el video.
                </>
              )}
            </p>
          </div>
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
