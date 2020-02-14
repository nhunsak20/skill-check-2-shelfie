import React from 'react'
import { HashRouter as Router } from 'react-router-dom'

import Header from './Components/Header/Header'

import routes from './routes'

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {routes}
      </div>  
    </Router>
  )
}

export default App;
