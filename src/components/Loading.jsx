import React, { useState, useEffect } from "react";
import AnimatedSVG from "./AnimatedSVG";

const Loading = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    // Calculamos el intervalo para que el incremento sea cada 50 ms
    const interval = setInterval(() => {
      setPercentage((oldPercentage) => {
        if (oldPercentage >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Incrementamos 1% cada 50 ms
        return oldPercentage + 1;
      });
    }, 40); // Ajustamos a 50 ms para cumplir con el tiempo deseado

    return () => clearInterval(interval); // Limpieza al desmontar
  }, []);

  return (
    <div className="loading-container relative top-0 left-0 z-[200] w-full h-full  bg-white flex justify-center items-center">
      <div className="loading-text text-black xs:text-xs tracking-[0.6em] lg:text-3xl absolute top-[49%] left-1/2 translate-x-[-42%] translate-y-[-50%]">
        {percentage}%
      </div>
      <div className=" md:w-[50%] xs:w-[40%] sm:w-[60%] lg:w-[20%]">
        <AnimatedSVG />
      </div>
    </div>
  );
};

export default Loading;
