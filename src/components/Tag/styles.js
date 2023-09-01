import styled from 'styled-components'

export const Container = styled.span`
  font-size: 12px;
  padding: 8px 16px;
  border-radius: 5px;
  margin-right: 6px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.WHITE};
`
