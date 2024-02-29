import React from "react";

const Contacto = () => {
  return (
    <div className="contacto flex h-full">
      <div
        style={{ backgroundImage: "url(/contacto/contacto.webp)" }}
        className=" overflow-hidden  bg-no-repeat bg-cover w-full rounded-3xl flex "
      >
        <div className=" w-full h-auto bg2 flex">
          <div className=" w-[50%] h-full flex-center flex-col">
            <p className="textoContacto font-bold text-white text-3xl tracking-widest whitespace-wrap relative">
              ESTAMOS PARA
              <br /> RESOLVER TODAS
              <br /> TUS DUDAS.
            </p>

            <p className="parrafoContacto text-1xl text-white mt-5">
              LLENA EL FORMULARIO Y CUÉNTANOS
              <br /> CÓMO PODEMOS AYUDARTE.
            </p>
          </div>
          <div className=" w-[50%] h-full z-50">
            <getresponse-form
              form-id="54cf2b38-9182-4302-9bfa-e9b09178604d"
              e="1"
            ></getresponse-form>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
