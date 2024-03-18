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
  show360View,
  setShow360View,
  toggle360View,
}) => {
  const [animatedNumber, setAnimatedNumber] = useState(2024);
  const [isIframeLoaded, setIframeLoaded] = useState(false);
  const iframeRef = useRef(null);

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

  const obtenerContenido = (inicio) => {
    switch (inicio) {
      case 3:
        return {
          parrafo: "El año en que naciste nuestros páramos se veían así:",
          urlKuala:
            "https://kuula.co/share/collection/7c9xt?logo=-1&info=0&fs=1&vr=1&autorotate=0.04&thumbs=3&margin=11&inst=es",
        };
      case 4:
        return {
          parrafo:
            "En promedio, cada diez años perdemos 877,000 hectáreas de páramo.",
          urlKuala:
            "https://kuula.co/share/collection/7cFNQ?logo=-1&info=0&fs=1&vr=1&autorotate=0.04&thumbs=3&margin=11&inst=es",
        };
      case 5:
        return {
          parrafo:
            "Desde la década de los 2000, perdimos el 79% de área de páramo entre Cundinamarca y Boyacá.",
          urlKuala:
            "https://kuula.co/share/collection/7cFGQ?logo=-1&info=0&fs=1&vr=1&autorotate=0.04&thumbs=3&margin=11&inst=es",
        };
      case 6:
        return {
          parrafo:
            "Tristemente, entre el 2000 y el 2015 se quemó el 18% del área total del páramo de Sumapaz.",
          urlKuala:
            "https://kuula.co/share/collection/7cFYF?logo=-1&info=0&fs=1&vr=1&autorotate=0.04&thumbs=3&margin=11&inst=es",
        };
      case 7:
        return {
          parrafo:
            "Entre el 2015 y el 2020, perdimos 20% de nuestros páramos de la Cordillera Oriental.",
          urlKuala:
            "https://kuula.co/share/collection/7cFP2?logo=-1&info=0&fs=1&vr=1&autorotate=0.04&thumbs=3&margin=11&inst=es",
        };
      case 8:
        return {
          parrafo:
            "Si no hacemos nada, para el 2030, el complejo Tota-Bijagual-Mamapacha habrá perdido 35% de vegetación.",
          urlKuala:
            "https://kuula.co/share/collection/7clb5?logo=-1&info=0&fs=1&vr=1&autorotate=0.04&thumbs=3&margin=11&inst=es",
        };
      case 9:
        return {
          parrafo:
            "La pérdida de páramos en las próximas décadas traerá consigo deslizamientos y tragedias ambientales.",
          urlKuala:
            "https://kuula.co/share/collection/7clb5?logo=-1&info=0&fs=1&vr=1&autorotate=0.04&thumbs=3&margin=11&inst=es",
        };
      case 10:
        return {
          parrafo:
            "Nuestro presente es el mejor momento para cambiar esta realidad. Salvemos nuestros páramos.",
          urlKuala:
            "https://kuula.co/share/collection/7clb5?logo=-1&info=0&fs=1&vr=1&autorotate=0.04&thumbs=3&margin=11&inst=es",
        };

      default:
        return { parrafo: "", urlKuala: "" };
    }
  };
  const contenido = obtenerContenido(inicio);

  useEffect(() => {
    if (contenido.urlKuala && !isIframeLoaded) {
      const iframe = document.createElement("iframe");
      iframe.src = contenido.urlKuala;
      iframe.onload = () => {
        setIframeLoaded(true);
      };
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
    }
  }, [contenido.urlKuala, isIframeLoaded]);

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

{inicio >= 3 && inicio <= 10 && (
      <div className="gradiente">
        {!show360View && (
          <TextOnboarding
            TextEfect={TextEfect}
            parrafo={contenido.parrafo}
            on360IconClick={toggle360View}
          />
        )}

<span className="absolute w-full h-full left-0 top-0 z-[1]">
            {isIframeLoaded ? (
              <EmbeddedIframe urlKuala={contenido.urlKuala} ref={iframeRef} />
            ) : (
              <div>Loading...</div>
            )}
        </span>
      </div>
    )}    </>
  );
};

export default Fecha;
