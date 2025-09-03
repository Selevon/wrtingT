import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from 'sonner';
import App from "./App.tsx";
import "./index.css";
import { ViewModeProvider } from './contexts/ViewModeContext';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ViewModeProvider>
      <BrowserRouter>
        <App />
        <Toaster />
      </BrowserRouter>
    </ViewModeProvider>
  </StrictMode>
);
