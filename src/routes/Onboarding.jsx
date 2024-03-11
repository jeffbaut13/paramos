import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Fecha from "../components/Fecha";
import FechasLateral from "../components/FechasLateral";
import Grilla from "../components/Grilla";
import { Link } from "react-router-dom";
import { Opacidad, scrolltrigerFunction } from "../animations/gsap";
import { getContainerClass, switchProcentage } from "../helpers/switchs";
import Loading from "../components/Loading"; // Asegúrate de tener este componente o reemplázalo por tu componente de carga real.
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
  const [mostrarLoading, setMostrarLoading] = useState(true); // Estado para el componente de carga

  useEffect(() => {
    setinicio(1);
    const url = window.location.href;
    if (url.endsWith("/onboarding")) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    scrolltrigerFunction(padre, (self) => {
      const scrollPercentage = self.progress * 100;
      switchProcentage(setinicio, scrollPercentage);
    });
  }, [inicio]);

  useEffect(() => {
    const timer = setTimeout(() => setMostrarLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

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
      { scale: 1 },
      { scale: 1.05, ease: "power2.out", duration: 1 }
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

  useEffect(() => {
    if (inicio >= 2) {
      const interval = setInterval(() => {
        setNumero((prevNumero) => {
          if (prevNumero < 144) {
            return prevNumero + 1;
          } else {
            clearInterval(interval);
            return prevNumero; // Mantenemos el último número para evitar reiniciar o ir más allá de 144.
          }
        });
        console.log("frames donde estaba el video " + numero);
      }, 42);

      return () => clearInterval(interval); // Limpieza al desmontar o cambiar de estado 'inicio'
    }
  }, [inicio]);

  if (mostrarLoading) {
    return <Loading />; // Muestra el componente de carga mientras `mostrarLoading` es true
  }

  // A continuación, el contenido principal del componente Onboarding...
  // Asegúrate de incluir el resto de tu código aquí.
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
            <img
              src={`/frames/capa${numero}.webp`}
              alt=""
              className="w-full h-full"
            />
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
              {inicio < 10 ? "OMITIR" : "SIGUIENTE"}
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Onboarding;
