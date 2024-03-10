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
  const [imageBg, setImageBg] = useState("/Conoce/fondoConoce.webp");
  const [numFrailejon, setNumFrailejon] = useState(null);
  const [travesiaReverse, setTravesiaReverse] = useState(false);
  const [active360, setActive360] = useState(1);
  const [translate, setTranslate] = useState(0);
  const [activeButton, setActiveButton] = useState("Origen");
  const [play, setPlay] = useState(false);
  const [playMoises, setPlayMoises] = useState(false);
  const [altura, setAltura] = useState(null);
  const [itemActive, setItemActive] = useState(0);
  const [scrollPercentage, setScrollPercentage] = useState(1);
  const [scrollPercentageTwo, setScrollPercentageTwo] = useState(0);
  useEffect(() => {
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

          if (scroll >= 0 && scroll < 11.11) {
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
            gsap.to(".blurParamos", { opacity: 0, duration: 1 });
          } else if (scroll >= 33.33 && scroll < 44.44) {
            setActiveButton("Los páramos");
            setScrollPercentage(4);
            setTravesiaReverse(false);
            gsap.to(".blurParamos", { opacity: 0, duration: 1 });
          } else if (scroll >= 44.44 && scroll < 55.55) {
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
  //console.log(scrollPercentage);
  function getScrollDistance() {
    // Obtén la posición actual de desplazamiento vertical
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    // Puedes usar scrollTop directamente si no te importa la compatibilidad con IE
    // const scrollTop = window.scrollY;

    return scrollTop;
  }

  // Ejemplo de cómo usar la función
  window.addEventListener("scroll", () => {
    const scrollDistance = getScrollDistance();
    // console.log("Recorrido vertical:", scrollDistance);
  });
  const handleScroll = () => {
    const scrolled = window.scrollY;
    const alturaContenedor = main.current.clientHeight;
    const division = alturaContenedor / 7;

    /* const one = division;
    const two = division + 400;
    const three = division * 3;
    const four = division * 4;
    const five = division * 5;
    const six = division * 6;
    const seven = division * 7;

    if (scrolled >= one < two) {
      setTranslate(translate + 1);
    }
    if (scrolled < one) {
      setTranslate(0);
    }
    if (scrolled >= two) {
      setTranslate(translate + 1);
    } */
  };

  //console.log(altura + " " + pixelsScrolled);
  useEffect(() => {
    // Agregamos el evento de scroll cuando el componente se monta
    window.addEventListener("scroll", handleScroll);

    // Cleanup: removemos el evento al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [translate]);

  const avanza = () => {
    alert("hola");
  };
  const retrocede = () => {
    setMostrarElementos((prev) => prev - 1);
  };

  useEffect(() => {
    if (main.current) {
      const alturaContenedor = main.current.clientHeight;
      const division = alturaContenedor;
      setAltura(division);
    }
  }, [main]);
  //  console.log("la altura d emain es " + altura);

  useEffect(() => {
    let ctx = gsap.context(
      () => {
        timeLine(
          main,
          setTranslate,
          translate,
          setNumFrailejon,
          numFrailejon,
          setTravesiaReverse
        );
      },
      main,
      translate
    );
    return () => ctx.revert(); // cleanup!
  }, [main]);
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
            <CapituloMoises />
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
