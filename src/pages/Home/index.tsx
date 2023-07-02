import {
  Avatar,
  Container,
  Link,
  List,
  Name,
  Profile,
  SocialLink,
  SocialLinks,
} from './styles'

import avatar from '../../assets/avatar.png'
import IonIcon from '@reacticons/ionicons'

export const Home = () => {
  return (
    <Container>
      <Profile>
        <Avatar
          src={avatar}
          alt='Foto de Pedro Henrique sorrindo, usando camisa preta, barba e fundo desfocado.'
        />

        <Name>@pedrohfd</Name>
      </Profile>
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
          <Link href='#' target='_blank'>
            Fale comigo
          </Link>
        </li>
      </List>

      <SocialLinks>
        <SocialLink href='https://github.com/pedrohfd' target='_blank'>
          <IonIcon name='logo-github' />
        </SocialLink>
        <SocialLink>
          <IonIcon name='logo-whatsapp' />
        </SocialLink>
        <SocialLink>
          <IonIcon name='logo-linkedin' />
        </SocialLink>
      </SocialLinks>
    </Container>
  )
}
