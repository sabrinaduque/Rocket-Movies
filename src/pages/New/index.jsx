import { Container, Form, Section } from "./styles";
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { NoteItem } from "../../components/NoteItem"
import { Button } from "../../components/Button"
import { FiArrowLeft } from 'react-icons/fi'

export function New() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <a href="#" > <FiArrowLeft /> voltar</a>
            <h1>Novo filme</h1>
          </header>

          <div className="film">
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (de 0 a 5)" />
          </div>

          <Textarea placeholder="Observações" />

          <span>Marcadores </span>

          <Section>
            <div className="tags">
              <NoteItem value="React" />
              <NoteItem isNew placeholder="Novo marcador" />
            </div>
          </Section>

          <div className="buttons">
            <Button title="Excluir filme" />
            <Button title="Salvar alterações" />
          </div>

        </Form>
      </main>
    </Container>
  )
}
