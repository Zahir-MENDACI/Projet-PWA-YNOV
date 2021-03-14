import React from 'react';
import './App.css';
import Routes from './config/router'
import styled from 'styled-components'

function App() {
  return (
    <StyledBody>
      <Routes>

      </Routes>
    </StyledBody>
  );
}

const StyledBody = styled.body`
    background-color: #0E0E10;
    min-height: 100vh;
    width: 100vw;
    display: flex;
    /* flex-direction: column; */
    align-content: center;
    justify-content: center;
`

export default App;
