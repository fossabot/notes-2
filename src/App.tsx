import React, { Suspense } from 'react';
import styled from 'styled-components';
import { Router } from '@reach/router'

import Header from './components/Header';
import Loading from './components/Loading';
const Footer = React.lazy(() => import('./components/Footer'));
const Index = React.lazy(() => import('./containers/Index'));
const Code = React.lazy(() => import('./containers/Code'));


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
      <Suspense fallback={<Loading />}>
        <Router>
          <Index path="/" />
          <Code path="/code" />
        </Router>
        <Footer />
      </Suspense>
    </Wrapper>
  );
}

export default App;
