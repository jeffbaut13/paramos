import React, { useState } from "react";
import DigitarFecha from "../components/input";

const Fecha = () => {
  const [inputNumber, setInputNumber] = useState("");
  const [animatedNumber, setAnimatedNumber] = useState(2024);

  const easeOutQuad = (t) => 1 - (1 - t) * (1 - t);
  const easeInQuart = (t) => t * t * t * t;

  const startAnimation = () => {
    const targetNumber = parseInt(inputNumber, 10);
    const animationDuration = 3000; // 3 segundos
    const animationInterval = 30; // Intervalo de actualización en milisegundos
    const frames = Math.ceil(animationDuration / animationInterval);

    let currentFrame = 0;
    const totalDifference = animatedNumber - targetNumber;
    const decelerationPoint = Math.ceil(0.6 * frames);

    const animationIntervalId = setInterval(() => {
      const t = currentFrame / frames;

      const ease =
        currentFrame < decelerationPoint ? easeOutQuad(t) : easeInQuart(t);

      const difference =
        currentFrame < decelerationPoint
          ? Math.ceil(totalDifference / decelerationPoint)
          : Math.ceil(totalDifference / (frames - decelerationPoint));

      setAnimatedNumber((prevNumber) =>
        Math.max(prevNumber - difference * ease, targetNumber)
      );

      currentFrame += 1;

      if (currentFrame >= frames || animatedNumber <= targetNumber) {
        clearInterval(animationIntervalId);
        setAnimatedNumber(targetNumber);
      }
    }, animationInterval);
  };

  const handleNextClick = () => {
    startAnimation();
  };

  return (
    <div>
      <label>
        Ingrese un número:
        <DigitarFecha
          inputNumber={inputNumber}
          setInputNumber={setInputNumber}
          handleNextClick={handleNextClick}
        />
      </label>

      <div>
        <p>Número animado: {Math.round(animatedNumber)}</p>
      </div>
    </div>
  );
};

export default Fecha;
