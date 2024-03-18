import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BackgroundTransition from "../components/BackgroundTransition";

// Componente Home que utiliza el hook useWindowSize
const Home = () => {
  return (
    <div className="image-container">
      <BackgroundTransition />

      <div className="fadeIn onBoarding absoluteCenterParrafos">
        <h1 className="2xl:text-4xl xl:text-2xl xs:text-2xl font-semibold letterSpacing">
          Recuperemos nuestros páramos
        </h1>
        <h1 className="2xl:text-2xl xl:text-xl xs:text-sm font-semibold tracking-[0.21em]">
          el futuro de los ecosistemas <br /> dependerá de lo que hagamos ahora.
        </h1>
      </div>
      <Link
        to={"/onboarding"}
        onClick={() => {
          document.body.style.overflow = "hidden";
        }}
        className="fadeIn transicion_200 absolute flex-center text-center z-10 left-1/2 top-[75%] bg-slate-300 w-44 h-10 rounded-xl translate-x-[-50%] font-bold Amenti hover:bg-black hover:text-white tracking-[0.3em]"
      >
        SIGUIENTE
      </Link>
    </div>
  );
};

export default Home;
