import { createGlobalStyle } from 'styled-components'
import bgMobile from '../assets/bg-mobile.jpg'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: url(${bgMobile}) no-repeat top center/cover;
  }

  body * {
    font-family: 'Inter', sans-serif;
    color: #fff;
  }
`
