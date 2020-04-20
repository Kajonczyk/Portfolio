import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./Utils/theme";
import { GlobalStyle } from "./Utils/GlobalStyle";
import { Header } from "./Components/Header/Header";
import { Projects } from "./Components/Projects/Projects";
import { Technologies } from "./Components/Technologies/Technologies";
import { Footer } from "./Components/Footer/Footer";
function App() {
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <>
          <Header />
          <Projects />
          <Technologies />
          <Footer />
        </>
      </ThemeProvider>
    </div>
  );
}

export default App;
