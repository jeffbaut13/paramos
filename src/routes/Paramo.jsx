import { useState, useEffect } from "react";

export default function Home() {
  const [currentHour, setCurrentHour] = useState(new Date().getHours());
  const [currentMinute, setCurrentMinute] = useState(new Date().getMinutes());
  const [currentImage, setCurrentImage] = useState(1); // Estado para la imagen actual

  useEffect(() => {
    const now = new Date();
    const newHour = now.getHours();
    const newMinute = now.getMinutes();

    setCurrentHour(newHour);
    setCurrentMinute(newMinute);

    // Cambia la lógica según las horas, minutos y las imágenes que quieras mostrar
    if (newHour >= 8 && newMinute <= 59 && newHour <= 12) {
      setCurrentImage(1);
    } else if (newHour >= 12 && newMinute <= 59 && newHour <= 15) {
      setCurrentImage(2);
    } else if (newHour >= 15 && newMinute <= 59 && newHour <= 18) {
      setCurrentImage(3);
    } else if (newHour >= 18 && newMinute <= 59 && newHour <= 8) {
      setCurrentImage(4);
    } else {
      // En otras horas, puedes mostrar una imagen predeterminada o hacer algo más
      setCurrentImage(0);
    }
  }, []);

  return (
    <div>
      {currentImage !== 0 ? (
        <img src={`imagen${currentImage}.jpg`} alt={`Imagen ${currentImage}`} />
      ) : (
        <p>No hay imagen para mostrar en esta hora</p>
      )}
    </div>
  );
}
