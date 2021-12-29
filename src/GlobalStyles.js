import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
     *{
        padding:0;
        margin:0;
        box-sizing:border-box;
    }
    html{
        scroll-behavior: smooth;
    }
    body{
        width:100%;
        min-height:100vh;
        height:fit-content;

        background: linear-gradient(68.15deg, #2F2325 16.62%, #8E5D52 85.61%);
    }
`;