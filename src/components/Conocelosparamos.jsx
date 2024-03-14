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
  const parrafo = useRef(null);
  const parrafo2 = useRef(null);
  const handleClick = () => {
    setItemActive(1);
  };

  useEffect(() => {
    gsap.fromTo(
      ".parrafoConoce",
      {
        y: "20%",
        opacity: 0,
      },
      { y: "0%", opacity: 1, duration: 0.3, ease: "power1.inOut" }
    );
  }, [activeOne, activeTwo]);

  useEffect(() => {
    if (itemActive == 0) {
      gsap.to(".montaña", { display: "none" });
      const tl = gsap.timeline();
      tl.to(".slideBtn", {
        display: "none",
      });

      tl.to(
        ".m4",

        { opacity: 1, scale: 1.3, x: "0%", duration: normal }
      );
      tl.to(
        ".m2",

        { opacity: 0, width: "30%", duration: normal },
        "<"
      );
      if (isMobile) {
        tl.to(".BoxConoceText", { height: "50%" }).addLabel("hide");
        tl.to(
          ".BoxConoceImg",
          { height: "50%", borderRadius: "0 0 1.5rem 1.5rem" },
          "<"
        );
      } else {
        tl.to(".BoxConoceText", { width: "50%" });
        tl.to(
          ".BoxConoceImg",
          { width: "50%", borderRadius: "1.5rem 0 0 1.5rem" },
          "<"
        ).addLabel("hide");
      }

      tl.to(
        ".moveTwo",
        {
          display: "none",
        },
        "hide"
      );

      tl.to(
        ".moveTwo",
        {
          display: "none",
        },
        "hide"
      );
      tl.to(".blurParamos", { opacity: 0, duration: rapido }, "<-=1");
      tl.to(
        ".m3",
        { opacity: 0 },

        "<-=1"
      );
    }
    if (itemActive == 1) {
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
      <div className=" responsiveReverse ocultarEnOrigen relative w-full h-full paddingComponentes">
        <div
          style={{ backgroundImage: "url(/Conoce/fondoConoce.webp)" }}
          className="anchoInicialPrimario BoxConoceImg BoxesImgStart bg-center"
        >
          <div className="montaña hidden w-full h-full relative  sm:bg-gradient-to-r bg-gradient-to-b from-[#0073ab] to-[#b0f8f5]">
            <img
              src="/Conoce/m4.png"
              className=" m4 scale-[1.3] right-0 h-auto absolute bottom-0 z-40"
            />
            <img
              src="/Conoce/m-1Mobile.webp"
              className=" m4 scale-[1.3] right-0 h-auto absolute bottom-[-25%] z-40 lg:hidden xl:hidden 2xl:hidden"
            />

            <img
              src="/Conoce/m1.png"
              className=" m1 h-auto absolute bottom-0 z-30"
            />
            <img
              src="/Conoce/m-2Mobile.webp"
              className=" m1 h-auto absolute bottom-[-25%] z-30 lg:hidden xl:hidden 2xl:hidden"
            />

            <img
              src="/Conoce/m2.png"
              className=" m2 right-0 h-auto opacity-0 absolute bottom-0 z-20"
            />
            <img
              src="/Conoce/m-3Mobile.webp"
              className=" m2 right-0 h-auto opacity-0 absolute bottom-[-25%] z-20 lg:hidden xl:hidden 2xl:hidden"
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
                  ¿por qué
                  <br />
                  decidimos
                  <br />
                  hacerlo?
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
                    En enero de 2024, una ola de calor arrasó con nuestros
                    páramos, dejando tras de sí un paisaje desolador y el eco de
                    un desafío inmenso. Pero en lugar de ser espectadores de la
                    destrucción, elegimos ser agentes de cambio, sembrando
                    semillas de esperanza en estas tierras.
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
                  la importancia
                  <br />
                  de sembrar
                  <br />
                  frailejones
                </h2>

                <div className="cajaTitu">
                  <span
                    className={`${
                      activeOne ? "block" : "hidden"
                    } parrafoConoce`}
                  >
                    Imagina un mundo donde cada hoja es un susurro de vida,
                    donde cada flor es un faro de esperanza. Eso son los
                    frailejones para nuestros páramos: guardianes silenciosos
                    que sostienen el equilibrio de un ecosistema único.
                  </span>
                  <span
                    className={`${
                      activeTwo ? "block" : "hidden"
                    } parrafoConoce`}
                  >
                    Desde las alturas, absorben la humedad de la neblina y la
                    transforman en agua, que alimenta arroyos y ríos.
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
                  customStyles={`punto top-0 w-5 h-5  lg:top-[55%] lg:left-[43%] xs:top-[73%] xs:left-[65%] `}
                />

                <BtnHover
                  handleClick={() => {
                    if (activeOne) {
                      setActiveTwo(false);
                    } else {
                      setActiveTwo(true);
                    }
                  }}
                  handleMouseEnter={() => {
                    setActiveTwo(true);
                  }}
                  handleMouseLeave={() => {
                    setActiveTwo(false);
                  }}
                  customStyles={`punto top-0 w-5 h-5   lg:top-[75%] lg:left-[63%] xs:top-[85%] xs:left-[38%]`}
                />
              </div>
            )}

            {itemActive == 5 && (
              <div className="titulo4 titulosGenral">
                <h2 className="tituloConoce">
                  ¿CÓMO
                  <br />
                  SEMBRAREMOS
                  <br />
                  NUESTRAS
                  <br />
                  SEMILLAS?
                </h2>

                <div className="cajaTitu">
                  <span
                    className={`${
                      activeOne ? "block" : "hidden"
                    } parrafoConoce`}
                  >
                    Nuestro viaje comienza en marzo, cuando nos uniremos en las
                    cumbres mágicas de Boyacá. Allí, entre los susurros del
                    viento y la quietud de la montaña, conectaremos almas con
                    frailejones.
                  </span>
                  <span
                    className={`${
                      activeTwo ? "block" : "hidden"
                    } parrafoConoce`}
                  >
                    Expertos guiarán nuestros pasos, asegurando que cada gesto
                    sea un paso firme hacia el éxito en la siembra.
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
                  customStyles={`punto top-0 w-5 h-5  lg:top-[55%] lg:left-[70%] xs:top-[75%] xs:left-[50%]`}
                />

                <BtnHover
                  handleClick={() => {
                    if (activeOne) {
                      setActiveTwo(false);
                    } else {
                      setActiveTwo(true);
                    }
                  }}
                  handleMouseEnter={() => {
                    setActiveTwo(true);
                  }}
                  handleMouseLeave={() => {
                    setActiveTwo(false);
                  }}
                  customStyles={`punto top-0 w-5 h-5  lg:top-[75%] lg:left-[42%] xs:top-[82%] xs:left-[25%]`}
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
              } next slideBtn cursor-pointer absolute lg:right-4 xs:right-1/2 max-lg:translate-x-[150%] max-lg:bottom-2 lg:top-1/2 z-50`}
            >
              <IconSlideNextPrev customStyle={"previw"} />
            </span>

            <span
              onClick={() => {
                setActiveOne(false);
                setActiveTwo(false);
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
              } back slideBtn cursor-pointer absolute lg:left-4 xs:left-1/2 max-lg:translate-x-[-150%] lg:top-1/2 max-lg:bottom-2 z-50`}
            >
              <IconSlideNextPrev customStyle={"previw"} reverse={true} />
            </span>
          </div>
        </div>
        <div className="anchoInicialPrimario BoxConoceText BoxesTextEnd flex flex-col items-center justify-evenly">
          <p className="conoceTexto font-bold uppercase tamanoTitulos tracking-widest whitespace-nowrap">
            Sembraremos <br />
            2,000 frailejones <br />
            en el corazón <br />
            de nuestros <br />
            páramos.
          </p>
          <Button handleClick={handleClick} text={"Empecemos"} />
        </div>
      </div>
    </div>
  );
};

export default Conocelosparamos;
