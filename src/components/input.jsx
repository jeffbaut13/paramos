import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const DigitarFecha = ({ setInputNumber, inputNumber, handleNextClick }) => {
  const [digits, setDigits] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    if (!isNaN(value) && value.length <= 1) {
      const newDigits = [...digits];
      newDigits[index] = value;

      setDigits(newDigits);

      // Modificación aquí: uso de setTimeout para el cambio de foco
      if (value !== "" && index < 3) {
        setTimeout(() => {
          inputRefs.current[index + 1].focus();
        }, 10); // Retraso de 10 ms antes de enfocar el siguiente input
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && index > 0 && digits[index] === "") {
      inputRefs.current[index - 1].focus();
    }

    if (e.key === "Enter" && index === 3) {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    const result = digits.join("");
    const resultado = parseInt(result);
    if (result >= 1960 && result <= 2014) {
      setInputNumber(resultado);
    } else {
      alert("No eres apto para este experiemiento");
    }
    // Aquí puedes realizar la acción que desees con el código de 4 dígitos.
  };
  useEffect(() => {
    if (inputNumber !== "") {
      handleNextClick();
    }
  }, [inputNumber]);

  return (
    <>
      <div className="fadeIn camposFecha">
        {digits.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            ref={(input) => (inputRefs.current[index] = input)}
          />
        ))}
      </div>
      <button className="btn fadeIn" onClick={handleSubmit}>
        Iniciar
      </button>
      <Link
        to={"/paramo"}
        className="btn-cards fadeIn absolute bottom-12 text-center letterSpacing"
      >
        Omitir
      </Link>
    </>
  );
};

export default DigitarFecha;
