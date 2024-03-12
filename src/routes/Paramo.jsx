import { useEffect, useRef, useState } from "react";
import Origen from "../components/Origen";
import gsap from "gsap";
import Dosmilfrailejones from "../components/Dosmilfrailejones";
import { CapituloMoises } from "../components/CapituloMoises";
import Travesia from "../components/Travesia";
import Grilla from "../components/Grilla";
import Conocelosparamos from "../components/Conocelosparamos";
import Contacto from "../components/Contacto";
import Descargable from "../components/Descargable";
import { timeLine } from "../animations/timelineparamos";
import BackgroundTransition from "../components/BackgroundTransition";
import VideoComponent from "../components/videclud";
import { switchProcentageZindex } from "../helpers/switchs";
import NavBar from "../components/NavBar";
import { transitionSection } from "../animations/gsap";
import Xperience from "../components/Xperience";
import DocumentalMoises from "../components/DocumentalMoises";

function App() {
  const main = useRef(null);
  const [numFrailejon, setNumFrailejon] = useState(null);
  const [travesiaReverse, setTravesiaReverse] = useState(false);
  const [active360, setActive360] = useState(1);
  const [activeButton, setActiveButton] = useState("Origen");
  const [play, setPlay] = useState(false);
  const [playCapitulo, setPlayCapitulo] = useState(false);
  const [playMoises, setPlayMoises] = useState(false);
  const [itemActive, setItemActive] = useState(0);
  const [scrollPercentage, setScrollPercentage] = useState(1);
  const [scrollPercentageTwo, setScrollPercentageTwo] = useState(0);

  const [trasladar, setTrasladar] = useState(0);
  let porcentaje = 12.5;
  let velocidadTransicion = 0.3;
  useEffect(() => {
    if (trasladar == 0) {
      gsap.to(".contenedor", {
        y: "-0",
        ease: "power1.inOut",
        duration: velocidadTransicion,
      });
      setScrollPercentageTwo(0);
      setActiveButton("Origen");
      setScrollPercentage(1);
      timeLine();
    } else if (trasladar == 1) {
      gsap.to(".contenedor", {
        y: "-100%",
        ease: "power1.inOut",
        duration: velocidadTransicion,
      });
      setScrollPercentageTwo(porcentaje);
      setItemActive(0);
      setActiveButton("Nuestro propósito");
      setScrollPercentage(2);
      setNumFrailejon(null);
      timeLine();
      gsap.to(".blurParamos", { opacity: 0, duration: 1 });
    } else if (trasladar == 2) {
      gsap.to(".contenedor", {
        y: "-200%",
        ease: "power1.inOut",
        duration: velocidadTransicion,
      });
      setScrollPercentageTwo(porcentaje * 2);
      setActiveButton("2.000 Frailejones");
      setScrollPercentage(3);
      setPlayCapitulo(false);
      timeLine();
      gsap.to(".blurParamos", { opacity: 0, duration: 1 });
    } else if (trasladar == 3) {
      gsap.to(".contenedor", {
        y: "-300%",
        ease: "power1.inOut",
        duration: velocidadTransicion,
      });
      setScrollPercentageTwo(porcentaje * 3);
      setActiveButton("Los páramos");
      setPlayCapitulo(true);
      setScrollPercentage(4);
      setTravesiaReverse(false);

      gsap.to(".blurParamos", { opacity: 0, duration: 1 });
    } else if (trasladar == 4) {
      gsap.to(".contenedor", {
        y: "-400%",
        ease: "power1.inOut",
        duration: velocidadTransicion,
      });
      setPlayCapitulo(false);
      setScrollPercentageTwo(porcentaje * 4);
      setScrollPercentage(5);
      setTravesiaReverse(true);
      setPlay(false);
      timeLine();
      gsap.to(".blurParamos", { opacity: 0, duration: 1 });
    } else if (trasladar == 5) {
      gsap.to(".contenedor", {
        y: "-500%",
        ease: "power1.inOut",
        duration: velocidadTransicion,
      });
      setActiveButton("Más allá de la siembra");
      setScrollPercentageTwo(porcentaje * 5);
      setScrollPercentage(6);
      setPlayMoises(false);
      timeLine();
      gsap.to(".blurParamos", { opacity: 0, duration: 1 });
    } else if (trasladar == 6) {
      gsap.to(".contenedor", {
        y: "-600%",
        ease: "power1.inOut",
        duration: velocidadTransicion,
      });
      setActiveButton("Primer guardián");
      setScrollPercentageTwo(porcentaje * 6);
      setScrollPercentage(7);
      setPlay(false);
      timeLine();
      gsap.to(".blurParamos", { opacity: 0, duration: 1 });
    } else if (trasladar == 7) {
      gsap.to(".contenedor", {
        y: "-700%",
        ease: "power1.inOut",
        duration: velocidadTransicion,
      });
      setActiveButton("Contacto");
      setScrollPercentageTwo(porcentaje * 7);
      setScrollPercentage(8);
      setPlayMoises(false);

      gsap.to(".blurParamos", { opacity: 0, duration: 1 });
    } else if (trasladar == 8) {
      gsap.to(".contenedor", {
        y: "-800%",
        ease: "power1.inOut",
        duration: velocidadTransicion,
      });
      setActiveButton("Cuéntale a todos");
      setScrollPercentageTwo(porcentaje * 8);
      setScrollPercentage(9);
      gsap.fromTo(".blurParamos", { opacity: 0 }, { opacity: 1, duration: 1 });
    }
  }, [trasladar, main, activeButton, numFrailejon, scrollPercentage]);

  return (
    <div ref={main} className="maxW h-[700vh] relative">
      <div className=" bg-gradient-to-t from-transparent from-85% to-[#0000009e] w-full h-full fixed left-0  z-[5]"></div>
      {/* <Grilla /> */}

      <BackgroundTransition />
      {active360 == 2 && (
        <span
          onClick={() => setActive360(3)}
          className="close cursor-pointer fixed top-[7%] right-[12%] w-4 z-[60]"
        >
          <img src="/svg/close.svg" alt="" />
        </span>
      )}
      <div className="blurParamos  fixed top-0 left-0 bg2 z-10 w-full h-full opacity-0"></div>
      <div className="cajaParaelementos maxW fixed z-50 rounded-3xl bg-white  top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%] xl:w-[80%] xs:w-[85%] xl:h-[80%] xl:max-h-[874px] xs:h-[80%]">
        <NavBar
          activeButton={activeButton}
          scrollPercentage={scrollPercentage}
          scrollPercentageTwo={scrollPercentageTwo}
          trasladar={trasladar}
          setTrasladar={setTrasladar}
        />
        <VideoComponent />
        <VideoComponent />
        <VideoComponent />
        <div className=" mainParamos relative rounded-3xl overflow-hidden bg-white w-full h-full ">
          <div className="contenedor">
            <Conocelosparamos
              itemActive={itemActive}
              setItemActive={setItemActive}
            />
            <Origen active360={active360} setActive360={setActive360} />
            <Dosmilfrailejones
              numFrailejon={numFrailejon}
              setNumFrailejon={setNumFrailejon}
            />
            <CapituloMoises
              playCapitulo={playCapitulo}
              setPlayCapitulo={setPlayCapitulo}
            />
            <Travesia
              travesiaReverse={travesiaReverse}
              setTravesiaReverse={setTravesiaReverse}
            />
            <Xperience play={play} setPlay={setPlay} />
            <DocumentalMoises
              playMoises={playMoises}
              setPlayMoises={setPlayMoises}
            />
            <Contacto />
            <Descargable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
