import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.header`
  grid-area: header;
  height: 105px;
  width: 100%;
  border-bottom: 1px solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 123px;
  gap: 64px;

  > h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`
export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  >img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }

  >div {
    display: flex;
    flex-direction: column;
    margin-right: 10px;
    line-height: 24px;

    strong {
      display: flex;
      justify-content: flex-end;
      width: 190px;
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`
export const Logout = styled.button`
  display: flex;
  justify-content: flex-end;
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`
