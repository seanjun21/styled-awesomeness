import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: pink;
`;

const Card = styled.div`
  background-color: red;
`;

const Button = styled.button`
  border-radius: 30px;
  padding: 25px 15px;
  background-color: ${props => props.theme.successColor};
`;

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Container>
          <Form />
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}

const Form = () => (
  <Card>
    <Button>Hello</Button>
  </Card>
);

export default App;
