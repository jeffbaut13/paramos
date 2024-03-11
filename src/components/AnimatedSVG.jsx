import React, { useState, useEffect } from 'react';

const AnimatedSVG = () => {
  const pathLength = 702.1828002929688; // La longitud exacta del path
  const [dashoffset, setDashoffset] = useState(pathLength);

  useEffect(() => {
    const decreasePerFrame = pathLength / (5000 / 60); // Completa en 5 segundos
    const interval = setInterval(() => {
      setDashoffset((prev) => {
        const newValue = prev - decreasePerFrame;
        return newValue < 0 ? 0 : newValue;
      });
    }, 60); // Ejecuta cada 60ms para una animación suave
    return () => clearInterval(interval);
  }, []);

  return (
    <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 252.53 125.84">
      <path 
        d="M1.05,124.84h55.59s4.94-5.88,7.15-9.15c0,0,1.94-4.61,2.67-5.81s2.74-4.81,3.27-5.34,3.87-3.27,3.87-3.27c0,0,.67-.6,1.14-1.54s2.14-3.87,3.27-5.75c0,0,1.6-3.27,2.54-3.41,0,0,.6-.33,1.34.53s3.47,2.61,5.41,4.81c1.94,2.2,6.41,7.08,7.22,7.68s8.68,6.61,8.68,6.61c0,0,.94.67,1.87-.07s2.2-2.47,3.21-2.81,10.02-4.01,10.02-4.01c0,0,.53-.2,1.34-1.2s2.07-4.01,2.07-4.01c0,0,.53-.94,1.4-1.2s3.81-1.07,3.81-1.07c0,0,.87-.33,1.67.4s3.67,2.87,4.61,3.94,3.94,3.27,4.68,4.74,2.17,2.85,2.71,3.71,4.71,4.94,5.08,5.24,4.18,2.94,4.58,3.14,1.14.53,1.84-.17,2.81-2.97,3.81-3.84,3.44-2.87,4.54-3.97,4.11-4.91,4.88-6.28,1.37-2.47,2.51-3.47,3.14-2.77,3.14-2.77c0,0,.5-.2,1.1-1.17s1.77-2.54,1.77-2.54c0,0,.97-.94,1.9,0s1.34,2.91,2.81,5.14,1.74,3.17,2.2,3.64,10.69,12.26,11.92,13.59,3.17,3.07,4.18,4.81c1,1.74,2.1,4.01,2.1,4.01h52.59s.21-91.9-85.56-117.29C132.1-3.31,95.5-.24,64.49,16.66,36.56,31.89,7.11,61.18,1,117.44"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        strokeDasharray={pathLength}
        strokeDashoffset={dashoffset}
      />
    </svg>
  );
};

export default AnimatedSVG;