import "./i18n/i18n";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app/app";
import { Providers } from "./providers";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>
);
