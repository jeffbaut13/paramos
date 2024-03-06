import React, { useState } from 'react';
import axios from 'axios';

function ContactForm() {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsApp] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name,
      whatsapp,
      email,
      message,
    };

    try {
      const response = await axios.post('http://localhost:3000/api/sheet', formData); // Cambia la URL por la dirección de tu servidor
      console.log('Formulario enviado con éxito a Google Sheets', response.data);
      // Limpia el formulario después del envío exitoso o maneja la respuesta como desees
      setName('');
      setWhatsApp('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Hubo un error al enviar el formulario a Google Sheets', error);
      // Aquí puedes manejar el error, por ejemplo, mostrando un mensaje al usuario
    }
  };

  return (
    <div className="contact-form w-[80%]">
      <form onSubmit={handleSubmit} className=' flex-col'>
        <div className="form-group">
          <input
            className='bg-transparent border-b-[1px] py-2 w-[60%] cajasFormMobile placeholder-white text-white'
            type="text"
            placeholder='NOMBRE'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group ">
          <input
            className='bg-transparent border-b-[1px] py-2 my-8 margenFormMobile w-[60%] cajasFormMobile placeholder-white text-white'
            type="text"
            placeholder='NÚMERO DE WHATSAPP'
            value={whatsapp}
            onChange={(e) => setWhatsApp(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            className='bg-transparent border-b-[1px] py-2 w-[60%] cajasFormMobile placeholder-white text-white'
            type="email"
            placeholder='CORREO ELECTRÓNICO'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <textarea
            value={message}
            className=' bg-[#ffffff1c] rounded-lg pb-14 w-[60%] my-8 cajasFormMobile text-white'
            placeholder='Máximo 1800 caracteres'
            onChange={(e) => setMessage(e.target.value)}
            maxLength="1800"
          />
        </div>
        <div className=' w-[60%] flex justify-center'>
        <button className=' bg-white hover:bg-black hover:text-white w-[50%] font-bold rounded-lg justify-center items-center' type="submit">ENVIAR</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
