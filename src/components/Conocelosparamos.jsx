import gsap from "gsap";
import HandScroll from "./HandScroll";
import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import IconSlideNextPrev from "./IconSlideNextPrev";
import { BtnHover } from "./BtnHover";

const isMobile = window.innerWidth <= 1024;

const rapido = 0.5;
const normal = 1;
const medio = 1.5;
const lento = 2;
const Conocelosparamos = ({ itemActive, setItemActive }) => {
  const [activeOne, setActiveOne] = useState(false);
  const [activeTwo, setActiveTwo] = useState(false);
  const [activeTree, setActiveTree] = useState(false);
  const [activefour, setActivefour] = useState(false);
  const [activeFive, setActiveFive] = useState(false);
  const [mostrarMas, setMostrarMas] = useState(false);

  const handleClick = () => {
    setItemActive(1);
  };
  console.log(itemActive);
  useEffect(() => {
    gsap.fromTo(
      ".parrafoConoce",
      {
        y: "20%",
      },
      { y: "0%", duration: 0.3, ease: "power1.inOut" }
    );
  }, [activeOne, activeTwo]);

  useEffect(() => {
    if (mostrarMas) {
      const tl = gsap.timeline();

      if (isMobile) {
        tl.to(".BoxConoceText", { height: "100%", borderRadius: "1.5rem" });
        tl.to(
          ".BoxConoceImg",
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
        tl.to(".BoxConoceText", {
          height: "50%",
          borderRadius: "1.5rem 1.5rem 0 0",
        });
        tl.to(
          ".BoxConoceImg",
          {
            height: "50%",
          },
          "<"
        );
      }
    }
  }, [mostrarMas]);

  useEffect(() => {
    if (itemActive == 0) {
      const tl = gsap.timeline();

      if (isMobile) {
        tl.to(".BoxConoceText", { height: "50%" });
        tl.to(
          ".BoxConoceImg",
          {
            height: "50%",
            borderRadius: "0 0 1.5rem 1.5rem",
          },
          "<"
        );
      } else {
        tl.to(".BoxConoceText", { width: "50%" });
        tl.to(
          ".BoxConoceImg",
          {
            width: "50%",
            borderRadius: "1.5rem 0 0 1.5rem",
          },
          "<"
        );
      }
      tl.to(".montaña", { display: "none" }, "<-=0.5");
      tl.fromTo(
        ".conoce .anchoInicialPrimario",
        {
          opacity: 0,
        },
        { opacity: 1, duration: 0.3, ease: "power1.inOut" }
      );
      tl.to(".blurParamos", { opacity: 0, duration: rapido });
    }
    if (itemActive == 1) {
      gsap.to(
        ".conoce .anchoInicialPrimario",

        { opacity: 0, duration: 0.1 }
      );
      gsap.to(".montaña", { display: "block" });
      const tl = gsap.timeline();
      if (isMobile) {
        tl.to(".BoxConoceText", { height: "0", duration: rapido });
      } else {
        tl.to(".BoxConoceText", { width: "0", duration: rapido });
      }
      if (isMobile) {
        tl.to(
          ".BoxConoceImg",
          { height: "100%", borderRadius: "1.5rem", duration: rapido },
          "<"
        );
      } else {
        tl.to(
          ".BoxConoceImg",
          { width: "100%", borderRadius: "1.5rem", duration: rapido },
          "<"
        );
      }
      tl.fromTo(
        ".tituloConoce",
        {
          scale: 0.5,
          opacity: 0,
          x: "-20%",
        },
        {
          scale: 1,
          opacity: 1,
          x: "0%",
          duration: rapido,
        },
        "<"
      );
      tl.fromTo(
        ".conoce .punto",
        {
          opacity: 0,
        },
        { opacity: 1, duration: rapido }
      );
      tl.to(".slideBtn", {
        display: "block",
        opacity: 1,
      });
      tl.to(".moveTwo", {
        display: "block",
        duration: 1,
      });
      tl.to(".blurParamos", { opacity: 1, duration: rapido }, "<-=1");

      tl.to(".conoce", { padding: 0, duration: rapido }, "<");

      tl.to(".moveTwo", {
        display: "none",
        duration: 1,
        delay: 6,
      });
    }
    if (itemActive == 2) {
      const tl = gsap.timeline();

      tl.to(".m4", {
        scale: 1,
        opacity: 1,
        x: "0%",
        duration: rapido,
      }).addLabel("m4");

      tl.to(
        ".m1",
        { opacity: 0.3, width: "30%" },

        "m4-=0.5"
      );

      tl.fromTo(
        ".tituloConoce",
        {
          scale: 0.5,
          opacity: 0,
          x: "-20%",
        },
        {
          scale: 1,
          opacity: 1,
          x: "0%",
          duration: rapido,
        },
        "<"
      );
      tl.fromTo(
        ".conoce .punto",
        {
          opacity: 0,
        },
        { opacity: 1, duration: rapido }
      );
    }
    if (itemActive == 3) {
      const tl = gsap.timeline();
      tl.to(
        ".moveTwo",
        {
          display: "none",
        },
        "<-=1"
      );
      tl.to(".m4", {
        scale: 1.5,
        opacity: 0,
        x: "-30%",
        duration: rapido,
      });

      tl.fromTo(
        ".m1",
        { opacity: 0.3, width: "30%", x: "0%" },
        { opacity: 1, width: "100%", x: "0%", duration: normal },
        "<-=0.5"
      );

      tl.fromTo(
        ".tituloConoce",
        {
          scale: 0.5,
          opacity: 0,
          x: "-20%",
        },
        {
          scale: 1,
          opacity: 1,
          x: "0%",
          duration: rapido,
        },
        "<+=0.5"
      );
      tl.fromTo(
        ".conoce .punto",
        {
          opacity: 0,
        },
        { opacity: 1, duration: rapido }
      );
    }
    if (itemActive == 4) {
      const tl = gsap.timeline();

      tl.fromTo(
        ".m1",
        {
          scale: 2,
          opacity: 0,
          x: "-80%",
        },
        {
          scale: 1,
          opacity: 1,
          x: "0%",
          duration: rapido,
        }
      );
      tl.fromTo(
        ".tituloConoce",
        {
          scale: 0.5,
          opacity: 0,
          x: "-20%",
        },
        {
          scale: 1,
          opacity: 1,
          x: "0%",
          duration: rapido,
        },
        "<"
      );

      tl.fromTo(
        ".m2",
        { opacity: 1, width: "100%" },
        { opacity: 0.3, width: "30%" },
        "<"
      );
      tl.fromTo(
        ".conoce .punto",
        {
          opacity: 0,
        },
        { opacity: 1, duration: rapido }
      );
    }

    if (itemActive == 5) {
      const tl = gsap.timeline();

      tl.to(".m1", {
        scale: 1.5,
        opacity: 0,
        x: "-30%",
        duration: rapido,
      });

      tl.fromTo(
        ".m2",
        { opacity: 0.3, width: "30%" },
        { opacity: 1, width: "100%", duration: normal },
        "<-=0.2"
      );
      tl.fromTo(
        ".tituloConoce",
        {
          scale: 0.5,
          opacity: 0,
          x: "-20%",
        },
        {
          scale: 1,
          opacity: 1,
          x: "0%",
          duration: rapido,
        },
        "<"
      );
      tl.fromTo(
        ".conoce .punto",
        {
          opacity: 0,
        },
        { opacity: 1, duration: rapido }
      );
    }
  }, [itemActive]);
  return (
    //<div className="conoce absolute w-full h-full z-[1] flex">
    <div className="conoce w-full h-full flex">
      {(itemActive >= 1 || mostrarMas) && (
        <span
          onClick={() => {
            setItemActive(0);
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
      <div className=" responsiveReverse ocultarEnOrigen relative w-full h-full paddingComponentes">
        <div
          style={{
            backgroundImage: `url(/Conoce/fondoConoceM.webp)`,
          }}
          className="  BoxConoceImg lg:w-1/2 max-lg:h-1/2 BoxesImgStart bg-center"
        >
          <div className="montaña hidden w-full h-full relative  sm:bg-gradient-to-r bg-gradient-to-b from-[#0073ab] to-[#b0f8f5]">
            <img
              src="/Conoce/m4.png"
              className=" m4 scale-[1.3] right-0 h-auto absolute bottom-0 z-40"
            />
            <img
              src="/Conoce/m-1Mobile.webp"
              className=" m4 scale-[1.3] right-0 h-auto absolute bottom-[-15%] z-40 lg:hidden xl:hidden 2xl:hidden"
            />

            <img
              src="/Conoce/m1.png"
              className=" m1 h-auto absolute bottom-0 z-30"
            />
            <img
              src="/Conoce/m-2Mobile.webp"
              className=" m1 h-auto absolute bottom-[-15%] z-30 lg:hidden xl:hidden 2xl:hidden"
            />

            <img
              src="/Conoce/m2.png"
              className=" m2 right-0 h-auto opacity-0 absolute bottom-0 z-20"
            />
            <img
              src="/Conoce/m-3Mobile.webp"
              className=" m2 right-0 h-auto opacity-0 absolute bottom-[-15%] z-20 lg:hidden xl:hidden 2xl:hidden"
            />

            <img
              src="/Conoce/m3.png"
              className=" m3 scale-[1.3] opacity-0  left-0 h-auto absolute bottom-0"
            />
            <img
              src="/Conoce/m-4Mobile.webp"
              className=" m3 scale-[1.3] opacity-0  left-0 h-auto absolute bottom-0 lg:hidden xl:hidden 2xl:hidden"
            />

            {(itemActive == 1 || itemActive == 2) && (
              <div className="titulo1 titulosGenral ">
                <h2 className="tituloConoce">
                  ¿por qué dar
                  <br />
                  este paso?
                </h2>

                <div className="cajaTitu ">
                  <span
                    onClick={() => {
                      setActiveOne(false);
                    }}
                    className={`${
                      activeOne ? "block" : "hidden"
                    } parrafoConoce  `}
                  >
                    Ante los incendios forestales y el avance del cambio
                    climático, entendimos que es urgente recuperar nuestros
                    páramos. Sembrar 2000 frailejones no es solo una decisión,
                    es un compromiso con el futuro de nuestro planeta y las
                    futuras generaciones.
                  </span>
                </div>

                <BtnHover
                  handleClick={() => {
                    if (activeOne) {
                      setActiveOne(false);
                    } else {
                      setActiveOne(true);
                    }
                  }}
                  handleMouseEnter={() => {
                    setActiveOne(true);
                  }}
                  handleMouseLeave={() => {
                    setActiveOne(false);
                  }}
                  customStyles={`punto w-5 h-5  lg:left-[65%] lg:top-[40%] xs:left-[55%] xs:top-[72%]`}
                />
              </div>
            )}

            {(itemActive == 3 || itemActive == 4) && (
              <div className="titulo2 titulosGenral">
                <h2 className="tituloConoce">
                  ¿por qué
                  <br />
                  sembrar
                  <br />
                  frailejones?
                </h2>

                <div className="cajaTitu">
                  <span
                    onClick={() => {
                      setActiveTwo(false);
                      setActiveTree(false);
                    }}
                    className={`${
                      activeTwo ? "block" : "hidden"
                    } parrafoConoce`}
                  >
                    Son pilares de nuestra biodiversidad, regulan el agua,
                    sustentan la vida y protegen nuestro planeta. Capturan el
                    carbono de la atmósfera, esto ayuda a mitigar el cambio
                    climático. Sembrar y promover el cuidado de estas especies
                    es proteger nuestro futuro.
                  </span>
                </div>

                <BtnHover
                  handleClick={() => {
                    if (activeTwo) {
                      setActiveTwo(false);
                      setActiveTree(false);
                    } else {
                      setActiveTwo(true);
                      setActiveTree(false);
                    }
                  }}
                  handleMouseEnter={() => {
                    setActiveTwo(true);
                  }}
                  handleMouseLeave={() => {
                    setActiveTwo(false);
                  }}
                  customStyles={`punto top-0 w-5 h-5  lg:top-[55%] lg:left-[43%] xs:top-[70%] xs:left-[65%] `}
                />
              </div>
            )}

            {itemActive == 5 && (
              <div className="titulo4 titulosGenral">
                <h2 className="tituloConoce">
                  ¿Cómo
                  <br />
                  sembraremos
                  <br />
                  nuestras
                  <br />
                  semillas??
                </h2>

                <div className="cajaTitu">
                  <span
                    onClick={() => {
                      setActivefour(false);
                      setActiveFive(false);
                    }}
                    className={`${
                      activefour ? "block" : "hidden"
                    } parrafoConoce`}
                  >
                    Nuestro viaje comienza en marzo, cuando nos uniremos en las
                    cumbres mágicas de Boyacá. Allí, entre los susurros del
                    viento y la quietud de la montaña, conectaremos almas con
                    frailejones.
                  </span>
                </div>

                <BtnHover
                  handleClick={() => {
                    if (activefour) {
                      setActivefour(false);
                      setActiveFive(false);
                    } else {
                      setActivefour(true);
                      setActiveFive(false);
                    }
                  }}
                  handleMouseEnter={() => {
                    setActivefour(true);
                  }}
                  handleMouseLeave={() => {
                    setActivefour(false);
                  }}
                  customStyles={`punto top-0 w-5 h-5  lg:top-[55%] lg:left-[70%] xs:top-[70%] xs:left-[50%]`}
                />
              </div>
            )}
            {!isMobile && (
              <HandScroll
                customstyle={`moveTwo hidden absolute w-12 z-[100] lg:top-[44%] lg:left-[63%] max-lg:hidden `}
              />
            )}

            <span
              onClick={() => {
                setActiveOne(false);
                setActiveTwo(false);
                setActiveTree(false);
                setActiveFive(false);
                setActivefour(false);
                if (itemActive == 1 || itemActive == 2) {
                  setItemActive(3);
                }
                if (itemActive == 3 || itemActive == 4) {
                  setItemActive(5);
                }
                if (itemActive == 5) {
                  setItemActive(0);
                }
              }}
              className={`${
                itemActive == 5
                  ? " ocult  pointer-events-none"
                  : "sho pointer-events-auto"
              } next slideBtn cursor-pointer absolute lg:right-14 xs:right-1/2 max-lg:translate-x-[150%] max-lg:bottom-2 lg:top-12 z-50`}
            >
              <IconSlideNextPrev customStyle={"previw"} />
            </span>

            <span
              onClick={() => {
                setActiveOne(false);
                setActiveTwo(false);
                setActiveTree(false);
                setActiveFive(false);
                setActivefour(false);
                if (itemActive == 1 || itemActive == 2) {
                  setItemActive(0);
                }
                if (itemActive == 3 || itemActive == 4) {
                  setItemActive(2);
                }
                if (itemActive == 5) {
                  setItemActive(4);
                }
              }}
              className={`${
                itemActive == 1 || itemActive == 2
                  ? " ocult pointer-events-none "
                  : "sho pointer-events-auto"
              } back slideBtn cursor-pointer absolute lg:right-28 max-lg:left-1/2 max-lg:translate-x-[-150%] lg:top-12 max-lg:bottom-2 z-50`}
            >
              <IconSlideNextPrev customStyle={"previw"} reverse={true} />
            </span>
          </div>
        </div>
        <div className="lg:w-1/2 max-lg:h-1/2 BoxConoceText BoxesTextEnd flex flex-col items-center justify-evenly">
          <div className="anchoInicialPrimario xl:w-[65%] xs:w-[75%] flex flex-col items-center justify-evenly xl:h-4/5">
            <h1 className="conoceTexto font-bold uppercase tamanoTitulos tracking-widest w-full">
              Sembraremos 2.000 frailejones
            </h1>
            <p className="parrafodescripcion text-black">
              {isMobile ? (
                <>
                  <span>
                    Lanzamos una convocatoria y{" "}
                    <strong>14000 voluntarios</strong> se unieron para ser parte
                    de <br />
                    {mostrarMas ? (
                      <span>
                        <strong>Guardianes del Páramo</strong>, seleccionamos
                        los primeros <strong>170</strong> con los que entregamos
                        a la tierra <strong>500 frailejones</strong> de 6 años
                        con los que esperamos recuperar estos ecosistemas.
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
                  Lanzamos una convocatoria y <strong>14000 voluntarios</strong>{" "}
                  se unieron para ser parte de{" "}
                  <strong>Guardianes del Páramo</strong>, seleccionamos los
                  primeros <strong>170</strong> con los que entregamos a la
                  tierra <strong>500 frailejones</strong> de 6 años con los que
                  esperamos recuperar estos ecosistemas.
                </>
              )}
            </p>
            <Button handleClick={handleClick} text={"Conoce más"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conocelosparamos;
