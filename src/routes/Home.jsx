import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import BackgroundTransition from "../components/BackgroundTransition";




// Componente Home que utiliza el hook useWindowSize
const Home = () => {
  return (
    <div className="image-container">
      <BackgroundTransition />

      <div className="fadeIn onBoarding absoluteCenterParrafos max-lg:w-[90%]">
        <h1 className="2xl:text-4xl xl:text-2xl xs:text-2xl font-semibold letterSpacing">
          Más de 3000 hectáreas de páramos fueron arrasadas en enero de 2024.
        </h1>
        <h1 className="2xl:text-2xl xl:text-xl xs:text-sm font-semibold tracking-[0.21em]">
          Es hora de hacer algo.
        </h1>
      </div>
      <Link
        to={"/onboarding"}
        onClick={() => {
          document.body.style.overflow = "hidden";
        }}
        className="btnWhite fadeIn absolute z-10 left-1/2 top-[75%] translate-x-[-50%] btnWhite xl:text-lg xs:text-xs"
      >
        Descubre cómo
      </Link>
    </div>
  );
};

export default Home;
