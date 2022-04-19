import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Opener from './components/Opener'
import Door from './components/Door'

function App() {
  return (
    <>
      <div id="turn">
        <div className="rotate-container">Please rotate your device</div>
      </div>
      <div id="container">
        <Route exact path="/" component={Opener} />
        <Route path="/escape" component={Door} />
      </div>
    </>
  )
}

export default App
