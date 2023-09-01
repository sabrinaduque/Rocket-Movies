import { FiPlus } from "react-icons/fi"
import { Container, Content, NewNote } from './styles'
import { Header } from '../../components/Header'
import { Note } from '../../components/Note'
import { Stars } from '../../components/Stars'

export function Home() {
  return (
    <Container>
      <Header />

      <Content>
        <main>
          <div className="addFilme">
            <h1>Meus filmes</h1>
            <NewNote>
              <FiPlus />
              Adicionar filme
            </NewNote>
          </div>


          <Note
            data={{
              title: 'Interestellar',
              stars: <Stars scoring={4} width="20px" height="20px" />,
              description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...',
              tags: [
                { id: '1', name: 'Ficção Científica' },
                { id: '2', name: 'Drama' },
                { id: '3', name: 'Família' }
              ]
            }}
          />
          <Note data={{
            title: 'Interestellar',
            stars: <Stars scoring={4} width="20px" height="20px" />,
            description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...',
            tags: [
              { id: '1', name: 'Ficção Científica' },
              { id: '2', name: 'Drama' },
              { id: '3', name: 'Família' }
            ]
          }}
          />
          <Note data={{
            title: 'Interestellar',
            stars: <Stars scoring={4} width="20px" height="20px" />,
            description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...',
            tags: [
              { id: '1', name: 'Ficção Científica' },
              { id: '2', name: 'Drama' },
              { id: '3', name: 'Família' }
            ]
          }}
          />
        </main>
      </Content>


    </Container>
  )
}
