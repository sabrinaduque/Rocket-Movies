import { Container, Profile, Logout } from './styles'
import { FiSearch } from 'react-icons/fi'
import { Input } from '../Input'
import { useAuth } from "../../hooks/auth"
import { api } from '../../services/api'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { useNavigate } from "react-router-dom";

export function Header() {
  const { signOut, user } = useAuth()
  const navigation = useNavigate()

  function handleSignOut() {
    navigation("/")
    signOut()
  }
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  return (
    <Container>
      <h1>RocketMovies</h1>

      <Input
        placeholder="Pesquisar pelo título"
        type="text"
        icon={FiSearch}
      />

      <Profile to="/profile">
        <div>
          <strong>{user.name}</strong>
          <Logout onClick={handleSignOut} >Sair</Logout>
        </div>
        <img
           src={avatarUrl}
           alt={user.name}
        />
      </Profile>
    </Container>
  )
}
