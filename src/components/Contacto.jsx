import React from "react";
import ContactForm from "./Formulario";
const isMobile = window.innerWidth <= 1024;
const Contacto = () => {
  return (
    //<div className="contacto absolute w-full h-full z-[1] flex">
    <div className="contacto ocultarEnOrigen w-full h-full z-[1] flex">
      <div className=" flex w-full h-full">
        <div
          style={{
            backgroundImage: `url(/contacto/${
              isMobile ? "contactoM" : "contacto"
            }.webp)`,
          }}
          className=" overflow-hidden  bg-no-repeat bg-cover w-full rounded-3xl flex "
        >
          <div className=" w-full h-auto bg2 flex xs:flex-col lg:flex-row">
            <div className=" lg:w-[50%] xs:w-full lg:h-full xs:h-1/2 flex flex-col justify-center lg:p-32">
              <p className="tamanoTitulos textoContacto lg:text-start xs:text-center font-bold text-white  tracking-widest whitespace-wrap relative">
                HABRÁN MÁS SIEMBRAS EN AGOSTO.<br/> <span className="text-2xl"> <br/>HAZTE VOLUNTARIO</span>
              </p>
            </div>
            <div className="lg:w-[50%] lg:h-full z-50 flex items-center justify-center">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
