import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

const StyledHeader = styled.header`
  display: grid;
  grid-template-rows: repeat(2, auto);
  h1 {
    margin: 0;
    padding: 0;
    font-size: 2rem;
  }
`

const Nav = styled.nav`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>WebRTC with React Demo</h1>
      <Nav>
        <Link to="/">Example</Link>
        <Link to="/code">Code</Link>
        <a href="https://github.com/matt-riley">Github</a>
      </Nav>
    </StyledHeader>
  )
}

export default Header;
