import React, { useEffect, useRef } from "react";
import { primerEfecto2, reverseAction } from "../animations/travesia";
import gsap from "gsap";

const Travesia = ({ travesiaReverse }) => {
  const padre = useRef(null);

  useEffect(() => {
    if (!travesiaReverse) {
      reverseAction(padre);
    }
  }, [travesiaReverse]);

  return (
    //<div className="travesia absolute w-full h-full z-[1] flex">
    <div className="travesia ocultarEnOrigen w-full h-full z-[1] flex">
      <div
        ref={padre}
        className=" flex relative w-full h-full responsiveReverse  paddingComponentes bg-white"
      >
        <div className="BoxTravesiaCards    BoxesImgStart">
          <div className="card w-full h-full relative">
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
                      PÁRAMO DE OCETÁ <br />
                      <span className="titulo2 hidden">Monguí, Boyaca</span>
                    </h2>
                    <p className="parrafo">
                      Hogar de “la ciudad de piedra”, una formación rocosa con
                      callejones y paredes cubiertas de musgos. ascenderemos el
                      próximo
                      <span className="font-black">
                        {" "}
                        miércoles 13 de marzo.
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
                    primerEfecto2(padre, ".cards1", ".cards2", ".cards3");
                  }}
                  className="punto"
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
                      PÁRAMO DE MONGUÁ <br />
                      <span className="titulo2 hidden">Monguí, Boyaca</span>
                    </h2>
                    <p className="parrafo">
                      Considerado uno de los más bellos del mundo, con una
                      diversidad única de flora y fauna. Ascenderemos el próximo
                      <span className="font-black">Jueves 14 de marzo.</span>
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
                    primerEfecto2(padre, ".cards2", ".cards3", ".cards1");
                  }}
                  className="punto"
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
                      PÁRAMO DE SISCUNSÍ
                      <br />
                      <span className="titulo2 hidden">Sogamoso, Boyacá</span>
                    </h2>
                    <p className="parrafo">
                      En este lugar se han llevado a cabo programas de
                      repoblamiento del cóndor andino. Ascenderemos el próximo
                      <span className="font-black">Viernes 15 de marzo.</span>
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
                  }}
                  className="punto"
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
          <p className="origenTexto font-bold uppercase tamanoTitulos tracking-widest whitespace-nowrap">
            La travesía <br />
            por los <br /> páramos <br />
            del país.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Travesia;
