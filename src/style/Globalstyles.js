import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
}

html{
    font-size: 10px;
    width: 36rem;
    height: 60rem;
    background: var(--DarkMode-Grey_900, #212121);
}

a {
    text-decoration: none;
    color: black;
}

button{
    cursor: pointer;
    outline: none;
    border: 0;
}

input{
    outline: none;
}

`;

export default GlobalStyle;
