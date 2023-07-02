import bgMobileDark from '../assets/bg-mobile.jpg'
import bgDesktopLight from '../assets/bg-mobile-light.jpg'
import switchBgDark from '../assets/moon-stars.svg'
import switchBgLight from '../assets/sun.svg'

export const darkTheme = {
  textColor: '#fff',
  bgUrl: `url(${bgMobileDark})`,
  strokeColor: 'rgba(255, 255, 255, 0.5)',
  surfaceColor: 'rgba(255, 255, 255, 0.1)',
  strokeColorHover: '#fff',
  surfaceColorHover: 'rgba(255, 255, 255, 0.05)',
  socialLinkHover: 'rgba(255, 255, 255, 0.2)',

  switchColor: '#fff',
  switchBgUrl: `url(${switchBgDark})`,
}

export const lightTheme = {
  textColor: '#000',
  bgUrl: `url(${bgDesktopLight})`,
  strokeColor: 'rgba(0, 0, 0, 0.5)',
  surfaceColor: 'rgba(0, 0, 0, 0.05)',
  strokeColorHover: '#000',
  surfaceColorHover: 'rgba(0, 0, 0, 0.02)',
  socialLinkHover: 'rgba(0, 0, 0, 0.1)',

  switchColor: '#fff',
  switchBgUrl: `url(${switchBgLight})`,
}
