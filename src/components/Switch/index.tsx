import { HomeProps } from '../../types'
import { SwitchButton, SwitchContainer, SwitchTrack } from './styles'

export const Switch = ({ handleToggleTheme, theme }: HomeProps) => {
  return (
    <SwitchContainer onClick={handleToggleTheme}>
      <SwitchButton
        actualTheme={theme}
        name='Botão do tipo switch para a mudança de tema de escuro para claro'
      />
      <SwitchTrack />
    </SwitchContainer>
  )
}
