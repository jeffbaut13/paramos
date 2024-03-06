import React, { useRef, useEffect, useState } from "react";

const ContenedorConMedicion = () => {
  const contenedorRef = useRef(null);
  const [altura, setAltura] = useState(null);

  useEffect(() => {
    // Función para medir la altura del contenedor
    const medirAltura = () => {
      if (contenedorRef.current) {
        const alturaContenedor = contenedorRef.current.clientHeight;
        setAltura(alturaContenedor);
      }
    };

    // Llamamos a la función de medición cuando se monta el componente
    medirAltura();

    // También puedes suscribirte a eventos de redimensionamiento o cambios en el contenido
    // para actualizar la altura cuando sea necesario
    window.addEventListener("resize", medirAltura);

    // Cleanup: remover el evento al desmontar el componente
    return () => {
      window.removeEventListener("resize", medirAltura);
    };
  }, []); // El array vacío asegura que este efecto solo se ejecute una vez al montar el componente

  return (
    <div ref={contenedorRef}>
      {/* Tu contenido aquí */}
      <p>Contenido del contenedor</p>
      <p>Altura del contenedor: {altura}px</p>
    </div>
  );
};

export default ContenedorConMedicion;
