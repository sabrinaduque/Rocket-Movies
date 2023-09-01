import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: #282124;

  border: none;
  border-radius: 10px;
  padding: 15px 32px;
  margin-bottom: 24px;

  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-bottom: 8px;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 16px;
    display: flex;
    text-align: justify;
    margin: 15px 0;
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 24px;
  }
`
