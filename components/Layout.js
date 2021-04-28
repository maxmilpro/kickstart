import React from 'react';
import { Container } from 'semantic-ui-react';
import Header from './Header.js';

export default ({ children }) => {
  return (
    <Container>
      <Header/>
      {children}
    </Container>
  );
};
