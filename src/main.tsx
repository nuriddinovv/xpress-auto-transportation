import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { App } from "./App";
import "./index.css";
import "@mantine/core/styles.css";

const root = createRoot(document.getElementById("root")!);

root.render(
  <BrowserRouter>
    <MantineProvider>
      <App />
    </MantineProvider>
  </BrowserRouter>
);
