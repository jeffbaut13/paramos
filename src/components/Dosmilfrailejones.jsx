import React from "react";

const Dosmilfrailejones = () => {
  return (
    <div className="dosmilFrailejones flex relative h-full p-8">
      <div
        className="BoxDosmilImage BoxesImgStart flex-center z-10 relative"
        style={{ backgroundImage: "url(/360/360.webp)" }}
      >
        <p>texto</p>
      </div>
      <div className="BoxDosmilTexto BoxesTextEnd flex-center z-0 relative">
        <p className="origenDosmil font-bold uppercase text-5xl tracking-widest whitespace-nowrap">
          Nuevo parrafo
        </p>
      </div>
    </div>
  );
};

export default Dosmilfrailejones;
