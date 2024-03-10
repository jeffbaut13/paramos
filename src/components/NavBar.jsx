import gsap from "gsap";
import React, { useState, useEffect, useRef } from "react";
import MouseScroll from "./MouseScroll";
import HandScroll from "./HandScroll";

const NavBar = ({ activeButton, scrollPercentage, scrollPercentageTwo }) => {
  const isMobile = window.innerWidth <= 1024;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuDestopk, setIsMenuDestopk] = useState(null);
  const menuMobile = useRef(null);
  const bntMobile = useRef(null);
  const buton = useRef(null);
  console.log(isMenuDestopk);
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
    const position = document.documentElement.scrollHeight * (percentage / 100);
    window.scrollTo({ top: position, behavior: "smooth" });
    setIsMenuOpen(false); // Cierra el menú después de hacer scroll
  };

  const buttons = [
    { id: 1, text: "Origen", percentage: 0 },
    { id: 2, text: "Nuestro propósito", percentage: 11.11 },
    { id: 3, text: "2.000 Frailejones", percentage: 22.22 },
    { id: 4, text: "Los páramos", percentage: 33.33 },
    { id: 5, text: "Más allá de la siembra", percentage: 55.55 },
    { id: 6, text: "Primer guardián", percentage: 66 },
    { id: 7, text: "Contacto", percentage: 66.66 },
    { id: 8, text: "Cuéntale a todos", percentage: 88 },
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
          <div
            onClick={() => {
              if (isMobile) {
                setIsMenuOpen(true);
              }
            }}
            className="flex justify-end items-center w-[10%]"
          >
            <button
              onClick={() => {
                if (
                  (!isMobile && isMenuDestopk == null) ||
                  isMenuDestopk == false
                ) {
                  setIsMenuDestopk(true);
                } else {
                  setIsMenuDestopk(false);
                }
              }}
              className="relative inline-block z-20 toggleEvent"
            >
              {(!isMobile && isMenuDestopk == null) ||
              isMenuDestopk == false ? (
                <img src="/menuMobile.webp" alt="Menu" className="menuMobile" />
              ) : (
                <img
                  src="/svg/close.svg"
                  alt="Menu"
                  className="menuMobile w-4"
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

      {isMobile ? (
        <HandScroll
          customstyle={
            "mouseScroll scrollMobile w-10 fixed left-1/2 top-6 z-[200]"
          }
          black={true}
          visible={true}
        />
      ) : (
        <MouseScroll
          customStyle={
            "mouseScroll w-10 absolute right-0 top-1/2 translate-x-[200%] translate-y-[-50%] z-[200]"
          }
        />
      )}
      <div className="navVertical">
        {/* <span className="fixed lg:top-0 right-0 xs:translate-y-[-20px] lg:translate-y-[-50px] text-white">
          {scrollPercentageTwo}
        </span> */}
        <div className="barra overflow-hidden rounded-3xl w-full xs:h-[17px] lg:h-full relative">
          <div className="maskChild bg-white opacity-35"></div>
          {isMobile ? (
            <div
              style={{ width: `${scrollPercentageTwo}%` }}
              className=" lg:rounded-b-3xl xs:rounded-e-3xl transition-all ease-out duration-1000 absolute z-50 top-0 left-0 inline-block h-full  bg-white "
            ></div>
          ) : (
            <div
              style={{ height: `${scrollPercentageTwo}%` }}
              className=" lg:rounded-b-3xl xs:rounded-e-3xl transition-all w-full ease-out duration-1000 absolute z-50 top-0 left-0 inline-block h-full  bg-white "
            ></div>
          )}
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
                className={`btnMobile block w-full px-4 py-7 transition-colors rounded-3xl cursor-pointer uppercase ${
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
