import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
    margin: 0px;
    font-size: 10px; 
}

h1,h2,h3,p{
    margin: 0px;
}
*, *::before, *::after{
    box-sizing:border-box;
}
`;
