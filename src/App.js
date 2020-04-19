import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./Utils/theme";
import { GlobalStyle } from "./Utils/GlobalStyle";
import { Header } from "./Components/Header/Header";
import { Navbar } from "./Components/Navbar/Navbar";
function App() {
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <>
          <Header />
          <Navbar />
        </>
      </ThemeProvider>
    </div>
  );
}

export default App;
