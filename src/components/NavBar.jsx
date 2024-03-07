import gsap from "gsap";
import React, { useState, useEffect, useRef } from "react";
import MouseScroll from "./MouseScroll";
import HandScroll from "./HandScroll";

const NavBar = ({ activeButton, scrollPercentage, scrollPercentageTwo }) => {
  const isMobile = window.innerWidth <= 1024;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuMobile = useRef(null);
  const bntMobile = useRef(null);
  const buton = useRef(null);

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
    { id: 2, text: "Nuestro propósito", percentage: 33 },
    { id: 3, text: "2.000 Frailejones", percentage: 39 },
    { id: 4, text: "Los páramos", percentage: 60 },
    { id: 5, text: "Contacto", percentage: 84 },
    { id: 6, text: "Cuéntale a todos", percentage: 90 },
  ];

  return (
    <>
      <nav className="text-black maxW w-full fixed flex items-center justify-center z-20 font-semibold m-0 px-6 top-0 left-1/2 min-h-[7vh] translate-x-[-50%] translate-y-[-130%]">
        <div className="flex justify-between items-center w-full">
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
          <div className="max-lg:hidden w-[10%]"></div>
          <button className="lg:hidden " onClick={() => setIsMenuOpen(true)}>
            <img src="/menuMobile.webp" alt="Menu" className="menuMobile" />
          </button>
        </div>
      </nav>
      {/* {!isMobile && (
        <div className="navVertical z-[60] w-[4.4vw] h-auto rounded-xl fixed right-0 top-1/2 translate-y-[-50%] translate-x-[110%] flex-col">
          <MouseScroll
            customStyle={
              "mouseScroll 2xl:w-10 lg:w-9 fixed rigth-0 top-1/2 2xl:translate-x-[210%] lg:translate-x-[120%] translate-y-[-50%] "
            }
          />
          {buttons.map((button) => (
            <button key={button.id}>
              <img
                src={`/navVertical/menu-lateral-${button.id}.webp`}
                alt=""
                className={` cursor-default m-auto ${
                  scrollPercentage >= button.id
                    ? "opacity-100 wave"
                    : "opacity-35"
                }  `}
              />
            </button>
          ))}
        </div>
      )} */}

      {isMobile && (
        <HandScroll
          customstyle={
            "mouseScroll scrollMobile w-10 fixed left-1/2 top-6 z-[200]"
          }
          black={true}
          visible={true}
        />
      )}
      <div className="navVertical">
        <span className="fixed top-0 right-0 translate-y-[-50px] text-white">
          {scrollPercentageTwo}
        </span>
        <div className="barra overflow-hidden rounded-3xl w-full xs:h-[17px] lg:h-full relative">
          <div className="maskChild bg-white opacity-35"></div>
          {isMobile ? (
            <div
              style={{ width: `${scrollPercentageTwo}%` }}
              className=" transition-all ease-out duration-1000 absolute z-50 top-0 left-0 inline-block h-full  bg-white "
            ></div>
          ) : (
            <div
              style={{ height: `${scrollPercentageTwo}%` }}
              className=" transition-all w-full ease-out duration-1000 absolute z-50 top-0 left-0 inline-block h-full  bg-white "
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
