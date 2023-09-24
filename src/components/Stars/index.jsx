import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Container } from './styles';

export function Stars({ scoring }) {
  const stars = new Array(5).fill(null)

  return (
    <Container>
      {stars.map((star, index) => index < Number(scoring) ? (
        <AiFillStar key={index} />
      ) : (
        <AiOutlineStar key={index} />
      ))}
    </Container>
  )
}
