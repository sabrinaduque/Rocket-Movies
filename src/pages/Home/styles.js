import styled from 'styled-components'


export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  grid-template-rows: 105px auto ;
  grid-template-areas:
  "header"
  "content";
`

export const Content = styled.div`
  margin: 50px 123px;

  > main {
    grid-area: content;
    overflow-y: auto;
    

    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 40px;
    }
  }
`

export const NewNote = styled.button`
  height: 40px;
  width: 207px;
  font-size: 16px;
  padding: 27px;

  border: none;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  
  svg {
    margin-right: 8px;
  }
`
