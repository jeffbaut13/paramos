import gsap from "gsap";
import HandScroll from "./HandScroll";
import { useEffect } from "react";
import Button from "./Button";
import IconSlideNextPrev from "./IconSlideNextPrev";

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
      gsap.to(".montaña", { display: "none" });
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
        ".conoce .titulo2",
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
        tl.to(".BoxConoceText", { height: "50%" }).addLabel("hide");
        tl.to(
          ".BoxConoceImg",
          { height: "50%", borderRadius: "0 0 1.5rem 1.5rem" },
          "<"
        );
      } else {
        tl.to(".BoxConoceText", { width: "50%" });
        tl.to(
          ".BoxConoceImg",
          { width: "50%", borderRadius: "1.5rem 0 0 1.5rem" },
          "<"
        ).addLabel("hide");
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
      gsap.to(".montaña", { display: "block" });
      const tl = gsap.timeline();
      if (isMobile) {
        tl.to(".BoxConoceText", { height: "0", duration: rapido });
      } else {
        tl.to(".BoxConoceText", { width: "0", duration: rapido });
      }
      if (isMobile) {
        tl.to(
          ".BoxConoceImg",
          { height: "100%", borderRadius: "1.5rem", duration: rapido },
          "<"
        );
      } else {
        tl.to(
          ".BoxConoceImg",
          { width: "100%", borderRadius: "1.5rem", duration: rapido },
          "<"
        );
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

            <p className=" titulo1 tituloConoce xs:font-thin lg:font-bold ">
              ¿por qué
              <br />
              decidimos
              <br />
              hacerlo?
            </p>

            <p className=" titulo2 tituloConoce opacity-0 xs:font-thin lg:font-bold">
              LA IMPORTANCIA
              <br />
              DE SEMBRAR
              <br />
              FRAILEJONES
            </p>
            <p className=" titulo3 tituloConoce opacity-0 xs:font-thin lg:font-bold">
              ¿CÓMO
              <br />
              SEMBRAREMOS
              <br />
              NUESTRAS
              <br />
              SEMILLAS?
            </p>
            <p className=" titulo4 tituloConoce opacity-0">
              GUARDIANES
              <br />
              DE LA
              <br />
              BIODIVERSIDAD
            </p>

            <img
              src="/Conoce/circulo1.png"
              className="circulo1 circulos absolute opacity-0 lg:top-[40%] lg:left-[65%] xs:top-[50%] xs:left-[50%] sm:top-[30%] w-[25px] cursor-pointer z-[70]"
            />
            <img
              src="/Conoce/lineapunteaguda1.svg"
              className="LineaUnoMontaña absolute top-[14%] left-[6%] w-[57%] z-50"
            />
            <p className="textoUnoLosParamos text-[14px] absolute lg:top-[10vh] lg:left-[38vw] xs:top-[20vh] xs:left-[15vw] text-white w-[500px] xs:w-[200px] z-50">
              En enero de 2024, una ola de calor arrasó con nuestros páramos,
              dejando tras de sí un paisaje desolador y el eco de un desafío
              inmenso. Pero en lugar de ser espectadores de la destrucción,
              elegimos ser agentes de cambio, sembrando semillas de esperanza en
              estas tierras.
            </p>

            <img
              src="/Conoce/circulo1.png"
              className="circulo2 circulos hidden absolute lg:top-[60%] lg:left-[42%] xs:top-[59%] xs:left-[55%] md:top-[41%] w-[25px] cursor-pointer z-[60]"
            />
            <img
              src="/Conoce/lineapunteaguda2.svg"
              className={` LineaDosMontaña absolute top-[14%] left-[7%] w-[38%] z-20`}
            />
            <p
              className={`textoDosLosParamos text-[14px] absolute lg:top-[10vh] lg:left-[35vw] xs:top-[20vh] xs:left-[15vw] text-white w-[500px] xs:w-[200px] z-50`}
            >
              Imagina un mundo donde cada hoja es un susurro de vida, donde cada
              flor es un faro de esperanza. Eso son los frailejones para
              nuestros páramos: guardianes silenciosos que sostienen el
              equilibrio de un ecosistema único.
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
              className={`textoTresLosParamos  text-[14px] absolute lg:top-[35vh] lg:left-[52vw] xs:top-[20vh] xs:left-[15vw] text-white w-[500px] xs:w-[200px] z-50`}
            >
              Desde las alturas, absorben la humedad de la neblina y la
              transforman en agua, que alimenta arroyos y ríos.
            </p>

            <img
              src="/Conoce/circulo1.png"
              className="circulo4 circulos hidden absolute lg:top-[55%] lg:left-[70%] xs:top-[57%] xs:left-[53%] sm:top-[32%] w-[25px] cursor-pointer z-50"
            />
            <HandScroll
              customstyle={`moveTwo hidden absolute w-12 z-[100] top-[44%] left-[63%] `}
            />

            <img
              src="/Conoce/lneapunteaguda4.svg"
              className={` LineaCuatroMontaña absolute top-[10%] left-[7%] w-[57%] z-10`}
            />
            <p
              className={`textoCuatroLosParamos  text-[14px] absolute lg:top-[10vh] lg:left-[30vw] xs:top-[21vh] xs:left-[15vw]  text-white w-[500px] xs:w-[200px] z-50`}
            >
              Nuestro viaje comienza en marzo, cuando nos uniremos en las
              cumbres mágicas de Boyacá. Allí, entre los susurros del viento y
              la quietud de la montaña, conectaremos almas con frailejones.
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
              className={`textoCincoLosParamos  text-1xl absolute lg:top-[52vh] lg:left-[9vw] xs:top-[21vh] xs:left-[15vw] text-white w-[500px] xs:w-[200px] z-50`}
            >
              Expertos guiarán nuestros pasos, asegurando que cada gesto sea un
              paso firme hacia el éxito en la siembra.
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
              className="next slideBtn hidden cursor-pointer absolute right-4 top-1/2 z-50"
            >
              <IconSlideNextPrev />
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
              className="back slideBtn  hidden cursor-pointer absolute left-4 top-1/2 z-50"
            >
              <IconSlideNextPrev reverse={true} />
            </span>
          </div>
        </div>
        <div className="anchoInicialPrimario BoxConoceText BoxesTextEnd flex flex-col items-center justify-center">
          <p className="conoceTexto font-bold uppercase tamanoTitulos tracking-widest whitespace-nowrap">
            Sembraremos <br />
            2,000 frailejones <br />
            en el corazón <br />
            de nuestros <br />
            páramos.
          </p>
          <Button handleClick={handleClick} text={"Empecemos"} />
        </div>
      </div>
    </div>
  );
};

export default Conocelosparamos;
