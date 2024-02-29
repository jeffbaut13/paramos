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
        } text-2xl font-bold tracking-[0.3em] w-full`}
        dangerouslySetInnerHTML={{ __html: tituloFrailejon }}
      ></h2>
      <span
        onMouseEnter={() => {
          setActiveOne(true);
        }}
        onMouseLeave={() => {
          setActiveOne(false);
        }}
        className={`punto w-5 h-5 ${claseFrailejon} top-[30%]`}
      ></span>
      <span
        className={`${activeOne ? "block" : "hidden"} text top-[15%] fadeIn`}
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
        className={`punto w-5 h-5 ${claseFrailejon} left-[30%] top-[52%]"`}
      ></span>
      <span
        className={`${
          activeTwo ? "block" : "hidden"
        } text left-[15%] top-[60%] fadeIn`}
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
        className={`punto w-5 h-5 ${claseFrailejon} left-[80%] top-[55%]"`}
      ></span>
      <span
        className={`${
          activeThree ? "block" : "hidden"
        } text right-2 top-[65%] fadeIn`}
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
