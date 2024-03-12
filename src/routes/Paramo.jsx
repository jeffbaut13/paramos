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

  /*  useEffect(() => {
    gsap.to(main.current, {
      scrollTrigger: {
        trigger: main.current,
        start: "top top", // Comienza en la parte superior del contenedor
        end: "bottom bottom", // Termina en la parte inferior del contenedor

        onUpdate: (self) => {
          const scroll = self.progress * 100;
          setScrollPercentageTwo(scroll);
          //console.log("scroll Padre " + scroll);
          //switchProcentageZindex(scrollPercentage);

          if (scroll >= 1 && scroll < 11.11) {
            setActiveButton("Origen");
            setScrollPercentage(1);
          } else if (scroll >= 11.11 && scroll < 22.22) {
            setItemActive(0);
            setActiveButton("Nuestro propósito");
            setScrollPercentage(2);
            setNumFrailejon(null);
            gsap.to(".blurParamos", { opacity: 0, duration: 1 });
          } else if (scroll >= 22.22 && scroll < 33.33) {
            setActiveButton("2.000 Frailejones");
            setScrollPercentage(3);
            setPlayCapitulo(false);
            gsap.to(".blurParamos", { opacity: 0, duration: 1 });
          } else if (scroll >= 33.33 && scroll < 44.44) {
            setActiveButton("Los páramos");
            setPlayCapitulo(true);
            setScrollPercentage(4);
            setTravesiaReverse(false);
            gsap.to(".blurParamos", { opacity: 0, duration: 1 });
          } else if (scroll >= 44.44 && scroll < 55.55) {
            setPlayCapitulo(false);
            setScrollPercentage(5);
            setTravesiaReverse(true);
            setPlay(false);
            gsap.to(".blurParamos", { opacity: 0, duration: 1 });
          } else if (scroll >= 55.55 && scroll < 66.66) {
            setActiveButton("Más allá de la siembra");
            setScrollPercentage(6);
            setPlayMoises(false);
            gsap.to(".blurParamos", { opacity: 0, duration: 1 });
          } else if (scroll >= 66.66 && scroll < 77.77) {
            setActiveButton("Primer guardián");
            setScrollPercentage(7);
            setPlay(false);
            gsap.to(".blurParamos", { opacity: 0, duration: 1 });
          } else if (scroll >= 77.77 && scroll < 88.88) {
            setActiveButton("Contacto");
            setScrollPercentage(8);
            setPlayMoises(false);
            gsap.to(".blurParamos", { opacity: 0, duration: 1 });
          } else if (scroll >= 88.88) {
            setActiveButton("Cuéntale a todos");
            setScrollPercentage(9);
          }
        },
      },
    });
    if (scrollPercentage == 1) {
      transitionSection(".contenedor", 0, 1);
    }
    if (scrollPercentage == 2) {
      transitionSection(".contenedor", 100, 1);
      setItemActive(false);
    }
    if (scrollPercentage == 3) {
      transitionSection(".contenedor", 200, 1);
    }
    if (scrollPercentage == 4) {
      transitionSection(".contenedor", 300, 1);
    }
    if (scrollPercentage == 5) {
      transitionSection(".contenedor", 400, 1);
    }
    if (scrollPercentage == 6) {
      transitionSection(".contenedor", 500, 1);
    }
    if (scrollPercentage == 7) {
      transitionSection(".contenedor", 600, 1);
    }
    if (scrollPercentage == 8) {
      transitionSection(".contenedor", 700, 1);
    }
    if (scrollPercentage == 9) {
      transitionSection(".contenedor", 800, 1);
    }
  }, [main, activeButton, numFrailejon, scrollPercentage]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      timeLine(main);
    }, main);
    return () => ctx.revert(); // cleanup!
  }, [main]); */

  const [trasladar, setTrasladar] = useState(0);

  useEffect(() => {
    if (trasladar == 0) {
      gsap.to(".contenedor", {
        y: "-0",
      });
    } else if (trasladar == 1) {
      gsap.to(".contenedor", {
        y: "-100%",
      });
    }
  }, [trasladar]);

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
