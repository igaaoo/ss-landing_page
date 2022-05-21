import { useState } from 'react'

// Importação dos componentes react
import { Peças } from './components/Peças'
import { Contato } from './components/Contato'
import { Duvidas } from './components/Duvidas'
import { Sobre } from './components/Sobre'
import { Inicio } from './components/Inicio'
import { Footer } from './components/Footer'
import Nav from './components/navigation'

import './App.css'

const App = () => {
  return (
    <>
      {/* Componentes React */}
      <Nav />
      <Inicio />
      <Sobre />
      <Peças />
      <Duvidas />
      <Contato />
      <Footer />
    </>
  )
}

export default App
