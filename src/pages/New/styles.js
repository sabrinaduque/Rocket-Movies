import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 106px auto;
  grid-template-areas:
  "header"
  "content";

  > main {
    grid-area: content;
    overflow-y: auto;

    span {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 20px;
    }
  }
    .film {
      display: flex;
      gap: 40px;
      margin: 40px 0;
    }

    .buttons {
      display: flex;
      gap: 40px;

     > button:first-child {
      background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      color: ${({ theme }) => theme.COLORS.PINK};
     }
  }
`

export const Form = styled.form`
  margin: 38px 123px;

  > header {
    display: flex;
    gap: 24px;
    flex-direction: column;

    a {
      display: flex;
      font-size: 20px;
      color: ${({ theme }) => theme.COLORS.PINK};
      align-items: center;
      gap: 8px;
    }
  }
`
export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border-radius: 8px;
  margin: 26px 0 40px;

  .tags {
    width: 50%;
    height: 80px;
    padding: 16px;
    border-radius: 8px;
    display: flex;
    gap: 40px;
  }
`
