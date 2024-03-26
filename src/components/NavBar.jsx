import gsap from "gsap";
import React, { useState, useEffect, useRef } from "react";
import MouseScroll from "./MouseScroll";
import HandScroll from "./HandScroll";
import IconSlideNextPrev from "./IconSlideNextPrev";

const NavBar = ({
  activeButton,
  scrollPercentage,
  scrollPercentageTwo,
  trasladar,
  setTrasladar,
}) => {
  const isMobile = window.innerWidth <= 1024;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuDestopk, setIsMenuDestopk] = useState(true);
  const menuMobile = useRef(null);
  const bntMobile = useRef(null);
  const buton = useRef(null);
  //console.log(isMenuDestopk);
  const openNav = () => {
    if (isMenuDestopk) {
      /*  const tl = gsap.timeline();

      tl.fromTo(
        ".cajaMenu",
        {
          width: "10%",
          pointerEvents: "all",
          opacity: 0,
        },
        {
          width: "70%",
          opacity: 1,
          duration: 0.2,
          ease: "power1.inOut",
        },
        "<"
      );
      tl.fromTo(
        ".menuHover",
        {
          opacity: 0,
          y: "15%",
        },
        {
          opacity: 1,
          y: "0%",
          stagger: 0.1,
          duration: 0.1,
          ease: "power1.inOut",
        },
        "<+=0.2"
      ); */
    } else if (isMenuDestopk == false) {
      const tl = gsap.timeline();
      tl.fromTo(
        ".menuHover",
        {
          opacity: 1,
          y: "0%",
        },
        {
          opacity: 0,
          y: "-50%",
          stagger: 0.1,
          duration: 0.1,
          ease: "power1.inOut",
        }
      );
      tl.fromTo(
        ".cajaMenu",
        {
          width: "95%",
          pointerEvents: "none",
        },
        {
          width: "5%",

          ease: "power1.inOut",
        },
        "<+=0.2"
      );
      tl.fromTo(
        ".cajaMenu",
        {
          opacity: 1,
        },
        {
          opacity: 0,

          ease: "power1.inOut",
        }
      );
    }
  };
  useEffect(() => {
    openNav();
  }, [isMenuDestopk]);
  useEffect(() => {
    gsap.fromTo(
      buton.current,
      {
        y: "20%",
        opacity: 0,
      },
      {
        y: "0%",
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      }
    );
  }, [activeButton]);

  useEffect(() => {
    const tl = gsap.timeline();
    if (menuMobile) {
      tl.fromTo(
        menuMobile.current,
        {
          x: "100%",
        },
        {
          x: "0",
          ease: "power1.inOut",
          duration: 0.5,
        }
      );
      tl.fromTo(
        bntMobile.current,
        {
          opacity: 0,
          y: "30%",
        },
        {
          opacity: 1,
          y: "0",
          ease: "power1.inOut",
          duration: 0.5,
          stagger: 0.2,
        }
      );
    }
  }, [menuMobile, bntMobile, isMenuOpen]);

  const handleScrollToPercentage = (percentage) => {
    setTrasladar(percentage);
    setIsMenuOpen(false); // Cierra el menú después de hacer scroll
  };

  const scroller = () => {
    if (trasladar == 6) {
      setTrasladar(6);
    } else {
      setTrasladar(trasladar + 1);
    }
  };
  //console.log(trasladar);
  const scrollerResta = () => {
    if (trasladar == 0) {
      setTrasladar(0);
    } else {
      setTrasladar(trasladar - 1);
    }
  };

  const buttons = [
    { id: 1, text: "PROPÓSITO", percentage: 0 },
    { id: 3, text: "ESPECIES", percentage: 1 },
    { id: 4, text: "PRIMERA SIEMBRA", percentage: 2 },
    { id: 5, text: "GUARDIANES", percentage: 3 },
    { id: 6, text: "PRIMER GUARDIÁN", percentage: 4 },
    { id: 7, text: "VOLUNTARIADO", percentage: 5 },
    { id: 8, text: "ALIADOS", percentage: 6 },
  ];

  /* const buttons = [
    { id: 1, text: "2,000 Frailejones", percentage: 0 },
    { id: 2, text: "los expertos", percentage: 1 },
    { id: 3, text: "Las especies", percentage: 2 },
    { id: 4, text: "Primera siembra", percentage: 3 },
    { id: 5, text: "Campamento", percentage: 5 },
    { id: 6, text: "Moisés Moreno", percentage: 6 },
    { id: 7, text: "¿Preguntas?", percentage: 7 },
    { id: 8, text: "Descargable", percentage: 8 },
  ];
 */

  return (
    <>
      <nav className="text-black maxW w-full fixed flex items-center justify-center z-20 font-semibold m-0 px-6 top-0 left-1/2 min-h-[7vh] translate-x-[-50%] translate-y-[-130%]">
        <div className="flex justify-between items-center w-full relative">
          <div className="w-[5%]">
            <img
              onClick={() => setTrasladar(0)}
              src="/logoFrailejones.png"
              alt="Logo Frailejones"
              className="w-[25px] cursor-pointer"
            />
          </div>
          {isMobile && (
            <div className="lg:flex space-x-4 rounded-3xl">
              {buttons.map((button) => {
                if (activeButton === button.text) {
                  return (
                    <button
                      ref={buton}
                      key={button.text}
                      className={`cursor-default px-4 py-1 transition-colors lg:text-xl xs:text-xs tracking-[0.5em] rounded-3xl uppercase text-white`}
                    >
                      {button.text}
                    </button>
                  );
                }
              })}
            </div>
          )}
          {isMenuDestopk != null && !isMobile && (
            <div className="flex justify-end items-center w-[90%]">
              <div className="cajaMenu overflow-hidden whitespace-nowrap w-full flex justify-evenly bg-[#d4d4d4] rounded-full">
                {buttons.map((button) => (
                  <button
                    key={button.text}
                    onClick={() => handleScrollToPercentage(button.percentage)}
                    className={`${
                      activeButton === button.text
                        ? "bg-[#1d1d1b] text-white"
                        : "hover:bg-[#1d1d1b] hover:text-white"
                    } menuHover uppercase text-sm rounded-3xl py-1 px-3 transition-all ease-in-out duration-300`}
                  >
                    {button.text}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Hamburgesaa solo en mobile */}
          <div className="flex justify-end items-center w-[5%]">
            {isMobile && (
              <button
                onClick={() => setIsMenuOpen(true)}
                className="relative inline-block z-20 toggleEvent"
              >
                <img src="/menuMobile.webp" alt="Menu" className="menuMobile" />
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Botones de siguiente o anterior seccion  */}
      {!isMobile && (
        <>
          {trasladar >= 1 && (
            <IconSlideNextPrev
              handleClick={scrollerResta}
              customStyle={`iconoSlideInicial xs:rotate-[-90deg] btn1 lg:rotate-[-180deg] fixed lg:left-0 lg:top-1/2 max-lg:bottom-0 max-lg:right-0 lg:translate-x-[-150%] xs:translate-x-[120%] xs:translate-y-[-550%] lg:translate-y-[-50%] opacity-1 z-[100]`}
            />
          )}
          {trasladar < 6 && (
            <IconSlideNextPrev
              handleClick={scroller}
              customStyle={`iconoSlideInicial max-lg:rotate-90 fixed lg:right-0 lg:top-1/2 max-lg:bottom-0 lg:translate-x-[150%] xs:translate-x-[120%] max-lg:right-0 xs:translate-y-[-350%] lg:translate-y-[-50%]  opacity-1 z-[100]`}
            />
          )}
        </>
      )}

      {/* Barra de progreso */}
      <div className="navVertical">
        {/* <span className="fixed lg:top-0 right-0 xs:translate-y-[-20px] lg:translate-y-[-50px] text-white">
          {scrollPercentageTwo}
        </span> */}
        <div className="barra overflow-hidden rounded-3xl w-full h-[17px] relative">
          <div className="maskChild bg-white opacity-35"></div>

          <div
            style={{ width: `${scrollPercentageTwo}%` }}
            className=" rounded-e-3xl transition-all ease-out duration-1000 absolute z-50 top-0 left-0 inline-block h-full  bg-white "
          ></div>
        </div>
      </div>

      {isMenuOpen && (
        <div
          ref={menuMobile}
          className="menuMobile fixed w-[103vw] h-[100vh] top-[-10vh] left-[-10vw] inset-0 bg-black bg-opacity-90 z-[101] flex justify-center items-center text-center"
        >
          <div className="text-white p-6 rounded-lg text-2xl font-light amenti">
            {buttons.map((button) => (
              <button
                ref={bntMobile}
                key={button.text}
                onClick={() => handleScrollToPercentage(button.percentage)}
                className={`btnMobile block max-lg:text-base w-full p-3 transition-colors rounded-3xl cursor-pointer uppercase ${
                  activeButton === button.text
                    ? "bg-black text-white"
                    : "hover:bg-black hover:text-white"
                }`}
              >
                {button.text}
              </button>
            ))}
          </div>
          <button
            className="absolute top-0 right-4 p-4"
            onClick={() => setIsMenuOpen(false)}
          >
            <img src="/svg/close.svg" alt="Cerrar" className="w-3 h-3 mt-10" />
          </button>
        </div>
      )}
    </>
  );
};

export default NavBar;
