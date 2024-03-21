import React, { useState } from "react";
import axios from "axios";

function ContactForm() {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsApp] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formStatus, setFormStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fileUrls = [
    "/descargar/descargable.mp4",
    "/descargar/IMAGEN-DESCARGABLE.jpg"
  ];

  const downloadFiles = () => {
    fileUrls.forEach(url => {
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', ''); 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = {
      name,
      whatsapp,
      email,
      message,
    };

    try {
      const response = await axios.post(
        "https://servernodeparamos.onrender.com/api/sheet",
        formData
      ); // Cambia la URL por la dirección de tu servidor
      setFormStatus("Formulario enviado con éxito.");
      // Limpia el formulario después del envío exitoso o maneja la respuesta como desees
      downloadFiles();
      setName("");
      setWhatsApp("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setFormStatus("Hubo un error al enviar el formulario.");

    } finally {
        setIsLoading(false); // Finaliza la carga después de recibir la respuesta
      }
  };

  return (
    <div className="contact-form   w-[80%] max-lg:pb-6">
      <form onSubmit={handleSubmit} className=" flex-col">
        <div className="form-group">
          <input
            className="bg-transparent border-b-[1px] lg:py-2 lg:w-[60%] xs:w-full max-lg:text-xs cajasFormMobile placeholder-white text-white"
            type="text"
            placeholder="NOMBRE"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group ">
          <input
            className="bg-transparent border-b-[1px] lg:py-2 my-8 margenFormMobile max-lg:text-xs lg:w-[60%] xs:w-full cajasFormMobile placeholder-white text-white"
            type="text"
            placeholder="NÚMERO DE WHATSAPP"
            value={whatsapp}
            onChange={(e) => setWhatsApp(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            className="bg-transparent border-b-[1px] lg:py-2 lg:w-[60%] max-lg:text-xs xs:w-full cajasFormMobile placeholder-white text-white"
            type="email"
            placeholder="CORREO ELECTRÓNICO"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <textarea
            value={message}
            className=" placeTextAreaContacto-placeholder bg-[#ffffff1c] max-lg:text-xs rounded-lg xl:pb-14 xs:pb-6 lg:w-[60%] xs:w-full my-8 cajasFormMobile text-white"
            placeholder="Máximo 1800 caracteres"
            onChange={(e) => setMessage(e.target.value)}
            maxLength="1800"
          />
        </div>
        <div className="form-group">
          {isLoading ? (
            <div className="text-start  text-white mb-4 bg-[#ffffff1c] lg:w-[60%] xs:w-full text-xs">Enviando formulario...</div>
          ) : (
            formStatus && <div className="text-start text-white mb-4 bg-[#ffffff1c] lg:w-[60%] xs:w-full text-xs">{formStatus}</div>
          )}
        </div>
        <div className="lg:w-[60%] xs:w-full flex justify-center">
          <button
            className="w-fit flex-center-col uppercase tracking-[0.3em] flex items-center justify-center font-normal px-5 py-3 text-center lg:text-base xs:text-xs rounded-lg hover:bg-black bg-white transition-all ease-in-out duration-300 text-black hover:text-white"
            type="submit"
            disabled={isLoading} // Deshabilitar el botón durante la carga
          >
            Quiero ayudar
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
