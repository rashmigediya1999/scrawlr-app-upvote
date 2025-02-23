import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
// import { UpvoteProvider } from './context/UpvoteContext';
import { theme, GlobalStyle } from "./styles";
import { UpvoteProvider } from "./context/UpvoteContex";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <UpvoteProvider>
        <App />
      </UpvoteProvider>
    </ThemeProvider>
  </StrictMode>
);
