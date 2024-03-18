import React from "react";
const isMobile = window.innerWidth <= 1024;
const Descargable = () => {
  return (
    //<div className="descargable absolute w-full h-full z-[1] flex">
    <div className="descargable ocultarEnOrigen  w-full h-full z-[1] flex">
      <div className=" flex w-full h-full">
        <div
          style={{
            backgroundImage: `url(/contacto/${
              isMobile ? "descargableM" : "descargable"
            }.webp)`,
          }}
          className=" overflow-hidden  bg-no-repeat bg-cover w-full rounded-3xl flex-col justify-center align-middle font-bold flex-center text-white text-2xl tracking-widest whitespace-wrap text-center "
        >
          <div>
            <p className="textoContacto xs:text-base lg:text-2xl uppercase">
              Hacer parte del cambio, <br />
              solo te tomará unos segundos.
            </p>
            <p className="textoContacto2 pt-10 mb-10 xs:text-base lg:text-2xl uppercase">
              Descarga el video, compártelo con todos tus contactos <br />y no
              olvides etiquetarnos @interrapidisimo_co.
            </p>
            <a
              href="/contacto/comparte.mp4"
              download
              className="BotonContacto m-auto w-fit flex-center-col uppercase tracking-[0.3em] flex items-center justify-center font-normal px-5 py-3 text-center lg:text-base xs:text-xs rounded-lg hover:bg-black bg-white transition-all ease-in-out duration-300 text-black hover:text-white"
            >
              Descargar video
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Descargable;
