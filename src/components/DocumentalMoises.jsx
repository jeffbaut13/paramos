import React from "react";

const DocumentalMoises = () => {
  return (
    <div className=" documental w-full h-full flex">
      <div className=" relative w-full h-full paddingComponentes flex">
        <div
          style={{ backgroundImage: "url(/experiencia/moises.webp)" }}
          className="anchoInicialPrimario BoxConoceImg BoxesImgStart bg-center"
        ></div>
        <div className="anchoInicialPrimario BoxMoisesText BoxesTextEnd flex flex-col items-center justify-center">
          <p className=" moisesTexto font-bold uppercase tamanoTitulos tracking-widest whitespace-nowrap">
          EN BOYACÁ
            <br />
            NACE LA HISTORIA
            <br />
            DE NUESTRO
            <br />
            PRIMER GUARDIÁN
            <br />
            DEL PÁRAMO.
           
          </p>
        </div>
        <div
          className=" hidden videoContainer absolute top-0 left-0 w-0 h-0 object-cover"
          style={{ zIndex: 1 }}
        >
          <iframe
            src="https://player.vimeo.com/video/921262445"
            style={{ width: "100%", height: "100%",   }}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default DocumentalMoises;
