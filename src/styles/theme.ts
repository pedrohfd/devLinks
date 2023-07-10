import bgMobileDark from '../assets/bg-mobile.webp'
import bgDesktopDark from '../assets/bg-desktop.webp'
import bgMobileLight from '../assets/bg-mobile-light.webp'
import bgDesktopLight from '../assets/bg-desktop-light.webp'
import switchBgDark from '../assets/moon-stars.svg'
import switchBgLight from '../assets/sun.svg'

export const darkTheme = {
  textColor: '#fff',
  bgUrl: `url(${bgMobileDark})`,
  bgUrlDesktop: `url(${bgDesktopDark})`,
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
  bgUrl: `url(${bgMobileLight})`,
  bgUrlDesktop: `url(${bgDesktopLight})`,
  strokeColor: 'rgba(0, 0, 0, 0.5)',
  surfaceColor: 'rgba(0, 0, 0, 0.05)',
  strokeColorHover: '#000',
  surfaceColorHover: 'rgba(0, 0, 0, 0.02)',
  socialLinkHover: 'rgba(0, 0, 0, 0.1)',

  switchColor: '#fff',
  switchBgUrl: `url(${switchBgLight})`,
}
