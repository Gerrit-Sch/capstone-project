import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
* {
    box-sizing: border-box;
   
  }
  body {
    font-family: Poppins;
    display: grid;
   
    height: 100vh;
  }

  main {
    overflow-y:auto
  }
  

  
  input,
  label,
  textarea,
  button {
    font-size: 1em;
  }

  
`;
