import React, { useEffect, useRef, useState } from "react";
import DigitarFecha from "./input";
import gsap from "gsap";
import { TextOnboarding } from "./TextOnboarding";
import { ScrollAnimation } from "./ScrollAnimation";
import { TextoAbajoArriba } from "../animations/gsap";
import MouseScroll from "./MouseScroll";
import EmbeddedIframe from "./Embed360";

const Fecha = ({
  videobg,
  inicio,
  setinicio,
  inputNumber,
  setInputNumber,
  fechaRef,
  TextEfect,
}) => {
  const [animatedNumber, setAnimatedNumber] = useState(2024);

  useEffect(() => {
    TextoAbajoArriba(fechaRef);
    TextoAbajoArriba(TextEfect);
  }, [inicio]);

  const easeOutQuad = (t) => 1 - (1 - t) * (1 - t);
  const easeInQuart = (t) => t * t * t * t;

  const startAnimation = () => {
    const targetNumber = parseInt(inputNumber, 10);
    const animationDuration = 3000; // 3 segundos
    const animationInterval = 30; // Intervalo de actualización en milisegundos
    const frames = Math.ceil(animationDuration / animationInterval);

    let currentFrame = 0;
    const totalDifference = animatedNumber - targetNumber;
    const decelerationPoint = Math.ceil(0.6 * frames);

    const animationIntervalId = setInterval(() => {
      const t = currentFrame / frames;

      const ease =
        currentFrame < decelerationPoint ? easeOutQuad(t) : easeInQuart(t);

      const difference =
        currentFrame < decelerationPoint
          ? Math.ceil(totalDifference / decelerationPoint)
          : Math.ceil(totalDifference / (frames - decelerationPoint));

      setAnimatedNumber((prevNumber) =>
        Math.max(prevNumber - difference * ease, targetNumber)
      );

      currentFrame += 1;

      if (currentFrame >= frames || animatedNumber <= targetNumber) {
        clearInterval(animationIntervalId);
        setAnimatedNumber(targetNumber);
      }
    }, animationInterval);
  };

  const handleNextClick = () => {
    setinicio(2);
    setTimeout(() => {
      startAnimation();
    }, 1000);

    setTimeout(() => {
      gsap.to(fechaRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power2.inOut",
      });
    }, 3500);

    setTimeout(() => {
      gsap.to(videobg.current, {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
      });
    }, 4800);

    setTimeout(() => {
      setinicio(3);
    }, 5000);
  };

  return (
    <>
      {inicio == 1 && (
        <>
          <div className="fadeIn">
            <h1 className="2xl:text-4xl xl:text-2xl xs:text-base font-semibold letterSpacing">
              Queremos que entiendas el daño causado
            </h1>
            <h1 className="2xl:text-3xl xl:text-xl xs:text-sm font-light tracking-[0.21em]">
              Ingresa tu año de nacimiento y vive esta experiencia
            </h1>
          </div>

          <DigitarFecha
            inputNumber={inputNumber}
            setInputNumber={setInputNumber}
            handleNextClick={handleNextClick}
          />
        </>
      )}

      {inicio == 2 && (
        <p
          ref={fechaRef}
          className="2xl:text-[25rem] xl:text-[18rem] sm:text-[13rem] xs:text-8xl font-black text-[#ffffff61]"
        >
          {Math.round(animatedNumber)}
        </p>
      )}

      {inicio == 3 && (
        <div className="gradiente">
          <TextOnboarding
            TextEfect={TextEfect}
            parrafo={`El año en que naciste nuestros páramos se veían así:`}
          />
        </div>
      )}
      {inicio == 4 && (
        <div className="gradiente">
          <TextOnboarding
            TextEfect={TextEfect}
            parrafo={`En promedio, cada diez años perdemos 877,000 hectáreas de páramo.`}
          />
          <span className="absolute w-full h-full left-0 top-0 z-[-1]">
            <EmbeddedIframe />
          </span>
        </div>
      )}
      {inicio == 5 && (
        <div className="gradiente">
          <TextOnboarding
            TextEfect={TextEfect}
            parrafo={`Desde la década de los 2000, perdimos el 79% de área de páramo entre Cundinamarca y Boyacá.`}
          />
        </div>
      )}
      {inicio == 6 && (
        <div className="gradiente">
          <TextOnboarding
            TextEfect={TextEfect}
            parrafo={`Tristemente, entre el 2000 y el 2015 se quemó el 18% del área total del páramo de Sumapaz.`}
          />
        </div>
      )}
      {inicio == 7 && (
        <div className="gradiente">
          <TextOnboarding
            TextEfect={TextEfect}
            parrafo={`Entre el 2015 y el 2020, perdimos 20% de nuestros páramos de la Cordillera Oriental.`}
          />
        </div>
      )}
      {inicio == 8 && (
        <div className="gradiente">
          <TextOnboarding
            TextEfect={TextEfect}
            parrafo={`Si no hacemos nada, para el 2030, el complejo Tota-Bijagual-Mamapacha habrá perdido 35% de vegetación.`}
          />
        </div>
      )}
      {inicio == 9 && (
        <div className="gradiente">
          <TextOnboarding
            TextEfect={TextEfect}
            parrafo={`La pérdida de páramos en las próximas décadas traerá consigo deslizamientos y tragedias ambientales.`}
          />
        </div>
      )}
      {inicio == 10 && (
        <div className="gradiente">
          <TextOnboarding
            TextEfect={TextEfect}
            parrafo={`Nuestro presente es el mejor momento para cambiar esta realidad. <br/><br/> Salvemos nuestros páramos.`}
          />
        </div>
      )}
      {/*  {inicio == 11 && (
          <TextOnboarding
            TextEfect={TextEfect}
            parrafo={`Nuestro presente es el mejor momento para cambiar esta realidad. <br/><br/> Salvemos nuestros páramos.`}
          />
        )} */}
    </>
  );
};

export default Fecha;
