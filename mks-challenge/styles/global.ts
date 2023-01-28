import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus{
        outline: 0;
    }

    body {
        background-color: ${props => props.theme.background};
        color: ${props => props.theme.gray500}
    }

    body, button {
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
        font-size: 1rem;
    }

`