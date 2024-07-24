import React from "react";
import ContactForm from "./Formulario";
const isMobile = window.innerWidth <= 1024;
const Contacto = ({curvas}) => {
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
          className={` overflow-hidden  bg-no-repeat bg-cover w-full   flex ${!curvas ? "rounded-3xl": ""}`}
        >
          <div className={`w-full h-auto bg2  flex xs:flex-col lg:flex-row ${!curvas ? "rounded-3xl": ""}`}>
            <div className=" lg:w-[50%] xs:w-full lg:h-full xs:h-[30%] flex flex-col lg:justify-center xs:justify-end lg:p-32">
              <p className="uppercase tamanoTitulos textoContacto lg:text-start xs:text-center font-bold text-white tracking-widest whitespace-wrap relative">
              <span className="w-full">
                
              Sembraremos en agosto. <br   />
              </span>
                <span className="w-full lg:text-2xl xs:text-base xs:mt-6 lg:mt-8 inline-block">
                
                  Hazte guardián del <br className="lg:hidden" />Páramo aquí:
                </span>
              </p>
            </div>
            <div className="lg:w-[50%] lg:h-full xs:h-[70%] z-50 flex items-center justify-center">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
