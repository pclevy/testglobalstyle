import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`  
  @font-face {
    font-family: 'Helvetica Neue Bold';
    font-style: italic;
    font-weight: normal;
    src: local('Helvetica Neue Bold'), url('./assets/fonts/HelveticaNeueBold.woff') format('woff');
  }
  @font-face {
    font-family: 'Helvetica Neue Medium';
    font-style: normal;
    font-weight: normal;
    src: url('./assets/fonts/HelveticaNeue-Medium.woff') format('woff');
  }

  @font-face {
    font-family: 'AguafinaScript-Regular';
    font-style: normal;
    font-weight: normal;
    src: url('./assets/fonts/AguafinaScript-Regular.ttf') format('truetype');
  }

h1 {
  font-family: "AguafinaScript-Regular";
  font-size: 12px;
}  
`

//font-family: "Helvetica Neue Bold";
//font-family: "Arial";


//export default GlobalStyles;

{/*
  USO:
  import { GlobalStyle } from './styles/global'

class App extends Component {
  render() {

    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle/>
          <Container/>
        </>
      </ThemeProvider>

    )
  }
}

      //url(${font}) format('wolfenstein'),

*/}