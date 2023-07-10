import { Container, Link, List, SocialLink, SocialLinks } from './styles'

import IonIcon from '@reacticons/ionicons'
import PDF from '../../assets/Currículo.pdf'
import { Profile } from '../../components/Profile'
import { HomeProps } from '../../types'
import { Switch } from '../../components/Switch'

export const Home = ({ handleToggleTheme, theme }: HomeProps) => {
  return (
    <Container>
      <Profile />

      <Switch handleToggleTheme={handleToggleTheme} theme={theme} />

      <List>
        <li>
          <Link href='https://github.com/pedrohfd' target='_blank'>
            Meu portfólio
          </Link>
        </li>
        <li>
          <Link href={PDF} download='Currículo' target='_blank'>
            Meu currículo
          </Link>
        </li>
        {/* <li>
          <Link href='#' target='_blank'>
            Meus certificados
          </Link>
        </li> */}
        <li>
          <Link
            href='mailto:pedrohenriquefrancadedeus@gmail.com'
            target='_blank'
          >
            Fale comigo
          </Link>
        </li>
      </List>

      <SocialLinks>
        <SocialLink href='https://github.com/pedrohfd' target='_blank'>
          <IonIcon name='logo-github' />
        </SocialLink>
        <SocialLink href='https://wa.me/5515991082862' target='_blank'>
          <IonIcon name='logo-whatsapp' />
        </SocialLink>
        <SocialLink href='https://linkedin.com/in/pedrohfd' target='_blank'>
          <IonIcon name='logo-linkedin' />
        </SocialLink>
      </SocialLinks>
    </Container>
  )
}
