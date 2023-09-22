import { Container, Form, Section } from "./styles";
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { NoteItem } from "../../components/NoteItem"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { FiArrowLeft } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { useState } from "react";
import { api } from "../../services/api";

export function New() {
  const [title, setTitle] = useState("")
  const [rating, setRating] = useState(0)
  const [description, setDescription] = useState("")
  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag("")
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }


  async function handleNewMovie() {
    if (!title) {
      return alert("Digite o título do filme")
    }

    if (newTag) {
      return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio")
    }

    if (!rating) {
      return alert("Dê uma nota ao filme")
    }

    await api.post("/notes", {
      title,
      description,
      movie_tags: tags,
      rating
    })

    alert("Nota criada com sucesso!")
    handleBack()
  }

  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <ButtonText
              icon={FiArrowLeft}
              title="voltar"
              onClick={handleBack}
            />
            <h1>Novo filme</h1>
          </header>

          <div className="film">
            <Input
              placeholder="Título"
              onChange={e => setTitle(e.target.value)}
            />

            <Input
              placeholder="Sua nota (de 0 a 5)"
              onChange={e => setRating(e.target.value)}
            />
          </div>

          <Textarea
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)}
          />

          <span>Marcadores </span>

          <Section>
            <div className="tags">
              {
                tags.map((tag, index) => (
                  <NoteItem
                    key={String(index)}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />
                ))
              }

              <NoteItem
                isNew
                placeholder="Novo marcador"
                onChange={e => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />

            </div>
          </Section>

          <div className="buttons">
            <Button title="Salvar alterações" onClick={handleNewMovie} />
          </div>

        </Form>
      </main>
    </Container>
  )
}
