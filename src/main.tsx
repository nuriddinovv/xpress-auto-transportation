import { hydrateRoot, createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./index.css";
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
// SSR bilan: StrictMode ishlatmaymiz (hydration mismatch xavfi kamayadi)
const app = (
  <HelmetProvider>
    <BrowserRouter>
      <MantineProvider>
        <App />
      </MantineProvider>
      ;
    </BrowserRouter>
  </HelmetProvider>
);

const container = document.getElementById("root") as HTMLElement;

// Universal client entry: agar SSR HTML bor bo'lsa hydrate, bo'lmasa render
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
