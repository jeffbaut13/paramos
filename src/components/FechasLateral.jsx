import React, { useEffect } from "react";
import gsap from "gsap";
import ItemFecha from "./itemFecha";

const FechasLateral = ({ setinicio, inputNumber, barra, inicio }) => {
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
  const goYear = (Num) => {
    setinicio(Num);
  };

  return (
    <div
      className="fechasLateral flex-center-col absolute lg:left-[-10px] xs:left-[-22px] w-[80px] z-[3]"
      ref={barra}
    >
      <ItemFecha
        handleClick={() => goYear(3)}
        active={inicio == 3 ? true : false}
        inputNumber={inputNumber}
        aumento={0}
        color={"#fff"}
      />
      <ItemFecha
        handleClick={() => goYear(4)}
        active={inicio == 4 ? true : false}
        inputNumber={inputNumber}
        aumento={10}
        color={"#fff"}
      />
      <ItemFecha
        handleClick={() => goYear(5)}
        active={inicio == 5 ? true : false}
        inputNumber={inputNumber}
        aumento={20}
        color={"#fff"}
      />
      <ItemFecha
        handleClick={() => goYear(6)}
        active={inicio == 6 ? true : false}
        inputNumber={inputNumber}
        aumento={30}
        color={"#fff"}
      />
      <ItemFecha
        handleClick={() => goYear(7)}
        active={inicio == 7 ? true : false}
        inputNumber={inputNumber}
        aumento={40}
        color={"#fff"}
      />
      <ItemFecha
        handleClick={() => goYear(8)}
        active={inicio == 8 ? true : false}
        inputNumber={inputNumber}
        aumento={50}
        color={"#fff"}
      />
      <ItemFecha
        handleClick={() => goYear(9)}
        active={inicio == 9 ? true : false}
        inputNumber={inputNumber}
        aumento={60}
        color={"#fff"}
      />
      <ItemFecha
        handleClick={() => goYear(10)}
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
