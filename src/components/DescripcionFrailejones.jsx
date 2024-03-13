import React, { useEffect, useState } from "react";
import { BtnHover } from "./BtnHover";

const DescripcionFrailejones = ({
  primerParrafo,
  segundoParrafo,
  tercerparrafo,
  claseFrailejon,
  tituloFrailejon,
  limpiar,
  setLimpiar,
}) => {
  const [activeOne, setActiveOne] = useState(false);
  const [activeTwo, setActiveTwo] = useState(false);
  const [activeThree, setActiveThree] = useState(false);

  const isMobile = window.innerWidth < 640;
  const tablet = window.innerWidth >= 640 && window.innerWidth < 1280;

  useEffect(() => {
    if (limpiar) {
      setActiveOne(false);
      setActiveTwo(false);
      setActiveThree(false);
    }
  }, [limpiar]);

  return (
    <>
      <h2
        className={`TituloFrailejon hidden absolute top-8 text-center whitespace-nowrap ${
          claseFrailejon == "Espeletia" ? "text-white" : "text-black"
        } lg:text-2xl xs:text-xs font-bold tracking-[0.3em] w-full`}
        dangerouslySetInnerHTML={{ __html: tituloFrailejon }}
      ></h2>

      <BtnHover
        handleClick={() => {
          if (activeOne) {
            setActiveOne(false);
          } else {
            setActiveOne(true);
            setActiveTwo(false);
            setActiveThree(false);
            setLimpiar(false);
          }
        }}
        handleMouseEnter={() => {
          setActiveOne(true);
        }}
        handleMouseLeave={() => {
          setActiveOne(false);
        }}
        customStyles={`hidden lg:w-5 lg:h-5 xs:w-3 xs:h-3 ${claseFrailejon} lg:top-[30%] xs:top-[40%]`}
      />

      <span
        className={`${
          activeOne ? "block" : "hidden"
        } text lg:top-[15%] fadeIn parrafotooltip`}
      >
        {primerParrafo}
      </span>

      {/* Punto 2 */}

      <BtnHover
        handleClick={() => {
          if (activeTwo) {
            setActiveTwo(false);
          } else {
            setActiveTwo(true);
            setActiveOne(false);
            setActiveThree(false);
            setLimpiar(false);
          }
        }}
        handleMouseEnter={() => {
          setActiveTwo(true);
        }}
        handleMouseLeave={() => {
          setActiveTwo(false);
        }}
        customStyles={`hidden lg:w-5 lg:h-5 xs:w-3 xs:h-3 ${claseFrailejon} left-[30%] lg:top-[52%] xs:top-[62%]`}
      />

      <span
        className={`${
          activeTwo ? "block" : "hidden"
        } text lg:left-[15%] lg:top-[60%] fadeIn parrafotooltip`}
      >
        {segundoParrafo}
      </span>

      {/* Punto 3 */}

      <BtnHover
        handleClick={() => {
          if (activeThree) {
            setActiveThree(false);
          } else {
            setActiveThree(true);
            setActiveTwo(false);
            setActiveOne(false);
            setLimpiar(false);
          }
        }}
        handleMouseEnter={() => {
          setActiveThree(true);
        }}
        handleMouseLeave={() => {
          setActiveThree(false);
        }}
        customStyles={`hidden lg:w-5 lg:h-5 xs:w-3 xs:h-3 ${claseFrailejon} left-[80%] lg:top-[55%] xs:top-[65%]`}
      />

      <span
        className={`${
          activeThree ? "block" : "hidden"
        } text lg:right-2 lg:top-[65%] fadeIn parrafotooltip`}
      >
        {tercerparrafo}
      </span>
    </>
  );
};

export default DescripcionFrailejones;
