import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Fecha from "../components/Fecha";
import FechasLateral from "../components/FechasLateral";
import Grilla from "../components/Grilla";
import { Link } from "react-router-dom";
import { Opacidad, scrolltrigerFunction } from "../animations/gsap";
import { getContainerClass, switchProcentage } from "../helpers/switchs";
gsap.registerPlugin(ScrollTrigger);

const Onboarding = () => {
  const [inicio, setinicio] = useState(1);
  const padre = useRef(null);
  const [inputNumber, setInputNumber] = useState("");
  const imagen = useRef(null);
  const imagen2 = useRef(null);
  const barra = useRef(null);
  const bgOverlay = useRef(null);
  const border = useRef(null);
  const isMobile = window.innerWidth <= 1024;
  const isTablet = window.innerWidth >= 600 && window.innerWidth <= 1024;
  const fechaRef = useRef(null);
  const TextEfect = useRef(null);
  const [numero, setNumero] = useState(10);
  const [iniciarContador, setIniciarContador] = useState(false);
  useEffect(() => {
    setinicio(1);
    // Obtener la URL actual
    const url = window.location.href;

    // Verificar si la URL termina con "/onboarding"
    if (url.endsWith("/onboarding")) {
      // Aplicar el estilo al cuerpo de la página
      document.body.style.overflow = "hidden";
    }

    // Limpiar el estilo cuando el componente se desmonta
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  useEffect(() => {
    if (inicio == 2) {
      gsap.fromTo(
        border.current,
        {
          backgroundPosition: "center",
          backgroundSize: `${isTablet ? "cover" : "100%"} `,
        },
        {
          backgroundPosition: "center",
          backgroundSize: `${isTablet ? "cover" : "120%"} `,
          ease: "power2.Out",
          duration: 1,
        }
      );
    }
    /*****************Decremento para mostrar imagenes aleatorias */
    let intervalId;
    const customEase = (t) => Math.pow(t, 4);

    const decrementarNumero = () => {
      if (numero > 1) {
        const t = 1 - (numero - 1) / 10; // Normalizar el progreso
        let velocidad = customEase(t);
        velocidad = Math.max(velocidad, 1);
        setNumero((prevNumero) =>
          prevNumero > 1 ? prevNumero - Math.round(velocidad) : 1
        );
      } else {
        clearInterval(intervalId);
        setIniciarContador(false);
      }
    };

    if (iniciarContador) {
      intervalId = setInterval(decrementarNumero, 4500 / 10);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [numero, iniciarContador]);

  const numeroMostrar = `onBg${numero}`;

  const handleIniciarContador = () => {
    setNumero(11);
    setIniciarContador(true);
  };

  useEffect(() => {
    // Configuración de ScrollTrigger para los estados de 'inicio'
    scrolltrigerFunction(padre, (self) => {
      const scrollPercentage = self.progress * 100;

      switchProcentage(setinicio, scrollPercentage);
    });
  }, [inicio]);

  useEffect(() => {
    if (inicio >= 3) {
      gsap.fromTo(
        border.current,
        {
          opacity: 0.8,
          backgroundPosition: "center",
          backgroundSize: `${isTablet ? "cover" : "102%"} `,
        },
        {
          opacity: 1,
          backgroundPosition: "center",
          backgroundSize: `${isTablet ? "cover" : "100%"} `,
          ease: "power2.inOut",
          duration: 1,
        }
      );
    }

    if (inicio == 2) {
      setTimeout(() => {
        Opacidad(imagen, 0);
      }, 5300);
    }
    gsap.fromTo(
      imagen2.current,
      {
        scale: 1,
      },
      {
        scale: 1.05,
        ease: "power2.out",
        duration: 1,
      }
    );

    Opacidad(barra, 1);
  }, [inicio]);

  const containerClass = getContainerClass(inicio, isMobile);

  return (
    <div ref={padre} className="h-[600vh] onBoarding">
      {/* <Grilla /> */}
      <div className="fixed top-0 left-0 bg-black bg-opacity-40 z-10 w-full h-full"></div>
      <div
        ref={bgOverlay}
        className="overflow-hidden backgroundImage fixed w-full h-full z-0 flex-center-col "
      >
        <img
          className="absoluteImg "
          ref={imagen2}
          src={`/OnboardingBgBack/HOME-FRAILEJONES-${inicio}T.webp`}
          alt=""
        />

        <img
          className="absoluteImg img2"
          ref={imagen}
          src={"/OnboardingBgBack/HOME-FRAILEJONES-2T.webp"}
          alt=""
        />
      </div>

      <div
        ref={border}
        className={`${inicio >= 3 ? containerClass : ""} ${
          inicio == 2 ? numeroMostrar : ""
        } contain maxW borderWhite absoluteCenter z-20 flex-center-col p-8 overflow-hidden`}
      >
        <Fecha
          fechaRef={fechaRef}
          TextEfect={TextEfect}
          border={border}
          inicio={inicio}
          inputNumber={inputNumber}
          setinicio={setinicio}
          handleIniciarContador={handleIniciarContador}
          setInputNumber={setInputNumber}
        />
        {inicio > 2 && (
          <>
            <div className="absolute top-0 left-0 bg-gradient-to-r from-[#000000ad] w-1/4 h-full"></div>

            <FechasLateral
              inicio={inicio}
              barra={barra}
              inputNumber={inputNumber}
              setInputNumber={setInputNumber}
            />

            <Link
              to={"/paramo"}
              ref={barra}
              className={`fadeIn btn-cards absolute sm:right-5 bottom-12 text-center letterSpacing`}
            >
              {inicio < 11 ? "OMITIR" : "SIGUIENTE"}
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Onboarding;
