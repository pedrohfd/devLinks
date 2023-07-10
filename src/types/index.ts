export interface ThemeProps {
  actualTheme: 'light' | 'dark'
  theme: {
    textColor: string
    strokeColor: string
    surfaceColor: string
    strokeColorHover: string
    surfaceColorHover: string
    socialLinkHover: string
    switchColor: string
    switchBgUrl: string
  }
}

export interface HomeProps {
  handleToggleTheme: () => void
  theme: 'light' | 'dark'
}
