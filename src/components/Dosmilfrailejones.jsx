import React, { useEffect, useRef, useState } from "react";
import DescripcionFrailejones from "./DescripcionFrailejones";

import gsap from "gsap";
import Button from "./Button";
import IconSlideNextPrev from "./IconSlideNextPrev";
import { frailejon } from "../animations/gsap";

const isMobile = window.innerWidth <= 1024;
const rapido = 0.5;
const normal = 1;
const medio = 1.5;
const lento = 2;

const Dosmilfrailejones = ({ numFrailejon, setNumFrailejon }) => {
  const parrafoFrailejon = useRef(null);
  const [limpiar, setLimpiar] = useState(false);
  const limiarPuntos = () => {
    setLimpiar(true);
  };

  useEffect(() => {
    if (parrafoFrailejon) {
      gsap.fromTo(
        parrafoFrailejon.current,
        {
          opacity: 0,
          y: "40%",
        },
        {
          opacity: 1,
          y: "0",
          ease: "power1.inOut",
          duration: 1,
        }
      );
    }

    if (numFrailejon == null) {
      const tl5 = gsap.timeline();
      tl5.to(".Blanco", { opacity: 0 }, "<");
      tl5.to(".amarillo", { opacity: 0 }, "<-=0.5");
      tl5.to(".Espeletia", { opacity: 0 }, "<-=0.5");
      tl5.to(
        ".PrimerTextoDosmil",
        {
          opacity: 1,
          y: "0%",
          display: "block",
          duration: rapido,
        },
        "<-=0.5"
      );
      tl5.to(
        ".dosmilFrailejones .btnconoce",
        {
          display: "flex",
        },
        "<-=0.5"
      );
      tl5.to(
        ".btnSlide",
        {
          opacity: 0,
          duration: 2,
        },
        "<-=0.5"
      );
    }
    if (numFrailejon == 1) {
      frailejon(1, 0, 0, rapido, normal, isMobile);
    }
    if (numFrailejon == 2) {
      frailejon(0, 0, 1, rapido, normal, isMobile);
    }
    if (numFrailejon == 3) {
      frailejon(0, 1, 0, rapido, normal, isMobile);
    }
  }, [numFrailejon]);

  return (
    //<div className="dosmilFrailejones absolute w-full h-full z-[1] flex">
    <div className="dosmilFrailejones ocultarEnOrigen w-full h-full z-[1] flex">
      <div className=" flex responsiveReverse relative w-full h-full paddingComponentes">
        <span
          onClick={() => {
            if (numFrailejon >= 3) {
              setNumFrailejon(3);
            } else {
              setNumFrailejon(numFrailejon + 1);
            }
          }}
          className={`${
            numFrailejon == 3
              ? " ocult pointer-events-none "
              : "sho pointer-events-auto"
          } btnSlide opacity-0 cursor-pointer absolute lg:right-4 xs:right-1/2 max-lg:translate-x-[150%] max-lg:bottom-2 lg:top-1/2 z-50`}
        >
          <IconSlideNextPrev customStyle={"previw"} />
        </span>

        <span
          onClick={() => {
            if (numFrailejon <= 1) {
              setNumFrailejon(0);
            } else {
              setNumFrailejon(numFrailejon - 1);
            }
          }}
          className={`${
            numFrailejon == 1
              ? " ocult pointer-events-none "
              : "sho pointer-events-auto"
          } btnSlide opacity-0 cursor-pointer absolute lg:left-4 xs:left-1/2 max-lg:translate-x-[-150%] lg:top-1/2 max-lg:bottom-2 z-50`}
        >
          <IconSlideNextPrev customStyle={"previw"} reverse={true} />
        </span>

        <div
          className={`BoxDosmilImage   bg-center BoxesImgStart flex-center z-10 relative ${
            numFrailejon >= 1 ? "Frailejonactivo" : ""
          } `}
          style={{ backgroundImage: "url(/bgParamos/Bg20mil.webp)" }}
        >
          <img
            onClick={limiarPuntos}
            className={`Espeletia imgFrailejon"`}
            src={`/imgFrailejones/Espeletia.webp`}
            alt=""
          />
          <img
            onClick={limiarPuntos}
            className={`amarillo imgFrailejon"`}
            src={`/imgFrailejones/amarillo.webp`}
            alt=""
          />
          <img
            onClick={limiarPuntos}
            className={`Blanco imgFrailejon"`}
            src={`/imgFrailejones/Blanco.webp`}
            alt=""
          />
          {numFrailejon == 1 && (
            <DescripcionFrailejones
              limpiar={limpiar}
              setLimpiar={setLimpiar}
              claseFrailejon={"Espeletia"}
              primerParrafo={"Crece entre 5 y 20 cm por año."}
              segundoParrafo={
                " Es capaz de almacenar hasta 2 litros de agua por día."
              }
              tercerparrafo={
                "En Colombia quedan muy pocos de ellos, por lo que están en peligro de extinción."
              }
            />
          )}
          {numFrailejon == 2 && (
            <DescripcionFrailejones
              limpiar={limpiar}
              setLimpiar={setLimpiar}
              claseFrailejon={"amarillo"}
              primerParrafo={
                "Es capaz de resistir las heladas de la noche y fuertes rayos del sol."
              }
              segundoParrafo={
                "El agua que produce esta especie, alimenta la Gran Cuenca del Río Magdalena."
              }
              tercerparrafo={
                "Crecen en promedio de 1 a 2 cm por año y están en la Cordillera Central. "
              }
            />
          )}
          {numFrailejon == 3 && (
            <DescripcionFrailejones
              limpiar={limpiar}
              setLimpiar={setLimpiar}
              claseFrailejon={"Blanco"}
              primerParrafo={
                "Ayuda a regular la temperatura y la humedad del páramo."
              }
              segundoParrafo={
                "El cóndor de los Andes usa estos frailejones para descansar, dormir, observar su entorno o comer."
              }
              tercerparrafo={
                "Están repartidas en los páramos de la Cordillera Oriental."
              }
            />
          )}
        </div>
        <div className="BoxDosmilTexto BoxesTextEnd flex-center flex-col justify-evenly z-0 relative">
          <p className="PrimerTextoDosmil font-bold uppercase tamanoTitulos tracking-widest whitespace-nowrap">
            CADA FRAILEJÓN <br />
            SEMBRADO <br />
            ES UN LEGADO <br /> QUE TRASCIENDE <br />
            EN EL TIEMPO.
          </p>
          <Button handleClick={() => setNumFrailejon(1)} text={"CONÓCELOS"} />
          <p className="SegundoTextoDosmil font-bold uppercase tamanoTitulos tracking-widest whitespace-nowrap">
            {numFrailejon == 1 && (
              <span ref={parrafoFrailejon}>
                Sembraremos <br />
                frailejón
                <br /> espeletia
                <br /> sp.
              </span>
            )}
            {numFrailejon == 2 && (
              <span ref={parrafoFrailejon}>
                Sembraremos <br />
                Frailejón Amarillo
                <br />
                espeletia lopezii
              </span>
            )}
            {numFrailejon == 3 && (
              <span ref={parrafoFrailejon}>
                y el endémico <br />
                Frailejón Blanco
                <br />
                espeletia Incana.
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dosmilfrailejones;
