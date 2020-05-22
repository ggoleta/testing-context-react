import React from 'react';
import GithubState from './context/github/GithubState'
import Title from './components/Title'
import { BrowserRouter } from 'react-router-dom'

import GlobalStyle from './styles/global';
import Routes from './routes'

const App = () => {
  
  return (
    <GithubState>
        <BrowserRouter>
        <Title title="Testing Context" />
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </GithubState>
  )
}

export default App;
