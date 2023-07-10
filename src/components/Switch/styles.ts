import styled, { css, keyframes } from 'styled-components'
import { ThemeProps } from '../../types'

export const SwitchContainer = styled.div`
  position: relative;
  width: 4rem;

  margin: 0.25rem auto;
`

const slideIn = keyframes`
  from {
    left: 0;
  }
  to {
    left: 50%;
  }
`

const slideOut = keyframes`
  from {
    left: 50%;
  }
  to {
    left: 0;
  }
`

export const SwitchButton = styled.button<ThemeProps>`
  width: 2rem;
  height: 2rem;
  background: ${(props) => props.theme.switchColor}
    ${(props) => props.theme.switchBgUrl} no-repeat center;
  border: 0;
  border-radius: 50%;

  position: absolute;
  z-index: 1;
  top: 50%;

  animation: ${(props) =>
    props.actualTheme === 'light'
      ? css`
          ${slideIn} 0.2s forwards
        `
      : css`
          ${slideOut} 0.2s
        `};
  transform: translateY(-50%);

  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      outline: 0.5rem solid ${(props) => props.theme.socialLinkHover};
    }
  }
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
