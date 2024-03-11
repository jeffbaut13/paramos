import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import './onboarding.css';
import './paramos.css';
import './conoceParamos.css';
import router from './routes/Rutas';
import Loading from './components/Loading'; // Importa tu componente de carga aquí

// Define tu componente principal
const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  // Agrega estados adicionales aquí si es necesario para gestionar la carga de datos para otros componentes

  // useEffect para simular la carga de otros datos o preparaciones mientras se muestra el Loading
  React.useEffect(() => {
    // Aquí puedes realizar llamadas a APIs, cargar recursos adicionales, etc.
    // Este es un buen lugar para preparar todo lo que tus componentes necesiten antes de mostrarse.
    // Por ejemplo, cargar datos de una API:
    // fetch('tuAPI.com/datos')
    //   .then(respuesta => respuesta.json())
    //   .then(datos => setTuEstado(datos));

    const timeout = setTimeout(() => {
      setIsLoading(false); // Esto ocurre después de 5 segundos, indicando que el Loading ha terminado.
    }, 5000);

    // Limpieza: cancela el timeout si el componente se desmonta antes de que se complete
    return () => clearTimeout(timeout);
  }, []);

  return (
    <React.StrictMode>
      {isLoading ? (
        <Loading /> // Muestra el componente Loading mientras isLoading sea true
      ) : (
        // Cuando isLoading es false, tus componentes están listos para mostrarse inmediatamente.
        <RouterProvider router={router} />
      )}
    </React.StrictMode>
  );
};

// Renderiza el componente principal en el DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
