import React, { useState } from "react";

const DescripcionFrailejones = ({
  primerParrafo,
  segundoParrafo,
  tercerparrafo,
  claseFrailejon,
  tituloFrailejon,
}) => {
  const [activeOne, setActiveOne] = useState(false);
  const [activeTwo, setActiveTwo] = useState(false);
  const [activeThree, setActiveThree] = useState(false);

  return (
    <>
      <h2
        className={`TituloFrailejon absolute top-8 text-center whitespace-nowrap ${
          claseFrailejon == "Espeletia" ? "text-white" : "text-black"
        } lg:text-2xl xs:text-xs font-bold tracking-[0.3em] w-full`}
        dangerouslySetInnerHTML={{ __html: tituloFrailejon }}
      ></h2>
      <span
        onMouseEnter={() => {
          setActiveOne(true);
        }}
        onMouseLeave={() => {
          setActiveOne(false);
        }}
        className={`punto lg:w-5 lg:h-5 xs:w-3 xs:h-3 ${claseFrailejon} lg:top-[30%] xs:top-[40%]`}
      ></span>
      <span
        className={`${activeOne ? "block" : "hidden"} text lg:top-[15%] fadeIn`}
      >
        {primerParrafo}
      </span>

      {/* Punto 2 */}
      <span
        onMouseEnter={() => {
          setActiveTwo(true);
        }}
        onMouseLeave={() => {
          setActiveTwo(false);
        }}
        className={`punto lg:w-5 lg:h-5 xs:w-3 xs:h-3 ${claseFrailejon} left-[30%] lg:top-[52%] xs:top-[62%]`}
      ></span>
      <span
        className={`${
          activeTwo ? "block" : "hidden"
        } text lg:left-[15%] lg:top-[60%] fadeIn`}
      >
        {segundoParrafo}
      </span>

      {/* Punto 3 */}
      <span
        onMouseEnter={() => {
          setActiveThree(true);
        }}
        onMouseLeave={() => {
          setActiveThree(false);
        }}
        className={`punto lg:w-5 lg:h-5 xs:w-3 xs:h-3 ${claseFrailejon} left-[80%] lg:top-[55%] xs:top-[65%]`}
      ></span>
      <span
        className={`${
          activeThree ? "block" : "hidden"
        } text lg:right-2 lg:top-[65%] fadeIn`}
      >
        {tercerparrafo}
      </span>

      {/* Resto del código */}
      <img
        className={`${claseFrailejon} imgFrailejon absolute"`}
        src={`/imgFrailejones/${claseFrailejon}.webp`}
        alt=""
      />
    </>
  );
};

export default DescripcionFrailejones;
