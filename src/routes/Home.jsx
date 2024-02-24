import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getImagePath, useWindowSize } from "../helpers/helpers";

// Componente Home que utiliza el hook useWindowSize
const Home = () => {
  const [currentImage, setCurrentImage] = useState(1);
  const [width, height] = useWindowSize(); // Usa el hook para obtener el ancho y alto de la ventana

  useEffect(() => {
    const interval = setInterval(() => {
      const nextImage = currentImage === 4 ? 1 : currentImage + 1;
      setCurrentImage(nextImage);
    }, 10000);

    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div className="image-container">
      {Array.from({ length: 4 }, (_, i) => (
        <img
          key={i}
          src={getImagePath(`transicionNueva${i + 1}.webp`)}
          className={`imagen imagen${i + 1} ${
            currentImage === i + 1 ? "active" : ""
          }`}
          style={{ zIndex: currentImage === i + 1 ? 4 : 1 }}
        />
      ))}

      <img src="/NUBE-1.png" className="nube nube1 w-auto h-auto" />
      <img src="/NUBE-2.png" className="nube nube2 w-auto h-auto" />
      <img src="/NUBE-3.png" className="nube nube3 w-auto h-auto" />
      <img src="/NUBE-4.png" className="nube nube4 w-auto h-auto" />

      <div className="fadeIn onBoarding absoluteCenterParrafos gradiente">
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
