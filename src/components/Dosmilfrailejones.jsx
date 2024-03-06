import React, { useEffect, useRef } from "react";
import DescripcionFrailejones from "./DescripcionFrailejones";

import gsap from "gsap";

const Dosmilfrailejones = ({ numFrailejon }) => {
  const parrafoFrailejon = useRef(null);

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
  }, [numFrailejon]);

  return (
    <div className="dosmilFrailejones absolute w-full h-full z-[1] flex">
      <div className=" flex responsiveReverse relative w-full h-full paddingComponentes">
        <div
          className={`BoxDosmilImage   bg-center BoxesImgStart flex-center z-10 relative ${
            numFrailejon >= 1 ? "Frailejonactivo" : ""
          } `}
          style={{ backgroundImage: "url(/bgParamos/Bg20mil.webp)" }}
        >
          {numFrailejon == 1 && (
            <DescripcionFrailejones
              tituloFrailejon={"FRAILEJÓN ESPELETIA SP"}
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
              tituloFrailejon={"FRAILEJON AMARILLO <br/>ESPELETIA LOPEZII"}
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
              tituloFrailejon={"FRAILEJON BLANCO <br/>ESPELETIA INCANA"}
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
        <div className="BoxDosmilTexto   BoxesTextEnd flex-center z-0 relative">
          <p className="PrimerTextoDosmil font-bold uppercase tamanoTitulos tracking-widest whitespace-nowrap">
            Llevaremos <br /> <span className="font-black">2,000 </span> <br />
            frailejones <br />
            al corazón <br />
            de nuestros
            <br /> páramos.
          </p>
          <p className="SegundoTextoDosmil font-bold uppercase tamanoTitulos tracking-widest whitespace-nowrap">
            {numFrailejon == 1 && (
              <span ref={parrafoFrailejon}>
                Gracias <br />a los viveros <br />
                de Ocetá, <br />
                logramos <br />
                germinar <br />
                especies nativas.
              </span>
            )}
            {numFrailejon == 2 && (
              <span ref={parrafoFrailejon}>
                Haremos un <br />
                seguimiento <br />
                permanente <br />a cada <br />
                frailejón <br />
                sembrado.
              </span>
            )}
            {numFrailejon == 3 && (
              <span ref={parrafoFrailejon}>
                Este es un <br />
                proyecto <br />
                pensado y <br />
                construido <br />
                para los <br />
                próximos <br />4 años.
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dosmilfrailejones;
