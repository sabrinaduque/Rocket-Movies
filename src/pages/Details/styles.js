import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    grid-area: content;
    overflow-y: auto;
  }
  
  .title {
    display: flex;
    align-items: center;
    gap: 17px;
    margin: 24px 0;
  }

  .tags {
    display: flex;
    align-items: center;
    gap: 17px;
    margin: 40px 0;
  }
`
export const Content = styled.div`
  margin: 40px 123px;
  display: flex;
  flex-direction: column;
  a {
      display: flex;
      font-size: 20px;
      color: ${({ theme }) => theme.COLORS.PINK};
      align-items: center;
      gap: 8px;

      svg {
      color: ${({ theme }) => theme.COLORS.PINK};
      font-size: 16px;
      }
    } 

  > h1 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 36px;
    font-weight: 500;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 16px;
    font-weight: 400;
    text-align: justify;
    margin-bottom: 25px
  }
`
export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  > img {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 8px;

    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`
