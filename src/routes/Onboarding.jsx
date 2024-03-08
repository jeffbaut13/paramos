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
  const Mobile = window.innerWidth <= 1024;
  const Tablet = window.innerWidth >= 600 && window.innerWidth <= 1024;
  const fechaRef = useRef(null);
  const TextEfect = useRef(null);
  const videobg = useRef(null);
  const [numero, setNumero] = useState(10);

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
          backgroundPosition: "center",
          backgroundSize: `${Tablet ? "cover" : "102%"} `,
        },
        {
          backgroundPosition: "center",
          backgroundSize: `${Tablet ? "cover" : "100%"} `,
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

  useEffect(() => {
    const precargarImagenes = () => {
      for (let i = 1; i <= 144; i++) {
        const img = new Image();
        img.src = `/frames/capa${i}.jpg`;
      }
    };
  
    precargarImagenes();
  }, []);


  const containerClass = getContainerClass(inicio, Mobile);

  return (
    <div ref={padre} className="h-[600vh] onBoarding">
      {/* <Grilla /> */}
      <div className="fixed top-0 left-0 bg-black bg-opacity-40 z-10 w-full h-full"></div>
      <div
        ref={bgOverlay}
        className="overflow-hidden backgroundImage fixed w-full h-full z-0 flex-center-col "
      >
        <img
          className="absoluteImg w-full h-full"
          ref={imagen2}
          src={`/OnboardingBgBack/HOME-FRAILEJONES-${inicio}T.webp`}
          alt=""
        />

        <img
          className="absoluteImg img2 w-full h-full"
          ref={imagen}
          src={"/OnboardingBgBack/HOME-FRAILEJONES-2T.webp"}
          alt=""
        />
      </div>

      <div
        ref={border}
        className={`${
          inicio >= 3 ? containerClass : ""
        } contain maxW borderWhite absoluteCenter z-20 flex-center-col p-8 overflow-hidden`}
      >
        {inicio >= 2 && (
          <div ref={videobg} className="videobg absolute w-full h-full">
            <video className="Moisesbgvid" playsInline autoPlay muted loop>
              <source src={"/videoIntro.mp4"} type="video/mp4" />
            </video>
          </div>
        )}

        <Fecha
          videobg={videobg}
          fechaRef={fechaRef}
          TextEfect={TextEfect}
          border={border}
          inicio={inicio}
          inputNumber={inputNumber}
          setinicio={setinicio}
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
