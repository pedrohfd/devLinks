import styled from 'styled-components'
import { ThemeProps } from '../../types'

export const Container = styled.div`
  max-width: 36.75rem;
  width: 100%;

  padding: 0 1.5rem;

  margin: 1.25rem auto 0;

  @media (min-width: 700px) {
    margin-top: 3.5rem;
  }
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

  @media (hover: hover) {
    &:hover {
      background: ${(props) => props.theme.surfaceColorHover};
      border: 1px solid ${(props) => props.theme.strokeColorHover};
    }
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

  @media (hover: hover) {
    &:hover {
      background: ${(props) => props.theme.socialLinkHover};
    }
  }
`
