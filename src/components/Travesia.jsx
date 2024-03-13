import React, { useEffect, useRef, useState } from "react";
import { primerEfecto2, reverseAction } from "../animations/travesia";
import gsap from "gsap";
import Button from "./Button";
import { space } from "postcss/lib/list";
import IconSlideNextPrev from "./IconSlideNextPrev";

const isMobile = window.innerWidth <= 1024;
const rapido = 0.5;
const normal = 1;
const medio = 1.5;
const lento = 2;

const Travesia = ({ travesiaReverse, setTravesiaReverse }) => {
  const [posicion, setPosicion] = useState(1);
  const padre = useRef(null);
  //console.log(posicion);

  useEffect(() => {
    if (posicion == 2) {
      primerEfecto2(padre, "cards2", "cards3", "cards1");
    }
    if (posicion == 3) {
      primerEfecto2(padre, "cards3", "cards1", "cards2");
    }
    if (posicion == 4) {
      primerEfecto2(padre, "cards1", "cards2", "cards3");
    }
  }, [posicion]);

  useEffect(() => {
    if (travesiaReverse == false) {
      const tl = gsap.timeline();
      if (isMobile) {
        tl.fromTo(".BoxTravesiaCards", { height: "0%" }, { height: "50%" });
        tl.fromTo(
          ".BoxTravesiaTexto",
          { height: "100%" },
          { height: "50%" },
          "<"
        ).addLabel("cambioTravesia2");
      } else {
        tl.fromTo(".BoxTravesiaCards", { width: "0%" }, { width: "50%" });
        tl.fromTo(
          ".BoxTravesiaTexto",
          { width: "100%" },
          { width: "50%" },
          "<"
        ).addLabel("cambioTravesia2");
      }
      tl.to(
        ".blurParamos",
        { opacity: 0, duration: 1 },
        "cambioTravesia2-=0.5"
      );

      tl.to(
        ".travesia .btnconoce",
        {
          opacity: 1,
          duration: 0,
        },
        "cambioTravesia2-=0.5"
      );
      reverseAction(padre);
      setPosicion(1);
    }
  }, [travesiaReverse]);

  const handleGspa = () => {
    const tl = gsap.timeline();
    if (isMobile) {
      tl.fromTo(".BoxTravesiaCards", { height: "50%" }, { height: "0%" });
      tl.fromTo(
        ".BoxTravesiaTexto",
        { height: "50%" },
        { height: "100%" },
        "<"
      ).addLabel("cambioTravesia");
    } else {
      tl.fromTo(".BoxTravesiaCards", { width: "50%" }, { width: "0%" });
      tl.fromTo(
        ".BoxTravesiaTexto",
        { width: "50%" },
        { width: "100%" },
        "<"
      ).addLabel("cambioTravesia");
    }
    tl.to(".blurParamos", { opacity: 1, duration: 1 }, "cambioTravesia-=0.5");

    tl.add(() => {
      primerEfecto2(padre, "cards1", "cards2", "cards3");
    }, "cambioTravesia-=0.5");
    tl.to(
      ".travesia .btnconoce",
      {
        opacity: 0,
        duration: 0,
      },
      "cambioTravesia-=0.5"
    );

    gsap.to(
      ".cards2 .iconoCaminante",
      {
        display: "none",
      },
      "cambioTravesia"
    );

    tl.to(".travesia > div", { padding: 0, duration: 1 }, "cambioTravesia");
    if (isMobile) {
      tl.fromTo(
        ".cards1",
        { display: "none", opacity: 0 },
        { display: "block", opacity: 1, duration: rapido },
        "cambioTravesia"
      );
    } else {
      tl.fromTo(
        ".cards",
        { display: "none", opacity: 0 },
        { display: "block", opacity: 1, duration: rapido },
        "cambioTravesia"
      );
    }
    tl.to(".textoUno", { opacity: 0, y: "-20%" }, "cambioTravesia");
    tl.to(".textoUno", { display: "none" }, "cambioTravesia");
    tl.to(".btnTravesia", { opacity: 0 }, "<-=0.5");
    if (isMobile) {
      tl.to(".BoxTravesiaCards", { height: "100%" }, "cambioTravesia+=1");
      tl.to(
        ".BoxTravesiaTexto",

        { height: "0%" },
        "cambioTravesia+=1"
      );
    } else {
      tl.to(".BoxTravesiaCards", { width: "100%" }, "cambioTravesia+=1");
      tl.to(
        ".BoxTravesiaTexto",

        { width: "0%" },
        "cambioTravesia+=1"
      );
    }
    tl.to(
      ".travesia .iconContinue",

      { opacity: 1, right: "0", duration: lento }
    );
  };

  return (
    //<div className="travesia absolute w-full h-full z-[1] flex">
    <div className="travesia ocultarEnOrigen w-full h-full z-[1] flex">
      <div
        ref={padre}
        className=" flex relative w-full h-full responsiveReverse  paddingComponentes bg-white"
      >
        <div className="BoxTravesiaCards    BoxesImgStart ">
          <div className="card w-full h-full relative ">
            {isMobile && (
              <IconSlideNextPrev
                handleClick={() => {
                  if (posicion == 4) {
                    setPosicion(2);
                  } else {
                    setPosicion(posicion + 1);
                  }
                }}
                customStyle={
                  "opacity-1 absolute right-[-2.5rem] top-1/2 translate-y-[-50%] z-50"
                }
                reverse={false}
              />
            )}
            <img
              className="caminante iconoCaminante"
              src="/travesia/caminante.png"
              alt=""
            />
            <div className="absolute w-full h-full z-[1]">
              <div className="relative w-full h-full">
                <img
                  className=" w-full h-full absolute object-cover"
                  src="/travesia/bg-travesFront.webp"
                  alt=""
                />
              </div>
            </div>

            <div className="cards cards1   z-[3]">
              <div className="relative h-full w-full ">
                <div className="bg-degradadoTravesia w-full h-full absolute z-[2]"></div>
                <img
                  className="caminante2 iconoCaminante"
                  src="/travesia/caminante.png"
                  alt=""
                />
                <div className="w-full h-full flex flex-col justify-between">
                  <div className="cajaTitulos">
                    <h2 className="titulo text-black">
                      PÁRAMO <br /> DE OCETÁ <br />
                      <span className="titulo2 hidden">Monguí, Boyaca</span>
                    </h2>
                    <p className="parrafo">
                      Hogar de “la ciudad de piedra”, una formación rocosa con
                      callejones y paredes cubiertas de musgos.
                      <span className="font-black">
                        {" "}
                        
                      </span>
                    </p>
                  </div>
                  <div className="cajaIconos">
                    <div className="svgIcono svgIcono1">
                      <span className="icono">
                        <img src="/svg/caminante.svg" alt="" />
                      </span>
                      <h6 className="subtitulo">
                        La caminata tiene una distancia de{" "}
                        <span className="font-black">15 a 18 km.</span>
                      </h6>
                    </div>
                    <div className="svgIcono svgIcono2">
                      <span className="icono">
                        <img src="/svg/montanas.svg" alt="" />
                      </span>
                      <h6 className="subtitulo">
                        Altura máxima de 4,000 MSNM
                      </h6>
                    </div>
                    <div className="svgIcono svgIcono3">
                      <span className="icono">
                        <img className="w-[80%]" src="/svg/reloj.svg" alt="" />
                      </span>
                      <h6 className="subtitulo">
                        La caminata puede durar entre 8 - 10 horas.
                      </h6>
                    </div>
                  </div>
                </div>

                <span
                  onClick={() => {
                    primerEfecto2(padre, "cards1", "cards2", "cards3");
                  }}
                  className="punto max-lg:hidden"
                ></span>
                <img
                  className="imgComplete z-[-1] top-0 w-full h-full absolute"
                  src="/travesia/bg-travesia2.webp"
                  alt=""
                />
                <img
                  className="imgpasto z-[-1] bottom-[-70%] w-full h-full absolute"
                  src="/travesia/camino-bg.webp"
                  alt=""
                />
              </div>
            </div>

            <div className="cards cards2 max-lg:hidden z-[4]">
              <div className="relative h-full w-full">
                <div className="bg-degradadoTravesia w-full h-full absolute z-[2]"></div>
                <img
                  className="caminante2 iconoCaminante"
                  src="/travesia/caminante.png"
                  alt=""
                />
                <div className="w-full h-full flex flex-col justify-between">
                  <div className="cajaTitulos">
                    <h2 className="titulo text-black">
                      PÁRAMO <br /> DE MONGUÁ <br />
                      <span className="titulo2 hidden">Monguí, Boyaca</span>
                    </h2>
                    <p className="parrafo">
                      Considerado uno de los más bellos del mundo, con una
                      diversidad única de flora y fauna.
                    </p>
                  </div>
                  <div className="cajaIconos">
                    <div className="svgIcono svgIcono1">
                      <span className="icono">
                        <img src="/svg/caminante.svg" alt="" />
                      </span>
                      <h6 className="subtitulo">
                        La caminata tiene una distancia de{" "}
                        <span className="font-black">16 a 18 km.</span>
                      </h6>
                    </div>
                    <div className="svgIcono svgIcono2">
                      <span className="icono">
                        <img src="/svg/montanas.svg" alt="" />
                      </span>
                      <h6 className="subtitulo">
                        Altura máxima de 3,950 MSNM
                      </h6>
                    </div>
                    <div className="svgIcono svgIcono3">
                      <span className="icono">
                        <img className="w-[80%]" src="/svg/reloj.svg" alt="" />
                      </span>
                      <h6 className="subtitulo">
                        La caminata puede durar entre 9 - 11 horas.
                      </h6>
                    </div>
                  </div>
                </div>

                <span
                  onClick={() => {
                    primerEfecto2(padre, "cards2", "cards3", "cards1");
                  }}
                  className="punto max-lg:hidden"
                ></span>
                <img
                  className="imgComplete z-[-1] top-0 w-full h-full absolute"
                  src="/travesia/bg-travesia3.webp"
                  alt=""
                />
                <img
                  className="imgpasto z-[-1] bottom-[-70%] w-full h-full absolute"
                  src="/travesia/camino-bg2.webp"
                  alt=""
                />
              </div>
            </div>

            <div className="cards cards3 max-lg:hidden z-[5]">
              <div className="relative h-full w-full">
                <div className="bg-degradadoTravesia w-full h-full absolute z-[2]"></div>
                <img
                  className="caminante2 iconoCaminante"
                  src="/travesia/caminante.png"
                  alt=""
                />
                <div className="w-full h-full flex flex-col justify-between">
                  <div className="cajaTitulos">
                    <h2 className="titulo text-black">
                      PÁRAMO <br /> DE SISCUNSÍ
                      <br />
                      <span className="titulo2 hidden">Sogamoso, Boyacá</span>
                    </h2>
                    <p className="parrafo">
                      En este lugar se han llevado a cabo programas de
                      repoblamiento del cóndor andino.
                    </p>
                  </div>
                  <div className="cajaIconos">
                    <div className="svgIcono svgIcono1">
                      <span className="icono">
                        <img src="/svg/caminante.svg" alt="" />
                      </span>
                      <h6 className="subtitulo">
                        La caminata tiene una distancia de{" "}
                        <span className="font-black">15 a 18 km.</span>
                      </h6>
                    </div>
                    <div className="svgIcono svgIcono2">
                      <span className="icono">
                        <img src="/svg/montanas.svg" alt="" />
                      </span>
                      <h6 className="subtitulo">
                        Altura máxima de 4,000 MSNM
                      </h6>
                    </div>
                    <div className="svgIcono svgIcono3">
                      <span className="icono">
                        <img className="w-[80%]" src="/svg/reloj.svg" alt="" />
                      </span>
                      <h6 className="subtitulo">
                        La caminata puede durar entre 8 - 10 horas.
                      </h6>
                    </div>
                  </div>
                </div>

                <span
                  onClick={() => {
                    primerEfecto2(padre, "cards3", "cards1", "cards2");
                  }}
                  className="punto max-lg:hidden"
                ></span>
                <img
                  className="imgComplete z-[-1] top-0 w-full h-full absolute "
                  src="/travesia/bg-travesia4.webp"
                  alt=""
                />
                <img
                  className="imgpasto z-[-1] bottom-[-68%] w-full h-full absolute"
                  src="/travesia/camino-bg3.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="BoxTravesiaTexto   BoxesTextEnd flex-center">
          <p className="origenTexto textoUno font-bold uppercase tamanoTitulos tracking-widest whitespace-nowrap">
            Boyacá <br />
            será nuestro
            <br />
            Punto de
            <br />
            partida.
          </p>
          <Button handleClick={handleGspa} text={"EXPLORAR"} />
        </div>
      </div>
    </div>
  );
};

export default Travesia;
