import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./onboarding.css";
import "./paramos.css";
import "./conoceParamos.css";
import ReactGA4 from "react-ga4";

ReactGA4.initialize("G-73DSGQ4GWK");
ReactGA4.send({
  hitType: "pageview",
  page: window.location.pathname,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
