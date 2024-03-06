import { useRef, useState } from "react";

export default function ErrorPage() {
  const [mostrarElementos, setMostrarElementos] = useState(0);

  const handleButtonClick = () => {
    setMostrarElementos((prev) => prev + 1);
  };
  const handleButtonClickE = () => {
    setMostrarElementos((prev) => prev - 1);
  };

  const translateYValue = `-${mostrarElementos * 100}%`;

  return (
    <div className="contenedor-padre fixed bg-black w-screen h-screen flex-center">
      <div className="contenedor-relativo relative bg-white w-[80%] h-[675px] overflow-hidden">
        <div
          className="elementos"
          style={{ transform: `translateY(${translateYValue})` }}
        >
          <div className="elemento bg-blue-500">Elemento 1</div>
          <div className="elemento bg-red-500">Elemento 2</div>
          <div className="elemento bg-yellow-500">Elemento 3</div>
          <div className="elemento bg-pink-500">Elemento 4</div>
          <div className="elemento bg-gray-500">Elemento 5</div>
          <div className="elemento bg-blue-200">Elemento 6</div>
          <div className="elemento bg-green-500">Elemento 7</div>
        </div>
      </div>
      <button
        className="fixed bg-fuchsia-500 translate-x-52"
        onClick={handleButtonClick}
      >
        Mostrar siguiente elemento
      </button>
      <button className="fixed bg-fuchsia-500" onClick={handleButtonClickE}>
        Mostrar anterior elemento
      </button>
    </div>
  );
}
