import styled from 'styled-components'

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
export const Profile = styled.div`
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

    a {
      display: flex;
      justify-content: flex-end;
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    strong {
      display: flex;
      justify-content: flex-end;
      width: 190px;
      font-size: 18px;
    }
  }
`
