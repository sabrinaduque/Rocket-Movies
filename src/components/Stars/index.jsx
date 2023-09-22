import { useEffect, useState } from 'react';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Container } from './styles';

export function Stars({ scoring}){
  const [ stars, setStars ] = useState(0);
  
  useEffect(() => {
    setStars(Number(scoring));
    
  }, [ scoring ]);

  return (
    <Container>
      { Array.from({length: stars}, (star, index) => (<AiFillStar key={ index }  />)) }
      { Array.from({length: 5-stars}, (star, index) => (<AiOutlineStar key={ index }  />)) }
    </Container>
  )
}