import gsap from "gsap";
import React, { useState, useEffect, useRef } from "react";

const NavBar = ({ activeButton }) => {
  const isMobile = window.innerWidth <= 1024;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuMobile = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
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
      ".btnMobile",
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
  }, [isMenuOpen]);

  const handleScrollToPercentage = (percentage) => {
    const position = document.documentElement.scrollHeight * (percentage / 100);
    window.scrollTo({ top: position, behavior: "smooth" });
    setIsMenuOpen(false); // Cierra el menú después de hacer scroll
  };

  const buttons = [
    { text: "Origen", percentage: 0 },
    { text: "Nuestro propósito", percentage: 33 },
    { text: "2.000 Frailejones", percentage: 39 },
    { text: "Los páramos", percentage: 60 },
    { text: "Contacto", percentage: 80 },
    { text: "Cuéntale a todos", percentage: 84 },
  ];

  return (
    <>
      <nav className="text-black maxW w-full fixed z-20  font-semibold m-0 px-6 top-0 left-1/2  translate-x-[-50%] translate-y-[-200%]">
        <div className="flex justify-between items-center w-full">
          <div className="w-[10%]">
            <img
              src="/logoFrailejones.png"
              alt="Logo Frailejones"
              className="w-[25px]"
            />
          </div>
          <div className="max-lg:hidden lg:flex space-x-4 bg-white rounded-3xl">
            {buttons.map((button) => (
              <button
                key={button.text}
                onClick={() => handleScrollToPercentage(button.percentage)}
                className={`px-4 py-1 transition-colors rounded-3xl cursor-pointer uppercase ${
                  activeButton === button.text
                    ? "bg-black text-white"
                    : "hover:bg-black hover:text-white"
                }`}
              >
                {button.text}
              </button>
            ))}
          </div>
          <div className="max-lg:hidden w-[10%]"></div>
          <button className="lg:hidden " onClick={() => setIsMenuOpen(true)}>
            <img src="/menuMobile.webp" alt="Menu" className="menuMobile" />
          </button>
        </div>
      </nav>
      {!isMobile && (
        <div className="navVertical z-[60] w-[4.4vw] h-auto rounded-xl fixed right-0 top-1/2 translate-y-[-50%] translate-x-[130%] flex-col">
          {buttons.map((button, index) => (
            <button
              key={index}
              onClick={() => handleScrollToPercentage(button.percentage)}
            >
              <img
                src={`/navVertical/menu-lateral-0${index + 3}.webp`}
                alt=""
                className={`m-auto ${
                  activeButton === button.text ? "opacity-100" : "opacity-40"
                }`}
              />
            </button>
          ))}
        </div>
      )}

      {isMenuOpen && (
        <div
          ref={menuMobile}
          className="menuMobile fixed w-[101vw] h-[100vh] top-[-10vh] left-[-8vw] inset-0 bg-black bg-opacity-90 z-[101] flex justify-center items-center text-center"
        >
          <div className="text-white p-6 rounded-lg text-2xl font-light amenti">
            {buttons.map((button) => (
              <button
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
