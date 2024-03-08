import React, { useState, useEffect } from "react";

const Loading = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((oldPercentage) => {
        if (oldPercentage >= 100) {
          clearInterval(interval);
          return 100;
        }
        return oldPercentage + 1;
      });
    }, 100); // Actualiza cada 100 ms

    return () => clearInterval(interval); // Limpieza al desmontar
  }, []);

  return (
    <div className="loading-container w-full h-full relative bg-black flex justify-center items-center">
      <div className="loading-text text-white text-3xl absolute top-[48%] translate-y-[-50%]">{percentage}%</div>
      <div className="line-loading absolute bottom-[40%] w-full h-5 overflow-hidden"></div>
      <img src="/lineaCarga-03.svg" className="line-image" alt="linea de carga"/>
    </div>
  );
};

export default Loading;
