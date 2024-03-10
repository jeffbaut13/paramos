import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import "./onboarding.css";
import "./paramos.css";
import "./conoceParamos.css";
import router from "./routes/Rutas";
import Loading from "./components/Loading"; // Importa tu componente de carga aquí

// Define tu componente principal
const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  // Simula alguna operación asincrónica, como una llamada a una API
  React.useEffect(() => {
    // Simulando una operación asincrónica con un timeout
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    // Limpieza del timeout si el componente se desmonta antes de que termine la operación
    return () => clearTimeout(timeout);
  }, []);

  return (
    <React.StrictMode>
      {/* Muestra el componente de carga mientras isLoading sea true */}

      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

// Renderiza el componente principal en el DOM
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
