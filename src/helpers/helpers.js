import { useEffect, useState } from "react";

// Hook personalizado para obtener el tamaño de la ventana
export const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);

  useEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return size;
};

// Función para determinar la ruta de imagen basada en el ancho
export const getImagePath = (imageName, width) => {
  // Rutas de las imágenes para dispositivos de escritorio
  const desktopPath = "desktop/";
  // Rutas de las imágenes para dispositivos móviles
  const mobilePath = "mobile/";
  // Cambia la base de la ruta dependiendo del ancho de la pantalla
  return width <= 768
    ? `${mobilePath}${imageName}`
    : `${desktopPath}${imageName}`;
};
