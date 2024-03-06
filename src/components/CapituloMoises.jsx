import React from "react";

export const CapituloMoises = () => {
  return (
    <div className="capituloMoises absolute w-full h-full z-[1] flex">
      <div className="opacity-1 relative w-full h-full paddingComponentes">
        <video className="Moisesbgvid" playsInline autoPlay muted loop controls>
          <source src={"/episodios/muestra-1.mp4"} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};
