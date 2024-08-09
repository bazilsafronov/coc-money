import React from "react";
import ReactDOM from "react-dom/client";
import "./shared/styles/index.sass";
import App from "./app/App";
import { AuthProvider } from "@/shared/providers/AuthContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
