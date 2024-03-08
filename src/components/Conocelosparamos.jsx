import gsap from "gsap";
import HandScroll from "./HandScroll";
import { useEffect } from "react";

const isMobile = window.innerWidth <= 1024;
const rapido = 0.5;
const normal = 1;
const medio = 1.5;
const lento = 2;
const Conocelosparamos = ({ itemActive, setItemActive }) => {
  const handleClick = () => {
    setItemActive(1);
  };

  useEffect(() => {
    if (itemActive == 0) {
      const tl = gsap.timeline();
      tl.to(".slideBtn", {
        display: "none",
      });
      tl.fromTo(
        ".conoce .titulo3",
        {
          scale: 1,
          opacity: 1,
          x: "0%",
        },
        {
          scale: 2,
          opacity: 0,
          x: "-30%",
          duration: rapido,
        },

        "<"
      );
      tl.fromTo(
        ".conoce .titulo1",
        { opacity: 0, scale: 0.5, x: "0%" },
        {
          opacity: 1,
          scale: 1,
          x: "0%",
          duration: rapido,
        },
        "<"
      );
      tl.to(
        ".m4",

        { opacity: 1, scale: 1.3, x: "0%", duration: normal }
      );
      tl.to(
        ".m2",

        { opacity: 0, width: "30%", duration: normal },
        "<"
      );
      if (isMobile) {
        tl.to(".BoxConoceText", { height: "50%" }, "<").addLabel("hide");
      } else {
        tl.to(".BoxConoceText", { width: "50%" }, "<").addLabel("hide");
      }
      if (isMobile) {
        tl.to(".BoxConoceImg", { height: "50%" }, "hide");
      } else {
        tl.to(".BoxConoceImg", { width: "50%" }, "<");
      }

      tl.to(
        ".moveTwo",
        {
          display: "none",
        },
        "hide"
      );

      tl.to(
        ".moveTwo",
        {
          display: "none",
        },
        "hide"
      );
      tl.to(".blurParamos", { opacity: 0, duration: rapido }, "<-=1");
      tl.to(
        ".m3",
        { opacity: 0 },

        "<-=1"
      );
      tl.to(
        ".circulos",
        { opacity: 0, pointerEvents: "none" },

        "<-=1"
      );
    }
    if (itemActive == 1) {
      const tl = gsap.timeline();
      if (isMobile) {
        tl.to(".BoxConoceText", { height: "0", duration: rapido });
      } else {
        tl.to(".BoxConoceText", { width: "0", duration: rapido });
      }
      if (isMobile) {
        tl.to(".BoxConoceImg", { height: "100%", duration: rapido }, "<");
      } else {
        tl.to(".BoxConoceImg", { width: "100%", duration: rapido }, "<");
      }

      tl.to(".slideBtn", {
        display: "block",
        opacity: 1,
      });
      tl.to(".circulos.circulo1", {
        display: "block",
        opacity: 1,
        pointerEvents: "all",
      });
      tl.to(".moveTwo", {
        display: "block",
        duration: 1,
      });
      tl.to(".blurParamos", { opacity: 1, duration: rapido }, "<-=1");

      tl.to(".conoce", { padding: 0, duration: rapido }, "<");

      tl.to(".moveTwo", {
        display: "none",
        duration: 1,
        delay: 6,
      });
    }
    if (itemActive == 2) {
      const tl = gsap.timeline();

      tl.to(".m4", {
        scale: 1,
        opacity: 1,
        x: "0%",
        duration: rapido,
      }).addLabel("m4");

      tl.to(
        ".m1",
        { opacity: 0.3, width: "30%" },

        "m4-=0.5"
      );

      tl.to(
        ".conoce .titulo1",
        { scale: 1, opacity: 1, x: "0%", duration: rapido },
        "m4-=0.5"
      );
      tl.to(
        ".conoce .titulo2",
        { scale: 0.5, opacity: 0, duration: rapido },
        "<"
      );
      tl.to(
        ".conoce .titulo2",
        {
          scale: 0.5,
          opacity: 0,
          x: "-10%",
          duration: rapido,
        },
        "<+=0.5"
      );
      tl.to(".circulo2", { display: "none", duration: normal }, "<-=2");
      tl.to(".circulo3", { display: "none", duration: normal }, "<-=2");
      tl.to(".circulo1", {
        display: "block",
        pointerEvents: "all",
        duration: rapido,
      });
    }
    if (itemActive == 3) {
      const tl = gsap.timeline();
      tl.to(
        ".moveTwo",
        {
          display: "none",
        },
        "<-=1"
      );
      tl.to(".m4", {
        scale: 1.5,
        opacity: 0,
        x: "-30%",
        duration: rapido,
      });

      tl.fromTo(
        ".m1",
        { opacity: 0.3, width: "30%", x: "0%" },
        { opacity: 1, width: "100%", x: "0%", duration: normal },
        "<-=0.5"
      );
      tl.to(
        ".conoce .titulo1",
        {
          scale: 2,
          opacity: 0,
          x: "-80%",
          duration: rapido,
        },
        "<"
      );

      tl.fromTo(
        ".conoce .titulo2",
        {
          scale: 0.5,
          opacity: 0,
          x: "-20%",
        },
        {
          scale: 1,
          opacity: 1,
          x: "0%",
          duration: rapido,
        },
        "<+=0.5"
      );
      tl.to(".circulo1", { display: "none", duration: normal }, "<-=2");
      tl.to(".circulo2", {
        display: "block",
        opacity: 1,
        pointerEvents: "all",
        duration: normal,
      });
      tl.to(
        ".circulo3",
        {
          display: "block",
          opacity: 1,
          pointerEvents: "all",
          duration: normal,
        },
        "<"
      );
    }
    if (itemActive == 4) {
      const tl = gsap.timeline();

      tl.fromTo(
        ".m1",
        {
          scale: 2,
          opacity: 0,
          x: "-80%",
        },
        {
          scale: 1,
          opacity: 1,
          x: "0%",
          duration: rapido,
        }
      );
      tl.to(
        ".conoce .titulo2",
        {
          scale: 1,
          opacity: 1,
          x: "0%",
          duration: rapido,
        },
        "<"
      );

      tl.fromTo(
        ".m2",
        { opacity: 1, width: "100%" },
        { opacity: 0.3, width: "30%" },
        "<"
      );

      tl.fromTo(
        ".conoce .titulo3",
        {
          scale: 1,
          opacity: 1,
          x: "0%",
        },
        {
          scale: 0.5,
          opacity: 0,
          x: "-20%",
          duration: rapido,
        },
        "<"
      );
      tl.to(".circulo4", { display: "none", duration: rapido }, "<-=2");
      tl.to(".circulo5", { display: "none", duration: rapido }, "<-=2");
      tl.to(".circulo2", {
        display: "block",
        pointerEvents: "all",
        opacity: 1,
        duration: normal,
      });
      tl.to(
        ".circulo3",
        {
          display: "block",
          pointerEvents: "all",
          opacity: 1,
          duration: normal,
        },
        "<"
      );
    }

    if (itemActive == 5) {
      const tl = gsap.timeline();

      tl.to(".m1", {
        scale: 1.5,
        opacity: 0,
        x: "-30%",
        duration: rapido,
      });

      tl.fromTo(
        ".m2",
        { opacity: 0.3, width: "30%" },
        { opacity: 1, width: "100%", duration: normal },
        "<-=0.2"
      );
      tl.to(
        ".conoce .titulo2",
        {
          scale: 2,
          opacity: 0,
          x: "-80%",
          duration: rapido,
        },
        "<"
      );
      tl.fromTo(
        ".conoce .titulo3",
        {
          scale: 0.5,
          opacity: 0,
          x: "-20%",
        },
        {
          scale: 1,
          opacity: 1,
          x: "0%",
          duration: rapido,
        },
        "<+=0.5"
      );

      tl.to(".circulo2", { display: "none", duration: normal }, "<-=2");
      tl.to(".circulo3", { display: "none", duration: normal }, "<-=2");
      tl.to(".circulo4", {
        display: "block",
        pointerEvents: "all",
        opacity: 1,
        duration: rapido,
      });
      tl.to(
        ".circulo5",
        {
          display: "block",
          pointerEvents: "all",
          opacity: 1,
          duration: rapido,
        },
        "<"
      );
    }
  }, [itemActive]);
  return (
    //<div className="conoce absolute w-full h-full z-[1] flex">
    <div className="conoce w-full h-full flex">
      <div className=" responsiveReverse ocultarEnOrigen relative w-full h-full paddingComponentes">
        <div
          style={{ backgroundImage: "url(/Conoce/fondoConoce.webp)" }}
          className="anchoInicialPrimario BoxConoceImg BoxesImgStart bg-center"
        >
          <div className="montaña hidden w-full h-full relative  sm:bg-gradient-to-r bg-gradient-to-b from-[#0073ab] to-[#b0f8f5]">
            <img
              src="/Conoce/m4.png"
              className=" m4 scale-[1.3] right-0 h-auto absolute bottom-0 z-40"
            />
            <img
              src="/Conoce/m-1Mobile.webp"
              className=" m4 scale-[1.3] right-0 h-auto absolute bottom-0 z-40 lg:hidden xl:hidden 2xl:hidden"
            />

            <img
              src="/Conoce/m1.png"
              className=" m1 h-auto absolute bottom-0 z-30"
            />
            <img
              src="/Conoce/m-2Mobile.webp"
              className=" m1 h-auto absolute bottom-0 z-30 lg:hidden xl:hidden 2xl:hidden"
            />

            <img
              src="/Conoce/m2.png"
              className=" m2 right-0 h-auto opacity-0 absolute bottom-0 z-20"
            />
            <img
              src="/Conoce/m-3Mobile.webp"
              className=" m2 right-0 h-auto opacity-0 absolute bottom-0 z-20 lg:hidden xl:hidden 2xl:hidden"
            />

            <img
              src="/Conoce/m3.png"
              className=" m3 scale-[1.3] opacity-0  left-0 h-auto absolute bottom-0"
            />
            <img
              src="/Conoce/m-4Mobile.webp"
              className=" m3 scale-[1.3] opacity-0  left-0 h-auto absolute bottom-0 lg:hidden xl:hidden 2xl:hidden"
            />

            <p className=" titulo1 z-40 tracking-widest font-bold text-4xl absolute top-[7vh] left-[7vw] text-white">
              EL ORIGEN
              <br />
              DE LOS
              <br />
              PÁRAMOS
            </p>

            <p className=" titulo2 z-40 tracking-widest opacity-0 font-bold text-4xl absolute top-[7vh] left-[7vw] text-white">
              EL MUNDO ELEVADO
              <br />
              DE LOS PÁRAMOS
            </p>
            <p className=" titulo3 z-40 tracking-widest opacity-0 font-bold text-4xl absolute top-[7vh] left-[7vw] text-white">
              EL CICLO VITAL
              <br />
              DEL AGUA
            </p>
            <p className=" titulo4 z-40 tracking-widest opacity-0 font-bold text-4xl absolute top-[7vh] left-[7vw] text-white">
              GUARDIANES
              <br />
              DE LA
              <br />
              BIODIVERSIDAD
            </p>

            <img
              src="/Conoce/circulo1.png"
              className="circulo1 circulos absolute opacity-0 top-[40%] left-[65%] w-[25px] cursor-pointer z-[70]"
            />
            <img
              src="/Conoce/lineapunteaguda1.svg"
              className="LineaUnoMontaña absolute top-[14%] left-[6%] w-[57%] z-50"
            />
            <p className="textoUnoLosParamos text-[13px] absolute top-[10vh] left-[38vw] text-white w-[500px] z-50">
              Es resultado de complejas interacciones geológicas y climáticas,
              <br /> incluyendo actividad volcánica y extensos ciclos glaciales
              e<br /> interglaciales durante el Pleistoceno.
            </p>

            <img
              src="/Conoce/circulo1.png"
              className="circulo2 circulos hidden absolute top-[57%] left-[42%] w-[25px] cursor-pointer z-[60]"
            />
            <img
              src="/Conoce/lineapunteaguda2.svg"
              className={` LineaDosMontaña absolute top-[14%] left-[7%] w-[38%] z-20`}
            />
            <p
              className={`textoDosLosParamos text-[13px] absolute top-[10vh] left-[35vw] text-white w-[500px] z-50`}
            >
              Los páramos se encuentran
              <br />
              generalmente entre 3,000 y 4,000
              <br /> metros sobre el nivel del mar.
            </p>

            <img
              src="/Conoce/circulo1.png"
              className="circulo3 circulos hidden absolute top-[80%] left-[70%] w-[25px] cursor-pointer z-[60]"
            />
            <img
              src="/Conoce/lineapunteaguda3.svg"
              className={` LineaTresMontaña absolute top-[53%] left-[73%] w-[15%] z-50`}
            />
            <p
              className={`textoTresLosParamos  text-[13px] absolute top-[35vh] left-[52vw] text-white w-[500px] z-50`}
            >
              Son un ecosistema montañoso
              <br />
              intertropical y se caracterizan por
              <br /> su clima frío y su importante
              <br />
              biodiversidad y recursos hídricos.
            </p>

            <img
              src="/Conoce/circulo1.png"
              className="circulo4 circulos hidden absolute top-[55%] left-[70%] w-[25px] cursor-pointer z-50"
            />
            <HandScroll
              customstyle={`moveTwo hidden absolute w-12 z-[100] top-[44%] left-[63%] `}
            />

            <img
              src="/Conoce/lneapunteaguda4.svg"
              className={` LineaCuatroMontaña absolute top-[10%] left-[7%] w-[57%] z-10`}
            />
            <p
              className={`textoCuatroLosParamos  text-[13px] absolute top-[10vh] left-[30vw] text-white w-[500px] z-50`}
            >
              Los páramos actúan como esponjas
              <br />
              naturales, regulando el flujo de ríos
              <br />
              y quebradas que son esenciales
              <br /> para la vida.
            </p>

            <img
              src="/Conoce/circulo1.png"
              className="circulo5 circulos hidden absolute top-[73%] left-[43%] w-[25px] cursor-pointer z-[70]"
            />
            <img
              src="/Conoce/lineapunteagudaCinco.svg"
              className={` LineaCincoMontaña absolute top-[74%] left-[32%] w-[12%] z-50`}
            />
            <p
              className={`textoCincoLosParamos  text-1xl absolute top-[52vh] left-[9vw] text-white w-[500px] z-50`}
            >
              El 70% del agua de las
              <br />
              grandes ciudades, proviene
              <br />
              de este lugar sagrado.
            </p>
            <img
              src="/Conoce/circulo1.png"
              className="circulo6 circulos hidden absolute top-[42%] left-[33%] w-[25px] cursor-pointer z-50"
            />
            <img
              src="/Conoce/lineapunteaguda6.svg"
              className={` LineaSeisMontaña absolute top-[18%] left-[6%] w-[25%] z-10`}
            />
            <p
              className={`textoSeisLosParamos  text-[13px] absolute top-[12vh] left-[32vw] text-white w-[500px] z-50`}
            >
              Los páramos son sagrados para las
              <br />
              comunidades indígenas y locales por
              <br />
              sus recursos y belleza.
            </p>

            <img
              src="/Conoce/circulo1.png"
              className="circulo7 circulos hidden absolute top-[70%] left-[70%] w-[25px] cursor-pointer z-[60]"
            />
            <img
              src="/Conoce/lineapunteaguda7.svg"
              className={` LineaSieteMontaña absolute top-[35%] left-[57%] w-[12%] z-50`}
            />
            <p
              className={`textoSieteLosParamos  text-[13px] absolute top-[22vh] left-[34vw] text-white w-[500px] z-50`}
            >
              Alberga plantas y animales
              <br />
              adaptados al frío que terminan siendo
              <br />
              valiosos para el equilibrio ecológico.
            </p>
            <span
              onClick={() => {
                if (itemActive == 1 || itemActive == 2) {
                  setItemActive(3);
                }
                if (itemActive == 3 || itemActive == 4) {
                  setItemActive(5);
                }
                if (itemActive == 5) {
                  setItemActive(0);
                }
              }}
              className="next slideBtn hidden cursor-pointer absolute right-0 top-1/4 z-50"
            >
              SIGUIENTE MONTAÑA
            </span>
            <span
              onClick={() => {
                if (itemActive == 1 || itemActive == 2) {
                  setItemActive(0);
                }
                if (itemActive == 3 || itemActive == 4) {
                  setItemActive(2);
                }
                if (itemActive == 5) {
                  setItemActive(4);
                }
              }}
              className="back slideBtn  hidden cursor-pointer absolute right-0 translate-x-[-110%] top-1/4 z-50"
            >
              ANTERIOR MONTAÑA
            </span>
          </div>
        </div>
        <div className="anchoInicialPrimario BoxConoceText BoxesTextEnd flex flex-col items-center justify-center">
          <p className="conoceTexto font-bold uppercase tamanoTitulos tracking-widest whitespace-nowrap">
            PÁRAMOS,
            <br />
            EL MILAGRO DE
            <br />
            LOS GLACIALES
            <br />
            Y LOS
            <br />
            MOVIMIENTOS
            <br />
            VOLCÁNICOS.
          </p>
          <span
            onClick={handleClick}
            className="btnconoce absolute translate-y-[250%] m-8 w-24 h-24 p-2 flex-center-col rounded-full text-center text-xs bg-black text-white"
          >
            <img className="w-10" src="/svg/frailejon.svg" alt="" /> Conoce los
            paramos
          </span>
        </div>
      </div>
    </div>
  );
};

export default Conocelosparamos;
