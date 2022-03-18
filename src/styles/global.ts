import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 1em;
  }
  html, body {
    width: 100%;
    height: 100%;
    font-size: 12px;
    color: #495057;
  }
  #root{
    margin: 0 auto;
    max-width: 500px;
    height: 100%;
    background: #fff;
    position: relative;
    font-weight: bold;
  }
  
  button, a, svg{
    cursor: pointer;
  }

  button{
    border: none;
  }
`;
export default GlobalStyle;
