// index.js or App.js
import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot from react-dom
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n"; // Import the configured i18n instance
import App from "./App";

const root = createRoot(document.getElementById("root")); // Use createRoot instead of ReactDOM.render

root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
