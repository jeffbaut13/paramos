import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Fecha from "../components/Fecha";
import FechasLateral from "../components/FechasLateral";
// import Grilla from "../components/Grilla"; // Comentado, pero puedes descomentar si es necesario
import { Link } from "react-router-dom";
import { Opacidad, scrolltrigerFunction } from "../animations/gsap";
import { getContainerClass, switchProcentage } from "../helpers/switchs";
import Loading from "../components/Loading";
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

  const [isRouterReady, setIsRouterReady] = useState(false);
  const [isLoadingVisible, setIsLoadingVisible] = useState(true);

  useEffect(() => {
    const routerTimeout = setTimeout(() => {
      setIsRouterReady(true); // Después de 100ms, indica que el RouterProvider está listo.
    }, 100);

    const loadingTimeout = setTimeout(() => {
      setIsLoadingVisible(false); // Después de 4 segundos, oculta el componente de carga.
    }, 4000);

    return () => {
      clearTimeout(routerTimeout);
      clearTimeout(loadingTimeout);
    };
  }, []);

  useEffect(() => {
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
    const precargarRecursos = () => {
      // Precargar el video
      const video = document.createElement("video");
      video.src = "/videoIntro.mp4";
      video.type = "video/mp4";
      video.preload = "auto";
      document.body.appendChild(video);
      video.style.display = "none";

      // Precargar las imágenes de fondo
      const imagenesDeFondo = [
        "/OnboardingBgBack/HOME-FRAILEJONES-1T.webp",
        "/OnboardingBgBack/HOME-FRAILEJONES-2T.webp",
        "/OnboardingBgBack/HOME-FRAILEJONES-3T.webp",
        "/OnboardingBgBack/HOME-FRAILEJONES-4T.webp",
      ];

      imagenesDeFondo.forEach((src) => {
        const img = new Image();
        img.src = src;
      });

      // Asegúrate de limpiar el video del DOM al desmontar
      return () => {
        document.body.removeChild(video);
      };
    };

    precargarRecursos();
  }, []);

  const containerClass = getContainerClass(inicio, Mobile);

  return (
    <>
      {isLoadingVisible && <Loading />}
      {isRouterReady && (
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
                <div className="absolute top-0 left-0 lg:bg-gradient-to-r lg:from-[#000000ad] max-lg:bg-[#000000ad] lg:to-[#00000029] w-full h-full z-[-1]"></div>

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
                  {inicio < 10 ? "OMITIR" : "SIGUIENTE"}
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Onboarding;
