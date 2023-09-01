import { Container, Form, Background } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi'

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>Rocket Movies</h1>
        <p>
          Aplicação para acompanhar tudo que assistir.
        </p>

        <h2>Crie sua conta</h2>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
        />

        <Button title="Entrar" />

        <a href="/">
          <FiArrowLeft />
          Voltar para o login
        </a>
      </Form>
      <Background />
    </Container>
  )
}
