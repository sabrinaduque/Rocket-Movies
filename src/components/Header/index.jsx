import { Container, Profile } from './styles'
import { FiSearch } from 'react-icons/fi'
import { Input } from '../Input'

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>

      <Input
        placeholder="Pesquisar pelo título"
        type="text"
        icon={FiSearch}
      />

      <Profile>
        <div>
          <strong>Sabrina Nasser</strong>
          <a href="#">Sair</a>
        </div>
        <img
          src="https://github.com/sabrinaduque.png"
          alt="Foto do usuário"
        />
      </Profile>
    </Container>
  )
}
