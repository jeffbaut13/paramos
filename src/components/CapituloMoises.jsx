import React from "react";
import ReactPlayer from "react-player";

const isMobile = window.innerWidth < 640;
const tablet = window.innerWidth >= 640 && window.innerWidth < 1280;
const full = window.innerWidth >= 1500;
const laptop = window.innerWidth >= 1280 && window.innerWidth < 1500;

export const CapituloMoises = ({ playCapitulo, setPlayCapitulo }) => {
  return (
    //<div className="capituloMoises absolute w-full h-full z-[1] flex">
    <div className="capituloMoises relative ocultarEnOrigen w-full h-full z-[1] flex">
      <div className="opacity-1 relative w-full h-full p-0 bg-black">
        <ReactPlayer
          playing={playCapitulo == true ? true : false}
          url="https://vimeo.com/921261787"
          className="react-player"
          loop
          width={
            isMobile ? "350px" : full ? "1400px" : laptop ? "1000px" : "100%" // Otra condición por defecto si ninguna de las anteriores se cumple
          }
          height={`100%`}
          controls
        />
      </div>
    </div>
  );
};
