import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const NavMobile = ({ setIsMenuOpen }) => {
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
  return (
    <div
      ref={menuMobile}
      className="menuMobile fixed inset-0 bg-black bg-opacity-90 z-[70] flex justify-center items-center text-center"
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
        className="absolute top-0 right-0 p-4"
        onClick={() => setIsMenuOpen(false)}
      >
        <img src="/svg/close.svg" alt="Cerrar" className="w-3 h-3 mt-10" />
      </button>
    </div>
  );
};

export default NavMobile;
