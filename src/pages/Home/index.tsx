import {
  Avatar,
  Container,
  Link,
  List,
  Name,
  Profile,
  SocialLink,
  SocialLinks,
  Switch,
  SwitchArea,
  SwitchTrack,
} from './styles'

import avatar from '../../assets/avatar.png'
import IonIcon from '@reacticons/ionicons'

interface HomeProps {
  handleToggleTheme: () => void
  theme: 'light' | 'dark'
}

export const Home = ({ handleToggleTheme, theme }: HomeProps) => {
  return (
    <Container>
      <Profile>
        <Avatar
          src={avatar}
          alt='Foto de Pedro Henrique sorrindo, usando camisa preta, barba e fundo desfocado.'
        />

        <Name>@pedrohfd</Name>
      </Profile>

      <SwitchArea onClick={handleToggleTheme}>
        <Switch actualTheme={theme} />
        <SwitchTrack />
      </SwitchArea>

      <List>
        <li>
          <Link href='https://github.com/pedrohfd' target='_blank'>
            Meu portfólio
          </Link>
        </li>
        <li>
          <Link href='#' target='_blank'>
            Meu currículo
          </Link>
        </li>
        <li>
          <Link href='#' target='_blank'>
            Meus certificados
          </Link>
        </li>
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
