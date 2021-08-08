import styled, { createGlobalStyle } from 'styled-components';
import BGImage from './assets/background.jpg';

export const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
}

html{
  height: 100%;
}

body {
  background: linear-gradient(rgba(0, 0, 0, .5),rgba(0, 0, 0, 0.2)),url(${BGImage});
  background-size: cover;
  margin: 0;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Catamaran', sans-serif;
}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    font-family: 'Fascinate Inline', sans-serif;
    background-image: linear-gradient(180deg, #fff, #777);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-backgroundd-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #888);
    font-size: 4rem;
    text-align: center;
    margin: 1rem;
`;
