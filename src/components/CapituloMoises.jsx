import React from "react";

export const CapituloMoises = () => {
  return (
    <div
      style={{ backgroundImage: "url(/contruccionVivero.webp)" }}
      className="capituloMoises opacity-0 relative h-full p-8"
    >
      <video className="Moisesbgvid" playsInline autoPlay muted loop controls>
        <source src={"/episodios/muestra-1.mp4"} type="video/mp4" />
      </video>
    </div>
  );
};
