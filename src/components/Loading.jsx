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
    }, 50); // Ajustamos a 50 ms para cumplir con el tiempo deseado

    return () => clearInterval(interval); // Limpieza al desmontar
  }, []);

  return (
    <div className="loading-container w-full h-full relative bg-white flex justify-center items-center">
      <div className="loading-text text-black text-3xl absolute top-[48%] translate-y-[-50%]">{percentage}%</div>
     <div className=" w-[20%]">
      <AnimatedSVG />
      </div>
    </div>
  );
};

export default Loading;
