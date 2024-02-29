import React, { useEffect, useRef } from "react";
import { primerEfecto2, reverseAction } from "../animations/travesia";
import gsap from "gsap";

const Travesia = ({ travesiaReverse, setImageBg }) => {
  const padre = useRef(null);

  useEffect(() => {
    if (!travesiaReverse) {
      reverseAction(padre);
    }
  }, [travesiaReverse]);

  return (
    <div ref={padre} className="travesia flex relative w-full h-full">
      <div className="card w-full relative">
        <img
          className="caminante opacity-90 pointer-events-none w-fit absolute translate-y-[85%] translate-x-[300%] z-[6]"
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

        <div className="cards cards1 left-[8%] z-[3]">
          <div className="relative h-full w-full ">
            <div className="bg-degradadoTravesia w-full h-full absolute z-[2]"></div>
            <img
              className="caminante2 opacity-90 pointer-events-none w-fit absolute translate-y-[85%] translate-x-[300%] z-[6]"
              src="/travesia/caminante.png"
              alt=""
            />
            <div className="w-full h-full flex flex-col justify-between">
              <div className="cajaTitulos">
                <h2 className="titulo text-black">
                  PÁRAMO <br />
                  DE OCETÁ <br />
                  <span className="titulo2 hidden">Monguí, Boyaca</span>
                </h2>
                <p className="parrafo">
                  hogar de “la ciudad de piedra”, una formación <br />
                  rocosa con callejones y paredes cubiertas de <br />
                  musgos. ascenderemos el próximo{" "}
                  <span className="font-black">
                    miércoles <br />
                    13 de marzo.
                  </span>
                  <span className=" font-black">Jueves 14 de marzo.</span>
                </p>
              </div>
              <div className="cajaIconos p-[6%] pr-[12%] flex justify-end relative z-[4]">
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
                    La caminata tiene una distancia de{" "}
                    <span className="font-black">15 a 18 km.</span>
                  </h6>
                </div>
                <div className="svgIcono svgIcono3">
                  <span className="icono">
                    <img className="w-[80%]" src="/svg/reloj.svg" alt="" />
                  </span>
                  <h6 className="subtitulo">
                    La caminata tiene una distancia de{" "}
                    <span className="font-black">15 a 18 km.</span>
                  </h6>
                </div>
              </div>
            </div>

            <span
              onClick={() => {
                setTimeout(() => {
                  setImageBg("/travesia/bg-travesia3.webp");
                }, 1700);
                primerEfecto2(padre, ".cards1", ".cards2", ".cards3");
              }}
              /*  onClick={() => {
                reverseAction(padre);
              }} */
              className="punto left-1/2 translate-x-[-50%] bottom-16 w-10 h-10"
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

        <div className="cards cards2 left-1/2 translate-x-[-50%] z-[4]">
          <div className="relative h-full w-full">
            <div className="bg-degradadoTravesia w-full h-full absolute z-[2]"></div>
            <img
              className="caminante2 opacity-90 pointer-events-none w-fit absolute translate-y-[85%] translate-x-[300%] z-[6]"
              src="/travesia/caminante.png"
              alt=""
            />
            <div className="w-full h-full flex flex-col justify-between">
              <div className="cajaTitulos">
                <h2 className="titulo text-black">
                  PÁRAMO <br />
                  DE OCETÁ <br />
                  <span className="titulo2 hidden">Monguí, Boyaca</span>
                </h2>
                <p className="parrafo">
                  hogar de “la ciudad de piedra”, una formación <br />
                  rocosa con callejones y paredes cubiertas de <br />
                  musgos. ascenderemos el próximo{" "}
                  <span className="font-black">
                    miércoles <br />
                    13 de marzo.
                  </span>
                  <span className=" font-black">Jueves 14 de marzo.</span>
                </p>
              </div>
              <div className="cajaIconos p-[6%] pr-[12%] flex justify-end relative z-[4]">
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
                    La caminata tiene una distancia de{" "}
                    <span className="font-black">15 a 18 km.</span>
                  </h6>
                </div>
                <div className="svgIcono svgIcono3">
                  <span className="icono">
                    <img className="w-[80%]" src="/svg/reloj.svg" alt="" />
                  </span>
                  <h6 className="subtitulo">
                    La caminata tiene una distancia de{" "}
                    <span className="font-black">15 a 18 km.</span>
                  </h6>
                </div>
              </div>
            </div>

            <span
              onClick={() => {
                setTimeout(() => {
                  setImageBg("/travesia/bg-travesia3.webp");
                }, 1700);
                primerEfecto2(padre, ".cards2", ".cards3", ".cards1");
              }}
              className="punto left-1/2 translate-x-[-50%] bottom-16 w-10 h-10"
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

        <div className="cards cards3 right-[8%] z-[5]">
          <div className="relative h-full w-full">
            <div className="bg-degradadoTravesia w-full h-full absolute z-[2]"></div>
            <img
              className="caminante2 opacity-90 pointer-events-none w-fit absolute translate-y-[85%] translate-x-[300%] z-[6]"
              src="/travesia/caminante.png"
              alt=""
            />
            <div className="w-full h-full flex flex-col justify-between">
              <div className="cajaTitulos">
                <h2 className="titulo text-black">
                  PÁRAMO <br />
                  DE OCETÁ <br />
                  <span className="titulo2 hidden">Monguí, Boyaca</span>
                </h2>
                <p className="parrafo">
                  hogar de “la ciudad de piedra”, una formación <br />
                  rocosa con callejones y paredes cubiertas de <br />
                  musgos. ascenderemos el próximo{" "}
                  <span className="font-black">
                    miércoles <br />
                    13 de marzo.
                  </span>
                  <span className=" font-black">Jueves 14 de marzo.</span>
                </p>
              </div>
              <div className="cajaIconos p-[6%] pr-[12%] flex justify-end relative z-[4]">
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
                    La caminata tiene una distancia de{" "}
                    <span className="font-black">15 a 18 km.</span>
                  </h6>
                </div>
                <div className="svgIcono svgIcono3">
                  <span className="icono">
                    <img className="w-[80%]" src="/svg/reloj.svg" alt="" />
                  </span>
                  <h6 className="subtitulo">
                    La caminata tiene una distancia de{" "}
                    <span className="font-black">15 a 18 km.</span>
                  </h6>
                </div>
              </div>
            </div>

            <span
              onClick={() => {
                primerEfecto2(padre, ".cards3", ".cards1", ".cards2");
                setTimeout(() => {
                  setImageBg("/travesia/bg-travesia4.webp");
                }, 1700);
              }}
              className="punto left-1/2 translate-x-[-50%] bottom-16 w-10 h-10"
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
  );
};

export default Travesia;
