import React from "react";

const Descargable = () => {
  return (
    //<div className="descargable absolute w-full h-full z-[1] flex">
    <div className="descargable ocultarEnOrigen  w-full h-full z-[1] flex">
      <div className=" flex w-full h-full">
        <div
          style={{ backgroundImage: "url(/contacto/descargable.webp)" }}
          className=" overflow-hidden  bg-no-repeat bg-cover w-full rounded-3xl flex-col justify-center align-middle font-bold flex-center text-white text-2xl tracking-widest whitespace-wrap text-center "
        >
          <div>
            <p className="textoContacto xs:text-base lg:text-2xl">
              LA NATURALEZA TARDA 150 AÑOS
              <br /> EN CREAR ESTE FRAILEJÓN.
            </p>
            <p className="textoContacto2 pt-10 mb-10 xs:text-base lg:text-2xl">
              A TI TE TOMA 10 SEGUNDOS COMPARTIRLO
              <br /> Y AYUDARNOS A CUIDARLOS.
            </p>
            <a
              href="/contacto/comparte.mp4"
              download
              className="BotonContacto lg:text-2xl xs:text-xs w-fit bg-white hover:bg-black text-black hover:text-white font-bold py-2 px-6 rounded-xl"
              style={{
                display: "block",
                margin: "20px auto",
                textDecoration: "none",
              }}
            >
              COMPÁRTELO
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Descargable;
