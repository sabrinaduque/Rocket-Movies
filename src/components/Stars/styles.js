import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  > svg {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 20px;
  }
`
