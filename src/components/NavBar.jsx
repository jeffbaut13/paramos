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
  const [isMenuDestopk, setIsMenuDestopk] = useState(null);
  const menuMobile = useRef(null);
  const bntMobile = useRef(null);
  const buton = useRef(null);
  //console.log(isMenuDestopk);
  const openNav = () => {
    if (isMenuDestopk) {
      const tl = gsap.timeline();

      tl.fromTo(
        ".cajaMenu",
        {
          width: "10%",
          pointerEvents: "all",
          opacity: 0,
        },
        {
          width: "95%",
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
      );
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
    if (trasladar == 8) {
      setTrasladar(8);
    } else {
      setTrasladar(trasladar + 1);
    }
  };
  const scrollerResta = () => {
    if (trasladar == 0) {
      setTrasladar(0);
    } else {
      setTrasladar(trasladar - 1);
    }
  };
  console.log(trasladar);
  const buttons = [
    { id: 1, text: "2,000 Frailejones", percentage: 0 },
    { id: 2, text: "los expertos", percentage: 1 },
    { id: 3, text: "Las especies", percentage: 2 },
    { id: 4, text: "Primera siembra", percentage: 3 },
    { id: 5, text: "Campamento", percentage: 5 },
    { id: 6, text: "Moisés Moreno", percentage: 6 },
    { id: 7, text: "¿Preguntas?", percentage: 7 },
    { id: 8, text: "Descargable", percentage: 8 },
  ];

  return (
    <>
      <nav className="text-black maxW w-full fixed flex items-center justify-center z-20 font-semibold m-0 px-6 top-0 left-1/2 min-h-[7vh] translate-x-[-50%] translate-y-[-130%]">
        <div className="flex justify-between items-center w-full relative">
          <div className="w-[10%]">
            <img
              src="/logoFrailejones.png"
              alt="Logo Frailejones"
              className="w-[25px]"
            />
          </div>
          <div className="lg:flex space-x-4 rounded-3xl">
            {buttons.map((button) => {
              if (activeButton === button.text) {
                return (
                  <button
                    ref={buton}
                    key={button.text}
                    className={`cursor-default px-4 py-1 transition-colors lg:text-xl xs:text-sm tracking-[0.8em] rounded-3xl uppercase text-white`}
                  >
                    {button.text}
                  </button>
                );
              }
            })}
          </div>
          <div className="flex justify-end items-center w-[10%]">
            <button
              onClick={() => {
                if (isMenuDestopk == null || isMenuDestopk == false) {
                  if (isMobile) {
                    setIsMenuOpen(true);
                  } else {
                    setIsMenuDestopk(true);
                  }
                } else {
                  if (isMobile) {
                    setIsMenuOpen(true);
                  } else {
                    setIsMenuDestopk(false);
                  }
                }
              }}
              className="relative inline-block z-20 toggleEvent"
            >
              {isMenuDestopk == null || isMenuDestopk == false ? (
                <img src="/menuMobile.webp" alt="Menu" className="menuMobile" />
              ) : (
                <img
                  src="/svg/close.svg"
                  alt="Menu"
                  className="menuMobile max-lg:hidden inline-block w-3"
                />
              )}
            </button>

            {isMenuDestopk != null && !isMobile && (
              <div className="cajaMenu overflow-hidden whitespace-nowrap absolute flex w-[95%] translate-x-6 justify-evenly bg-[#d4d4d4] rounded-full">
                {buttons.map((button) => (
                  <button
                    key={button.text}
                    onClick={() => handleScrollToPercentage(button.percentage)}
                    className={`${
                      activeButton === button.text
                        ? "bg-[#1d1d1b] text-white"
                        : "hover:bg-[#1d1d1b] hover:text-white"
                    } menuHover text-sm rounded-3xl py-1 px-3 transition-all ease-in-out duration-300`}
                  >
                    {button.text}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>

      <>
        <IconSlideNextPrev
          handleClick={scrollerResta}
          customStyle={`iconoSlideInicial rotate-[-90deg] fixed right-0 top-1/2 translate-x-[150%] translate-y-[-200%] opacity-1 z-[100]`}
        />

        <IconSlideNextPrev
          handleClick={scroller}
          customStyle={`iconoSlideInicial rotate-90 fixed right-0 translate-x-[150%] translate-y-[200%] bottom-1/2  opacity-1 z-[100]`}
        />
      </>

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
          className="menuMobile fixed w-[101vw] h-[100vh] top-[-10vh] left-[-8vw] inset-0 bg-black bg-opacity-90 z-[101] flex justify-center items-center text-center"
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
