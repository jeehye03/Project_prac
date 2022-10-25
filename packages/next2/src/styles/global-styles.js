import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
}

body {
    box-sizing: border-box;
}

button {
    margin:5px;
    width:80px;
    height:30px;
    border-radius:5px;
}

input {
    border-radius:5px;
}
`;
