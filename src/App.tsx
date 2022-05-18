import { useState } from 'react'
import { Peças } from './components/Peças'
import { Contato } from './components/Contato'
import { Duvidas } from './components/Duvidas'
import { Sobre } from './components/Sobre'
import Nav from './components/navigation'

import './App.css'

function App() {
  return (
    <>
      <Nav />
      <Sobre />
      <Peças />
      <Duvidas />
      <Contato />
    </>
  )
}

export default App
