import styled from 'styled-components'

interface ThemeProps {
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

export const Container = styled.div`
  max-width: 36.75rem;
  width: 100%;

  padding: 0 1.5rem;

  margin: 3.5rem auto 0;
`

export const Profile = styled.div`
  text-align: center;
  padding: 1.5rem;
`

export const Avatar = styled.img`
  width: 7rem;
`

export const Name = styled.p`
  font-weight: 500;
  line-height: 1.5rem;

  margin-top: 0.5rem;
`

export const SwitchArea = styled.div`
  position: relative;
  width: 4rem;

  margin: 0.25rem auto;
`

export const Switch = styled.button<ThemeProps>`
  width: 2rem;
  height: 2rem;
  background: ${(props) => props.theme.switchColor}
    ${(props) => props.theme.switchBgUrl} no-repeat center;
  border: 0;
  border-radius: 50%;

  position: absolute;
  z-index: 1;
  top: 50%;
  left: ${(props) => (props.actualTheme === 'dark' ? '0' : 'initial')};
  right: ${(props) => (props.actualTheme === 'dark' ? 'initial' : '0')};
  transform: translateY(-50%);
`

export const SwitchTrack = styled.span<Partial<ThemeProps>>`
  display: block;

  width: 4rem;
  height: 1.5rem;
  background: ${(props) => props.theme.surfaceColor};
  border: 1px solid ${(props) => props.theme.strokeColor};
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 1rem;
`

export const List = styled.ul`
  list-style: none;

  display: flex;
  flex-direction: column;

  gap: 1rem;

  padding: 1.5rem 0;
`

export const Link = styled.a<Partial<ThemeProps>>`
  display: flex;

  background: ${(props) => props.theme.surfaceColor};
  border: 1px solid ${(props) => props.theme.strokeColor};
  border-radius: 0.5rem;
  font-weight: 500;
  text-decoration: none;

  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  padding: 1rem 1.5rem;
  align-items: center;
  justify-content: center;

  transition: background 0.2s;

  &:hover {
    background: ${(props) => props.theme.surfaceColorHover};
    border: 1px solid ${(props) => props.theme.strokeColorHover};
  }
`

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;

  padding: 1.5rem 0;

  font-size: 1.5rem;
`

export const SocialLink = styled.a<Partial<ThemeProps>>`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1rem;
  border-radius: 50%;

  transition: background 0.2s;

  &:hover {
    background: ${(props) => props.theme.socialLinkHover};
  }
`
