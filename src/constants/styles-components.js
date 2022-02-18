import styled, { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  body {
    background-color: ${(props) => props.theme.body}
  }
}`;

export const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const StyleApp = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const primaryTheme = {
  body: '#fff',
};

export const darkTheme = {
  body: 'gray',
};

export const colorTheme = {
  body: '#f4ed94'
};