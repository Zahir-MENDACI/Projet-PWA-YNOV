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
    background-color: #FFF;
    min-height: 100vh;
    display: flex;
    align-content: center;
    justify-content: center;
`

export default App;
