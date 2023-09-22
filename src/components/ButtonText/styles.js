import styled from "styled-components"

export const Container = styled.button`
      display: flex;
      width: fit-content;
      font-size: 20px;
      color: ${({ theme }) => theme.COLORS.PINK};
      background: none;
      border: none;
      align-items: center;
      gap: 8px;
`

