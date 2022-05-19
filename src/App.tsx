import { useState } from 'react'
import { Peças } from './components/Peças'
import { Contato } from './components/Contato'
import { Duvidas } from './components/Duvidas'
import { Sobre } from './components/Sobre'
import { Inicio } from './components/Inicio'
import Nav from './components/navigation'

import './App.css'

const App = () => {
  return (
    <>
      <Nav />
      <Inicio />
      <Sobre />
      <Peças />
      <Duvidas />
      <Contato />
    </>
  )
}

export default App
