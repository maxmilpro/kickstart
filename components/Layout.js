import React from 'react';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';
import Header from './Header.js';

const Layout = ({ children }) => {
  return (
    <Container>
      <Head>
        <link
          async
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
        />
      </Head>

      <Header/>
      {children}
    </Container>
  );
};

export default Layout;
