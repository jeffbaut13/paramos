import React, { useState, useRef, useEffect } from "react";

const DigitarFecha = ({ setInputNumber, inputNumber, handleNextClick }) => {
  const [digits, setDigits] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    if (!isNaN(value) && value.length <= 1) {
      const newDigits = [...digits];
      newDigits[index] = value;

      setDigits(newDigits);

      if (value !== "" && index < 3) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && index > 0 && digits[index] === "") {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = () => {
    const result = digits.join("");
    const resultado = parseInt(result);
    console.log(typeof resultado);
    setInputNumber(resultado);
    // Aquí puedes realizar la acción que desees con el código de 4 dígitos.
  };

  useEffect(() => {
    if (inputNumber !== "") {
      handleNextClick();
    }
  }, [inputNumber]);

  return (
    <div>
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
      <button onClick={handleSubmit}>Enviar</button>
    </div>
  );
};

export default DigitarFecha;
