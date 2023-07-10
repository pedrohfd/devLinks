import { Avatar, Name, ProfileContainer } from './styles'
import avatar from '../../assets/avatar.webp'

export const Profile = () => {
  return (
    <ProfileContainer>
      <Avatar
        src={avatar}
        alt='Foto de Pedro Henrique sorrindo, usando camisa preta, barba e fundo desfocado.'
      />

      <Name>@pedrohfd</Name>
    </ProfileContainer>
  )
}
