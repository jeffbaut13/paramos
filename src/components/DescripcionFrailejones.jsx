import React, { useEffect, useState } from "react";

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

      {isMobile || tablet ? (
        <span
          onClick={() => {
            if (activeOne) {
              setActiveOne(false);
            } else {
              setActiveOne(true);
              setActiveTwo(false);
              setActiveThree(false);
              setLimpiar(false);
            }
          }}
          className={`punto hidden lg:w-5 lg:h-5 xs:w-3 xs:h-3 ${claseFrailejon} lg:top-[30%] xs:top-[40%]`}
        ></span>
      ) : (
        <span
          onMouseEnter={() => {
            setActiveOne(true);
          }}
          onMouseLeave={() => {
            setActiveOne(false);
          }}
          className={`punto hidden lg:w-5 lg:h-5 xs:w-3 xs:h-3 ${claseFrailejon} lg:top-[30%] xs:top-[40%]`}
        ></span>
      )}

      <span
        className={`${
          activeOne ? "block" : "hidden"
        } text lg:top-[15%] fadeIn parrafotooltip`}
      >
        {primerParrafo}
      </span>

      {/* Punto 2 */}
      {isMobile || tablet ? (
        <span
          onClick={() => {
            if (activeTwo) {
              setActiveTwo(false);
            } else {
              setActiveTwo(true);
              setActiveOne(false);
              setActiveThree(false);
              setLimpiar(false);
            }
          }}
          className={`punto hidden lg:w-5 lg:h-5 xs:w-3 xs:h-3 ${claseFrailejon} left-[30%] lg:top-[52%] xs:top-[62%]`}
        ></span>
      ) : (
        <span
          onMouseEnter={() => {
            setActiveTwo(true);
          }}
          onMouseLeave={() => {
            setActiveTwo(false);
          }}
          className={`punto hidden lg:w-5 lg:h-5 xs:w-3 xs:h-3 ${claseFrailejon} left-[30%] lg:top-[52%] xs:top-[62%]`}
        ></span>
      )}

      <span
        className={`${
          activeTwo ? "block" : "hidden"
        } text lg:left-[15%] lg:top-[60%] fadeIn parrafotooltip`}
      >
        {segundoParrafo}
      </span>

      {/* Punto 3 */}

      {isMobile || tablet ? (
        <span
          onClick={() => {
            if (activeThree) {
              setActiveThree(false);
            } else {
              setActiveThree(true);
              setActiveTwo(false);
              setActiveOne(false);
              setLimpiar(false);
            }
          }}
          className={`punto hidden lg:w-5 lg:h-5 xs:w-3 xs:h-3 ${claseFrailejon} left-[80%] lg:top-[55%] xs:top-[65%]`}
        ></span>
      ) : (
        <span
          onMouseEnter={() => {
            setActiveThree(true);
          }}
          onMouseLeave={() => {
            setActiveThree(false);
          }}
          className={`punto hidden lg:w-5 lg:h-5 xs:w-3 xs:h-3 ${claseFrailejon} left-[80%] lg:top-[55%] xs:top-[65%]`}
        ></span>
      )}

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
