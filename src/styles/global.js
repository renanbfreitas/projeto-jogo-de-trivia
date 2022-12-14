import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        background-color: #FCFCFD;
    }

    button {
        background-color: transparent;
        border: none;
        outline: none;
    }

    a {
        text-decoration: none;
        outline: none;
    }
`;

export default GlobalStyle;
