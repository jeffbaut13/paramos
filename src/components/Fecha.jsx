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

  useEffect(() => {
    gsap.fromTo(
      iframeRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 3, ease: "power1.inOut" }
    );
    gsap.fromTo(
      ".icon360",
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 3, ease: "power1.inOut" }
    );
  }, [inicio, iframeRef, isIframeLoaded]);

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
          parrafo:
            "cuando naciste nuetros páramos eran fuertes y sanos, se veían así:",
          urlKuala:
            "https://kuula.co/share/collection/7c9xt?logo=-1&info=0&fs=1&vr=1&autorotate=0.04&thumbs=3&margin=11&inst=es",
        };
      case 4:
        return {
          parrafo:
            "a tus 10 años, 877.000 hectáras de estos frailejones ya no existían.",
          urlKuala:
            "https://kuula.co/share/collection/7cFNQ?logo=-1&info=0&fs=1&vr=1&autorotate=0.04&thumbs=3&margin=11&inst=es",
        };
      case 5:
        return {
          parrafo:
            "cuando tenías 20 años, el 79% de agua de los páramos de boyacá y cundinamarca ya no existía.",
          urlKuala:
            "https://kuula.co/share/collection/7cFGQ?logo=-1&info=0&fs=1&vr=1&autorotate=0.04&thumbs=3&margin=11&inst=es",
        };
      case 6:
        return {
          parrafo:
            "a tus 30 años, los incendios habían arrasado con el 18% del páramo de sumapaz.",
          urlKuala:
            "https://kuula.co/share/collection/7cFYF?logo=-1&info=0&fs=1&vr=1&autorotate=0.04&thumbs=3&margin=11&inst=es",
        };
      case 7:
        return {
          parrafo:
            "para cuando tengas 40 años, el 20% de las especies que habitan en los páramos de la cordillera oriental no estarán.",
          urlKuala:
            "https://kuula.co/share/collection/7cFP2?logo=-1&info=0&fs=1&vr=1&autorotate=0.04&thumbs=3&margin=11&inst=es",
        };
      case 8:
        return {
          parrafo:
            "si no hacemos nada, cuando llegues a los 50, perderemos el 35% de todo el complejo que da agua a boyaca y casanare.",
          urlKuala:
            "https://kuula.co/share/collection/7clb5?logo=-1&info=0&fs=1&vr=1&autorotate=0.04&thumbs=3&margin=11&inst=es",
        };
      case 9:
        return {
          parrafo:
            "estas pérdidas pueden traer a futuro deslizamientos, enfermedades, desabastecimiento de agua y más tragedias ambientales.",
          urlKuala:
            "https://kuula.co/share/collection/7clb5?logo=-1&info=0&fs=1&vr=1&autorotate=0.04&thumbs=3&margin=11&inst=es",
        };
      case 10:
        return {
          parrafo:
            "nuestro presente es el mejor momento para cambiar esta realidad. unámonos y salvemos nuestros páramos.",
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
      iframe.style.display = "none";
      document.body.appendChild(iframe);
    }
  }, [contenido.urlKuala, isIframeLoaded]);

  return (
    <>
      {inicio == 1 && (
        <>
          <div className="fadeIn">
            <h1 className="2xl:text-4xl xl:text-2xl xs:text-base font-semibold letterSpacing">
              Queremos que veas cómo han cambiado nuestros páramos.
            </h1>
            <h1 className="2xl:text-3xl xl:text-xl xs:text-sm font-light tracking-[0.21em]">
              Ingresa tu año de nacimiento
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
            <TextOnboarding TextEfect={TextEfect} parrafo={contenido.parrafo} />
          )}

          <span className="absolute w-full h-full left-0 top-0 z-[1]">
            {isIframeLoaded ? (
              <EmbeddedIframe
                urlKuala={contenido.urlKuala}
                node360={iframeRef}
              />
            ) : (
              <div>Loading...</div>
            )}
          </span>
        </div>
      )}{" "}
    </>
  );
};

export default Fecha;
