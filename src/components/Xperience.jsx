import React, { useEffect } from 'react';
import gsap from "gsap";

const Xperience = ({ videoActive, setvideoActive }) => {
  useEffect(() => {
    const tl = gsap.timeline();

   
    
      tl.to(".BoxMoisesText", { width: "100%", duration: 1 });
      tl.to(".BoxConoceImg", { width: "0%", duration: 1 }, "<");
    
      // Segundo scroll: Reducir BoxMoisesText a 0% y mostrar el video al 100%
      tl.to(".BoxMoisesText", { width: "0%", duration: 1 });
      tl.to(".videoContainer", { width: "100%", height: "100%", duration: 1 }, "<");
    
    // Ajusta este efecto según cómo se actualice `videoActive` en tu componente
  }, [videoActive]);

  return (
    <div className="documental w-full h-full flex">
      <div className="experienciaInicial relative w-full h-full paddingComponentes flex">
        <div className="anchoInicialPrimario BoxMoisesText BoxesTextStart flex flex-col items-center justify-center">
          <p className="experienciaTexto font-bold uppercase tamanoTitulos tracking-widest whitespace-nowrap">
            MÁS ALLÁ
            <br />
            DE LA SIEMBRA
            <br />
            DE FRAILEJONES,
            <br />
            CONECTAMOS CON
            <br />
            DEL PÁRAMO.
          </p>
        </div>
        <div
          style={{ backgroundImage: "url(/experiencia/experiencia.webp)" }}
          className=" anchoInicialPrimario BoxConoceImg BoxesImgEnd bg-center"
        ></div>
        {/* Nuevo div para el video */}
        <div
          className="videoContainer absolute top-0 left-0 w-0 h-0 object-cover"
          style={{ zIndex: 1 }}
        >
          <iframe
            src="https://player.vimeo.com/video/921261787"
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

export default Xperience;
