import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        height: 100%;
    }

    html, body {
        font-size: 1rem;
        line-height: 1.5;
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        font-style: normal;
    }

    body, p, h1, h2, h3, h4, h5, h6, span, strong, em, a, button, input, textarea, select {
        font-size: inherit;
        line-height: inherit;
    }

    body {
        background-color: ${props => props.theme.background};
        color: ${props => props.theme.text};
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button, input, textarea, select {
        all: unset;
        font: inherit;
    }

    ul, ol {
        list-style: none;
    }

    img, video {
        max-width: 100%;
        height: auto;
        display: block;
    }

    table {
        border-collapse: collapse;
        width: 100%;
    }
`