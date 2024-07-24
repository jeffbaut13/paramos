import React, { useState, useEffect, useContext } from "react";
import Contacto from "../components/Contacto";
 




// Componente Home que utiliza el hook useWindowSize
const Form = () => {
  return (
    <div className="image-container">
       <Contacto curvas={true}/>
    </div>
  );
};

export default Form;