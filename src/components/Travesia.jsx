import React, { useEffect, useRef, useState } from "react";
import {
  EfectoTravesia,
  primerEfecto2,
  reverseAction,
} from "../animations/travesia";
import gsap from "gsap";
import Button from "./Button";
import { space } from "postcss/lib/list";
import IconSlideNextPrev from "./IconSlideNextPrev";

const isMobile = window.innerWidth <= 1024;

const Travesia = ({ travesiaReverse, setTravesiaReverse }) => {
  const [posicion, setPosicion] = useState(1);
  const [activeCaja, setActiveCaja] = useState(false);
  const padre = useRef(null);
  console.log(activeCaja);
  const data = {
    paramos: [
      {
        id: 1,
        titulo: "PÁRAMO <br /> DE OCETÁ <br />",
        subtitulo: "Monguí, Boyacá",
        descripcion:
          "Este mágico lugar en el que las montañas y el cielo se fusionan en un abrazo eterno, y donde la naturaleza despliega su belleza más sobrecogedora. Este páramo es un paraíso ubicado en Boyacá, aquí, entre picos y lagunas, la energía palpable y la conexión con la naturaleza hace que este lugar sea verdaderamente mágico. Un espacio en el que vale la pena recorrer cada sendero y descubrir la maravilla que aguarda en cada esquina.",
        item1:
          "La caminata tiene una distancia de <span class='font-black'>15 a 18 km.</span>",
        item2: "Altura máxima de 4,000 MSNM",
        item3: "La caminata puede durar entre 6 - 8 horas.",
        imagBg: "/travesia/bg-travesia2.webp",
        imagPiso: "/travesia/camino-bg.webp",
      },
      {
        id: 2,
        titulo: "PÁRAMO <br /> DE MONGUA <br />",
        subtitulo: "Monguí, Boyacá",
        descripcion:
          "Adentrarse en el páramo de Mongua es como entrar en un reino mágico en donde la naturaleza despliega su esplendor más cautivador. Con temperaturas entre los 5°C y los 15°C. Aquí, entre los imponentes frailejones, se encuentra un universo único de especies endémicas, donde cada sendero esconde secretos ancestrales y vistas que roban el aliento. No es coincidencia que sea mundialmente conocido como el páramo más hermoso del mundo.",
        item1:
          "La caminata tiene una distancia de <span class='font-black'>16 a 18 km.</span>",
        item2: "Altura máxima de 3,950 MSNM",
        item3: "La caminata puede durar entre 2 - 3 horas.",
        imagBg: "/travesia/bg-travesia3.webp",
        imagPiso: "/travesia/camino-bg2.webp",
      },
      {
        id: 3,
        titulo: "PÁRAMO <br /> DE SISCUNSÍ <br />",
        subtitulo: "Monguí, Sogamoso",
        descripcion:
          "Un tesoro natural que ofrece una experiencia incomparable. Con vastas extensiones de frailejones, cascadas naturales y la impresionante Laguna del Siscunsí, este lugar encanta a quienes lo visitan. A una altitud de 3.850 m.s.n.m., no solo es un espectáculo visual, sino también un recurso vital para la región, abastece de agua los pueblos cercanos. Su biodiversidad, que incluye frailejones y una rica variedad de fauna, como el majestuoso cóndor de los Andes. Este es un destino imperdible para los que buscan conectarse con la naturaleza.",
        item1: "Altura máxima de 4,000 MSNM",
        item2:
          "La caminata tiene una distancia de <span class='font-black'>15 a 18 km.</span>",
        item3: "La caminata puede durar entre 8 - 10 horas.",
        imagBg: "/travesia/bg-travesia4.webp",
        imagPiso: "/travesia/camino-bg3.webp",
      },
    ],
  };

  useEffect(() => {
    if (activeCaja == false) {
      gsap.to(".bg-degradadoTravesia", {
        opacity: 0,
      });
      gsap.to(".cajaTitulos", {
        opacity: 0,
      });
      gsap.to(".cardsInternas", {
        opacity: 0,
      });
      gsap.to(".travesia .paddingComponentes", {
        padding: "0.5rem",
      });

      if (isMobile) {
        gsap.to(".BoxTravesiaCards", {
          height: "50%",
          borderRadius: "0 0 1.5rem 1.5rem",
        });
        gsap.to(".BoxTravesiaTexto", { height: "50%" });
      } else {
        gsap.to(".BoxTravesiaCards", {
          width: "50%",
          borderRadius: "1.5rem 0 0 1.5rem",
        });
        gsap.to(".BoxTravesiaTexto", { width: "50%" });
      }
    }
    if (activeCaja == true) {
      gsap.to(".bg-degradadoTravesia", {
        opacity: 1,
      });
      gsap.to(".cajaTitulos", {
        opacity: 1,
      });
      gsap.to(".cardsInternas", {
        opacity: 1,
      });
      const tl = gsap.timeline();
      if (isMobile) {
        tl.fromTo(".BoxTravesiaCards", { height: "50%" }, { height: "100%" });
        tl.fromTo(
          ".BoxTravesiaTexto",
          { height: "50%" },
          { height: "0%" },
          "<"
        ).addLabel("cambioTravesia2");
      } else {
        tl.fromTo(
          ".BoxTravesiaCards",
          { width: "50%" },
          { width: "100%", borderRadius: "1.5rem" }
        );
        tl.fromTo(
          ".BoxTravesiaTexto",
          { width: "50%" },
          { width: "0%" },
          "<"
        ).addLabel("cambioTravesia2");
      }
      tl.to(
        ".blurParamos",
        { opacity: 1, duration: 1 },
        "cambioTravesia2-=0.5"
      );
      tl.to(
        ".travesia .paddingComponentes",
        { padding: 0, duration: 1 },
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

      setPosicion(1);
    }
  }, [activeCaja]);

  useEffect(() => {
    if (posicion == 1) {
      EfectoTravesia("card2", "card3", "card1");
    }
    if (posicion == 2) {
      EfectoTravesia("card3", "card1", "card2");
    }
    if (posicion == 3) {
      EfectoTravesia("card1", "card2", "card3");
    }
  }, [posicion]);

  const paramos = data.paramos;

  return (
    <div className="travesia ocultarEnOrigen w-full h-full z-[1] flex">
      <div
        ref={padre}
        className=" flex relative w-full h-full responsiveReverse  paddingComponentes  "
      >
        <div className="BoxTravesiaCards lg:w-1/2 xs:w-full lg:h-full xs:h-1/2 BoxesImgStart ">
          <div className="card w-full h-full relative ">
            {activeCaja == true && (
              <span
                className=" cursor-pointer w-3 absolute top-4 right-4 botoncerrar z-20"
                onClick={() => setActiveCaja(false)}
              >
                <img
                  className="w-full h-full object-cover"
                  src="/svg/close.svg"
                  alt=""
                />
              </span>
            )}
            <div className="cards z-[3]">
              {paramos.map(
                (paramo, i) =>
                  paramo.id == posicion && (
                    <div className="relative h-full w-full ">
                      <div className="bg-degradadoTravesia w-full h-full absolute z-[2]"></div>

                      <img
                        className="imgCompleteOne z-[-1] top-0 w-full h-full absolute"
                        src={paramo.imagBg}
                        alt=""
                      />
                      <img
                        className="caminante iconoCaminante z-[1]"
                        src="/travesia/caminante.png"
                        alt=""
                      />

                      <div
                        key={paramo.id}
                        className="w-full h-full flex flex-col justify-between"
                      >
                        <div className="cajaTitulos">
                          <h2 className="titulo">
                            <span className="block lg:w-fit xs:w-full relative overflow-hidden">
                              <span
                                className="textoTitulo block"
                                dangerouslySetInnerHTML={{
                                  __html: paramo.titulo,
                                }}
                              ></span>
                            </span>
                            <span className="titulo2">{paramo.subtitulo}</span>
                          </h2>
                          <div className="cajaParrafo lg:translate-x-[-10%]">
                            <p className="parrafo">{paramo.descripcion}</p>
                            <div className="svgIcono svgIcono1">
                              {/* <span className="icono">
                                <img src="/svg/caminante.svg" alt="" />
                              </span>
                              <h6
                                className="subtitulo"
                                dangerouslySetInnerHTML={{
                                  __html: paramo.item1,
                                }}
                              /> */}
                            </div>
                            <div className="svgIcono svgIcono2">
                              {/* <span className="icono">
                                <img src="/svg/montanas.svg" alt="" />
                              </span>

                              <h6
                                className="subtitulo"
                                dangerouslySetInnerHTML={{
                                  __html: paramo.item2,
                                }}
                              /> */}
                            </div>
                            <div className="svgIcono svgIcono3">
                              {/* <span className="icono">
                                <img src="/svg/reloj.svg" alt="" />
                              </span>
                              <h6
                                className="subtitulo"
                                dangerouslySetInnerHTML={{
                                  __html: paramo.item3,
                                }}
                              /> */}
                            </div>
                          </div>
                        </div>

                        {isMobile ? (
                          <div
                            className={`${
                              activeCaja ? "inline-block" : "hidden"
                            } left-1/2 w-fit translate-x-[-50%] absolute bottom-4 z-10`}
                          >
                            <span
                              className={`${
                                posicion == 1
                                  ? " pointer-events-none opacity-35"
                                  : "opacity-100 pointer-events-auto"
                              }`}
                            >
                              <IconSlideNextPrev
                                handleClick={() => {
                                  if (posicion == 1) {
                                    setPosicion(1);
                                  } else {
                                    setPosicion(posicion - 1);
                                  }
                                }}
                                reverse={true}
                                customStyle={"mr-4"}
                              />
                            </span>
                            <span
                              className={`${
                                posicion == 3
                                  ? " pointer-events-none opacity-35"
                                  : "opacity-100 pointer-events-auto"
                              }`}
                            >
                              <IconSlideNextPrev
                                className="previw"
                                handleClick={() => {
                                  if (posicion == 3) {
                                    setPosicion(3);
                                  } else {
                                    setPosicion(posicion + 1);
                                  }
                                }}
                              />
                            </span>
                          </div>
                        ) : (
                          <div
                            className={`cardsInternas translate-x-[-10%] z-[3] flex `}
                          >
                            <div className="slideCards">
                              <div className="slideCard flex w-[166%] h-full pt-4">
                                {paramos.map((paramo) => (
                                  <div
                                    key={paramo.id}
                                    className={`cardsInterna card${paramo.id} relative`}
                                  >
                                    <img
                                      className="imgComplete z-[-1] top-0 w-full h-full  opacity-30  absolute"
                                      src={paramo.imagBg}
                                      alt=""
                                    />
                                    <img
                                      className="imgpasto z-[-1] bottom-[-60%] w-full h-full absolute"
                                      src={paramo.imagPiso}
                                      alt=""
                                    />
                                    <div className="contenido w-full h-full relative pt-14">
                                      <h2
                                        className="Contenidotitulo text-center text-xl font-bold text-white tracking-widest"
                                        dangerouslySetInnerHTML={{
                                          __html: paramo.titulo,
                                        }}
                                      />

                                      <span
                                        onClick={() => setPosicion(paramo.id)}
                                        className="punto"
                                      ></span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
        <div className="BoxTravesiaTexto lg:w-1/2 xs:w-full lg:h-full xs:h-1/2 flex-col justify-evenly BoxesTextEnd flex-center">
          <div className="anchoInicialPrimario xl:w-[65%] xs:w-[75%] flex flex-col items-center justify-evenly xl:h-4/5">
            <h2 className="conoceTexto font-bold uppercase tamanoTitulos text-5xl tracking-widest w-full">
              de 37 páramos que existen en el país, escogimos 2 para nuestra
              pimera siembra.
            </h2>
            <p className="parrafodescripcion text-black">
              Después de varios estudios, seguimos la recomendación del Doctor
              Alzate y el Instituto Humboldt para empezar nuestra siembra en el
              páramo de Ocetá y el páramo de Mongua, ya que no representan
              ningún peligro para las primeras especies que sembramos.
            </p>
            <Button handleClick={() => setActiveCaja(true)} text={"EXPLORAR"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Travesia;
