import { useEffect, useState } from "react";
import { getImagePath } from "../helpers/helpers";

const BackgroundTransition = () => {
  const [currentImage, setCurrentImage] = useState(1);

  useEffect(() => {
    // Precargar las imágenes de transición y nubes
    precargarImagenes();

    // Intervalo para cambiar las imágenes de transición
    const interval = setInterval(() => {
      const nextImage = currentImage === 4 ? 1 : currentImage + 1;
      setCurrentImage(nextImage);
    }, 10000);

    return () => clearInterval(interval);
  }, [currentImage]);

  const precargarImagenes = () => {
    // Precargar imágenes de transición
    for (let i = 1; i <= 4; i++) {
      const imgTransicion = new Image();
      imgTransicion.src = getImagePath(`transicionNueva${i}.webp`);
    }

    // Precargar imágenes de nubes
    const nubes = ["/NUBE-1.png", "/NUBE-2.png", "/NUBE-3.png", "/NUBE-4.png"];
    nubes.forEach((src) => {
      const imgNube = new Image();
      imgNube.src = src;
    });
  };

  return (
    <>
      {Array.from({ length: 4 }, (_, i) => (
        <img
          key={i}
          src={getImagePath(`transicionNueva${i + 1}.webp`)}
          className={`fixed imagen imagen${i + 1} ${
            currentImage === i + 1 ? "active" : ""
          }`}
          style={{ zIndex: currentImage === i + 1 ? 4 : 1 }}
        />
      ))}
      <img src="/NUBE-1.png" className="fixed nube nube1 w-auto h-auto" />
      <img src="/NUBE-2.png" className="fixed nube nube2 w-auto h-auto" />
      <img src="/NUBE-3.png" className="fixed nube nube3 w-auto h-auto" />
      <img src="/NUBE-4.png" className="fixed nube nube4 w-auto h-auto" />
    </>
  );
};

export default BackgroundTransition;
