import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root{
    --primary-color:#007bff;
    --secondary-color:#6c757d;
    --background-dark-color:#10121A;
    --background-light-color:#F1F1F1;
    --border-color:#2e344e;
    --white-color:#fff;
    --font-light-color:#a4acc4;
    --font-dark-color:#313131;
    --font-dark-color2:#151515;
    --sidebar-dark-color:#191D2B;
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
}


body{
    background-color: var(--background-dark-color);
    color: var(--font-light-color);
}

a{
    font-family: inherit;
    color: inherit;
    font-size: inherit;
}
`;

export default GlobalStyles;
