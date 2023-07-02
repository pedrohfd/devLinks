import { Home } from './pages/Home'
import { GlobalStyle } from './styles/globalStyles'
import { ThemeProvider } from 'styled-components'

import { lightTheme, darkTheme } from './styles/theme'
import { useState } from 'react'

const App = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  const handleToggleTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark')
  }

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Home handleToggleTheme={handleToggleTheme} theme={theme} />
    </ThemeProvider>
  )
}

export default App
