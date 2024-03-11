import React, { useEffect } from "react";
import gsap from "gsap";
import ItemFecha from "./itemFecha";

const FechasLateral = ({ inputNumber, barra, inicio }) => {
  useEffect(() => {
    // Configurar la animación con GSAP
    gsap.fromTo(
      barra.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.5,
        ease: "power2.inOut",
        //delay: 2.5,
      }
    );
  }, [inputNumber]);

  return (
    <div
      className="fechasLateral flex-center-col absolute lg:left-[-10px] xs:left-[-22px] w-[80px]"
      ref={barra}
    >
      <ItemFecha
        active={inicio == 3 ? true : false}
        inputNumber={inputNumber}
        aumento={0}
        color={"#fff"}
      />
      <ItemFecha
        active={inicio == 4 ? true : false}
        inputNumber={inputNumber}
        aumento={10}
        color={"#fff"}
      />
      <ItemFecha
        active={inicio == 5 ? true : false}
        inputNumber={inputNumber}
        aumento={20}
        color={"#fff"}
      />
      <ItemFecha
        active={inicio == 6 ? true : false}
        inputNumber={inputNumber}
        aumento={30}
        color={"#fff"}
      />
      <ItemFecha
        active={inicio == 7 ? true : false}
        inputNumber={inputNumber}
        aumento={40}
        color={"#fff"}
      />
      <ItemFecha
        active={inicio == 8 ? true : false}
        inputNumber={inputNumber}
        aumento={50}
        color={"#fff"}
      />
      <ItemFecha
        active={inicio == 9 ? true : false}
        inputNumber={inputNumber}
        aumento={60}
        color={"#fff"}
      />
      <ItemFecha
        active={inicio == 10 ? true : false}
        inputNumber={2024}
        aumento={0}
        color={"#fff"}
      />
      {/*  <ItemFecha
        active={inicio == 11 ? true : false}
        inputNumber={inputNumber}
        aumento={80}
        color={"#fff"}
      /> */}
    </div>
  );
};

export default FechasLateral;
