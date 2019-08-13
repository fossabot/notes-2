import React, { useState } from 'react';
import styled from 'styled-components';
import { Router } from '@reach/router'

import Header from './components/Header';
import Footer from './components/Footer';
import Index from './containers/Index';
import Code from './containers/Code';


const Wrapper = styled.div`
  margin: 0 auto;
  width: 50%;
  display: grid;
  grid-template-rows: repeat(3, auto);
  align-items: center;
  justify-items: center;
  margin-top: 1rem;
  min-height: 100vh;
`;

const App: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <Router>
        <Index path="/" />
        <Code path="/code" />
      </Router>
      <Footer />
    </Wrapper>
  );
}

export default App;
