import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`  
  @font-face {
    font-family: 'Helvetica Neue Bold';
    font-style: italic;
    font-weight: normal;
    src: local('Helvetica Neue Bold'), url('./fonts/HelveticaNeueBold.woff') format('woff');
  }
  @font-face {
    font-family: 'Helvetica Neue Medium';
    font-style: normal;
    font-weight: normal;
    src: url('./fonts/HelveticaNeue-Medium.woff') format('woff');
  }

  @font-face {
    font-family: 'Agua Fina Script Regular';
    font-style: normal;
    font-weight: normal;
    src: url('./fonts/AguafinaScript-Regular.ttf') format('truetype');
  }

h1 {
  font-family: "Agua Fina Script Regular";
  font-size: 18px;
}  
`
