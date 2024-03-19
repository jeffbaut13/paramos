import React, { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import "./onboarding.css";
import "./paramos.css";
import "./conoceParamos.css";
import router from "./routes/Rutas";
import Loading from "./components/Loading"; // Importa tu componente de carga aquí
import { AudioProvider } from "./context/AudioProvider";
import AudioIcon from "./components/AudioIcon";
import { Helmet } from "react-helmet";

// Define tu componente principal
const App = () => {
  const [isRouterReady, setIsRouterReady] = useState(false);
  const [isLoadingVisible, setIsLoadingVisible] = useState(true);

  useEffect(() => {
    const routerTimeout = setTimeout(() => {
      setIsRouterReady(true); // Después de 100ms, indica que el RouterProvider está listo.
    }, 100);

    const loadingTimeout = setTimeout(() => {
      setIsLoadingVisible(false); // Después de 4 segundos, oculta el componente de carga.
    }, 4000);

    return () => {
      clearTimeout(routerTimeout);
      clearTimeout(loadingTimeout);
    };
  }, []);

  return (
    <React.StrictMode>
      <Helmet>
        <title>Guardianes del páramo</title>
        <link rel="canonical" href="/" />
        <meta
          name="description"
          content="Guardianes del páramo, recuperemos nuestros frailejones"
        />
        <meta
          name="keywords"
          content="frailejones, incendios forestales, calentamiento global, páramo, mongua, oceta, sincunsí, inter rapidísimo"
        />
      </Helmet>
      <AudioProvider>
        {isLoadingVisible && <Loading />}{" "}
        {/* Muestra el componente Loading mientras isLoadingVisible sea true */}
        {isRouterReady && ( // Muestra el RouterProvider cuando isRouterReady sea true
          <>
            <RouterProvider router={router} />
            <span className="audioIcon fixed z-50 right-6 bottom-4 w-5 h-5 inline-block">
              <AudioIcon />
            </span>
          </>
        )}
      </AudioProvider>
    </React.StrictMode>
  );
};

export default App;
