import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: monospace;
  }

  html {
    font-size: 72.5%;
    scroll-behavior: smooth;
    height: 100vh;
  }
  
  body {
    min-height: 100vh;
    background: linear-gradient(155deg, rgba(2, 0, 36, 1), rgba(9, 9, 121, 1), rgba(0, 212, 255, 1));
    background-size: 100% 100%;
    background-attachment: fixed;
    padding-right: 0px!important ;
    overflow:auto!important;
  }

  .link-nav{
    font-size: 15px;
    text-transform: capitalize;
    color: #065492;
    font-weight: 800;
    padding: 10px;
    text-decoration: none;
    position: relative;
  }
  .link-nav:hover::after {
        content: ''; 
        position: absolute; 
        color: #065ea4;
        left: 0; 
        bottom: -2px; 
        width: 100%; 
        height: 3px; 
        background-color: #065ea4; 
    }
`;
