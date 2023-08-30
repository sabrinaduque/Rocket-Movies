import styled from 'styled-components'

export const Container = styled.button`
  color: ${({ theme }) => theme.COLORS.PINK};
  font-size: 16px;
  background: none;
  border: none;
  display: flex;
  align-items: center;

  > svg {
    margin-right: 8px;
  }
`
