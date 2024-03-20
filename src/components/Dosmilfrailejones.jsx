import React, { useEffect, useRef, useState } from "react";
import DescripcionFrailejones from "./DescripcionFrailejones";

import gsap from "gsap";
import Button from "./Button";
import IconSlideNextPrev from "./IconSlideNextPrev";
import { Opacidad3, TextoAbajoArriba3, frailejon } from "../animations/gsap";

const isMobile = window.innerWidth <= 1024;
const rapido = 0.5;
const normal = 1;
const medio = 1.5;
const lento = 2;

const Dosmilfrailejones = ({ numFrailejon, setNumFrailejon, setTrasladar }) => {
  const parrafoFrailejon = useRef(null);
  const [limpiar, setLimpiar] = useState(false);
  const limpiarPuntos = () => {
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
      TextoAbajoArriba3(".dosmilFrailejones .PrimerTextoDosmil");
      TextoAbajoArriba3(".dosmilFrailejones .parrafodescripcion", 0.3);
      Opacidad3(".dosmilFrailejones .btnconoce", 0, 1);

      gsap.to(".SegundoTextoDosmil", { display: "none" });
      gsap.to(".Blanco", { opacity: 0, duration: 2 });
      gsap.to(".amarillo", { opacity: 0, duration: 2 });
      gsap.to(".Espeletia", { opacity: 0, duration: 2 });
    }
    if (numFrailejon == 1) {
      frailejon(1, 0, 0, rapido, normal, isMobile);
    }
    if (numFrailejon == 2) {
      frailejon(0, 1, 0, rapido, normal, isMobile);
    }
    if (numFrailejon == 3) {
      frailejon(0, 0, 1, rapido, normal, isMobile);
    }
  }, [numFrailejon]);

  return (
    //<div className="dosmilFrailejones absolute w-full h-full z-[1] flex">
    <div className="dosmilFrailejones relative ocultarEnOrigen w-full h-full z-[1] flex">
      {numFrailejon >= 1 && (
        <span
          onClick={() => setNumFrailejon(null)}
          className="btnCloseDosMil absolute z-50 w-3 cursor-pointer right-6 top-6"
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
      <div className=" flex responsiveReverse relative w-full h-full paddingComponentes">
        <div
          className={`BoxDosmilImage lg:w-1/2 max-lg:h-1/2  bg-center BoxesImgStart flex-center z-10 relative ${
            numFrailejon >= 1 ? "Frailejonactivo" : ""
          } `}
          style={{ backgroundImage: "url(/bgParamos/Bg20milM.webp)" }}
        >
          <img
            onClick={limpiarPuntos}
            className={`Espeletia imgFrailejon"`}
            src={`/imgFrailejones/Espeletia.webp`}
            alt=""
          />
          <img
            onClick={limpiarPuntos}
            className={`amarillo imgFrailejon"`}
            src={`/imgFrailejones/amarillo.webp`}
            alt=""
          />
          <img
            onClick={limpiarPuntos}
            className={`Blanco imgFrailejon"`}
            src={`/imgFrailejones/Blanco.webp`}
            alt=""
          />
          {numFrailejon == 1 && (
            <DescripcionFrailejones
              limpiar={limpiar}
              setLimpiar={setLimpiar}
              claseFrailejon={"Espeletia"}
              primerParrafo={
                "Están adaptadas a las condiciones extremas, con una capa de pelos que reduce la pérdida de agua y protege las hojas de la radiación solar intensa."
              }
              segundoParrafo={
                "Proporciona soporte estructural a la planta, permitiéndole crecer verticalmente y alcanzar alturas que facilitan la captura de agua de la niebla."
              }
              tercerparrafo={
                "Son pequeñas, tubulares y se agrupan en la parte superior de la planta. Suelen tener colores llamativos como amarillo o anaranjado."
              }
            />
          )}
          {numFrailejon == 2 && (
            <DescripcionFrailejones
              limpiar={limpiar}
              setLimpiar={setLimpiar}
              claseFrailejon={"amarillo"}
              primerParrafo={
                "Sus hojas de color plateado o blanco son alargadas, gruesas y velludas, estas características les permite atrapar grandes cantidades de agua."
              }
              segundoParrafo={
                "Es robusto y llegan a crecer hasta un metro. Está cubierto por las hojas que muda con el paso del tiempo."
              }
              tercerparrafo={
                "Permiten la reproducción atrayendo a polinizadores como colibríes, mariposas y abejas. Suelen tener colores blancos o amarillentos."
              }
            />
          )}
          {numFrailejon == 3 && (
            <DescripcionFrailejones
              limpiar={limpiar}
              setLimpiar={setLimpiar}
              claseFrailejon={"Blanco"}
              primerParrafo={
                "Son esponjas naturales que capturan y almacenan agua de la niebla y las lluvias. Cuando se marchitan, actúan como un escudo que protege las partes vitales de la planta."
              }
              segundoParrafo={
                "Suele ser leñoso y crece hasta un centímetro por año. Es el encargado de transportar el agua recolectada desde las hojas hasta el suelo."
              }
              tercerparrafo={
                "Son importantes para la reproducción de la planta. Suelen tener colores llamativos, como amarillo, blanco o rojo, que atraen a polinizadores como colibríes, mariposas y abejas."
              }
            />
          )}
        </div>
        <div className="BoxDosmilTexto lg:w-1/2 max-lg:h-1/2 lg:h-full BoxesTextEnd flex-center flex-col justify-evenly z-0 relative">
          {numFrailejon == null && (
            <div className="anchoInicialPrimario xl:w-[80%] xs:w-[75%] flex flex-col items-center justify-evenly xl:h-4/5">
              <h2 className="PrimerTextoDosmil font-bold uppercase tamanoTitulos tracking-widest w-full">
                Elegimos 3 especies de frailejón para garantizar una buena
                siembra.
              </h2>
              <p className="parrafodescripcion text-black">
                Estas especies endémicas, criadas cuidadosamente durante 6 años
                y certificadas, son ideales para que crezcan en las altas y
                frías montañas del país.
              </p>
              <Button
                handleClick={() => setNumFrailejon(1)}
                text={"Conócelas"}
              />
            </div>
          )}

          <div className="SegundoTextoDosmil w-[65%] h-[80%] flex flex-col justify-evenly">
            {numFrailejon == 1 && (
              <>
                <h2
                  className="font-bold uppercase tamanoTitulos tracking-widest whitespace-nowrap"
                  ref={parrafoFrailejon}
                >
                  FRAILEJÓN <br />
                  AMARILLO <br />
                  ESPELETIA <br /> LOPEZII
                </h2>
                <p className="parrafodescripcion lg:whitespace-nowrap">
                  Esta especie está en peligro de extinción, su flor conocida{" "}
                  <br className="max-xl:hidden" />
                  popularmente como “cara de perro” lo convierte en el{" "}
                  <br className="max-xl:hidden" />
                  frailejón más emblemático del país.
                </p>
              </>
            )}
            {numFrailejon == 2 && (
              <>
                <h2
                  className="font-bold uppercase tamanoTitulos tracking-widest whitespace-nowrap"
                  ref={parrafoFrailejon}
                >
                  FRAILEJÓN <br /> PLATEADO <br />
                  ESPELETIA <br />
                  INCANA
                </h2>
                <p className="parrafodescripcion lg:whitespace-nowrap">
                  Esta especie endémica está en vía de extinción.{" "}
                  <br className="max-xl:hidden" />
                  Se distingue por sus hojas plateadas y su forma de roseta,{" "}
                  <br className="max-xl:hidden" /> lo que le da una apariencia
                  única y llamativa. Crece entre{" "}
                  <br className="max-xl:hidden" /> los 3200 y los 3900 m s. n.
                  m.
                </p>
              </>
            )}
            {numFrailejon == 3 && (
              <>
                <h2
                  className="font-bold uppercase tamanoTitulos tracking-widest whitespace-nowrap"
                  ref={parrafoFrailejon}
                >
                  FRAILEJÓN
                  <br /> espeletia
                  <br /> sp.
                </h2>
                <p className="parrafodescripcion lg:whitespace-nowrap">
                  Emblemática de los páramos de los Andes en{" "}
                  <br className="max-xl:hidden" />
                  América del Sur. Se caracteriza por su gran tamaño,{" "}
                  <br className="max-xl:hidden" /> hojas gruesas y velludas, y
                  su forma única de roseta. <br className="max-xl:hidden" />
                  Su presencia también ayuda a proteger el suelo de{" "}
                  <br className="max-xl:hidden" />
                  la erosión y a regular el clima local.
                </p>
              </>
            )}
            {numFrailejon >= 1 && (
              //          <div className="boxBntSlide lg:w-1/2 xs:w-full min-h-1 absolute lg:bottom-12 xs:bottom-4 right-0 flex justify-evenly z-10">
              <div className="boxBntSlide w-full min-h-1 flex justify-between z-10">
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
                  } btnSlide cursor-pointer`}
                >
                  <span className="previw btnBorderyellow text-xs">atras</span>
                </span>
                <span
                  onClick={() => {
                    if (numFrailejon >= 3) {
                      setTrasladar(2);
                    } else {
                      setNumFrailejon(numFrailejon + 1);
                    }
                  }}
                  className={`  btnSlide cursor-pointer`}
                >
                  <span
                    className={`${
                      numFrailejon == 3 ? "bg-white border-0 font-bold" : ""
                    } previw btnBorderyellow text-xs`}
                  >
                    {numFrailejon == 3 ? "Primera siembra" : "Siguiente"}
                  </span>
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dosmilfrailejones;
