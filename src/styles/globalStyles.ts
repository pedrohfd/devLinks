import { createGlobalStyle } from 'styled-components'

interface ThemeProps {
  theme: {
    textColor: string
    bgUrl: string
  }
}

export const GlobalStyle = createGlobalStyle<Partial<ThemeProps>>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.bgUrl} no-repeat top center/cover;
    height: 100vh;
    overflow: hidden;
  }

  body * {
    font-family: 'Inter', sans-serif;
    color: ${(props) => props.theme.textColor};
  }

  @media (min-width: 700px) {
    body {
      background: ${(props) =>
        props.theme.bgUrlDesktop} no-repeat center center/cover;
    }
  }
`
