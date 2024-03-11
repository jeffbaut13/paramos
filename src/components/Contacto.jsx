import React from "react";
import ContactForm from "./Formulario";

const Contacto = () => {
  return (
    //<div className="contacto absolute w-full h-full z-[1] flex">
    <div className="contacto ocultarEnOrigen w-full h-full z-[1] flex">
      <div className=" flex w-full h-full">
        <div
          style={{ backgroundImage: "url(/contacto/contacto.webp)" }}
          className=" overflow-hidden  bg-no-repeat bg-cover w-full rounded-3xl flex "
        >
          <div className=" w-full h-auto bg2 flex xs:flex-col lg:flex-row">
            <div className=" w-[50%] h-full flex flex-col justify-center p-32">
              <p className="tamanoTitulos textoContacto font-bold text-white  tracking-widest whitespace-wrap relative">
                ESTAMOS PARA
                <br /> RESOLVER TODAS
                <br /> TUS DUDAS.
              </p>

              <p className="parrafoContacto text-1xl text-white mt-5">
                LLENA EL FORMULARIO Y CUÉNTANOS
                <br /> CÓMO PODEMOS AYUDARTE.
              </p>
            </div>
            <div className=" w-[50%] h-full z-50 flex items-center justify-center">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
