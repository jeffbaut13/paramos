import React, { useEffect, useRef, useState } from "react";
import DigitarFecha from "./input";
import gsap from "gsap";
import { TextOnboarding } from "./TextOnboarding";
import { ScrollAnimation } from "./ScrollAnimation";
import { TextoAbajoArriba } from "../animations/gsap";

const Fecha = ({
  inicio,
  setinicio,
  inputNumber,
  setInputNumber,
  handleIniciarContador,
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
    handleIniciarContador();
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
      setinicio(3);
      document.body.style.overflowY = "visible";
    }, 5000);
  };

  return (
    <>
      {inicio == 1 && (
        <>
          <div className="fadeIn gradiente">
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

      <div className="gradiente">
        {inicio == 3 && (
          <>
            <TextOnboarding
              TextEfect={TextEfect}
              parrafo={`El año en que naciste nuestros páramos se veían así:`}
            />
            <ScrollAnimation />
          </>
        )}
        {inicio == 4 && (
          <TextOnboarding
            TextEfect={TextEfect}
            parrafo={`En promedio, cada diez años perdemos 500,000 hectáreas de vegetación.`}
          />
        )}
        {inicio == 5 && (
          <TextOnboarding
            TextEfect={TextEfect}
            parrafo={`Para el año ${
              inputNumber + 20
            }, esta pérdida será de más de 670,000 canchas de fútbol.`}
          />
        )}
        {inicio == 6 && (
          <TextOnboarding
            TextEfect={TextEfect}
            parrafo={`En el ${
              inputNumber + 30
            }, los incendios forestales arrasaron un 30% de la vegetación.`}
          />
        )}
        {inicio == 7 && (
          <TextOnboarding
            TextEfect={TextEfect}
            parrafo={`Con la desaparición acelerada de frailejones, en el ${
              inputNumber + 40
            } tuvimos una reducción considerable del agua potable`}
          />
        )}
        {inicio == 8 && (
          <TextOnboarding
            TextEfect={TextEfect}
            parrafo={`Para el ${
              inputNumber + 50
            }, más de 4,000 especies de plantas y animales se extinguirían.`}
          />
        )}
        {inicio == 9 && (
          <TextOnboarding
            TextEfect={TextEfect}
            parrafo={`De seguir deforestando nuestros páramos, en ${
              inputNumber + 60
            } tendremos grandes deslizamientos y tragedias ambientales.`}
          />
        )}
        {inicio == 10 && (
          <TextOnboarding
            TextEfect={TextEfect}
            parrafo={`En el ${
              inputNumber + 70
            } habremos perdido el 20% de todos nuestros páramos, trayendo un desequilibrio irreparable.`}
          />
        )}
        {inicio == 11 && (
          <TextOnboarding
            TextEfect={TextEfect}
            parrafo={`Nuestro presente es el mejor momento para cambiar esta realidad. <br/><br/> Salvemos nuestros páramos.`}
          />
        )}
      </div>
    </>
  );
};

export default Fecha;
