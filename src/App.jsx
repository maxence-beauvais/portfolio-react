import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Parcours from './components/Parcours'
import './style.css'
import Competences from './components/Competences';
import Projets from './components/Projets'

function App() {
  return (
    <div className="wrap">
      <Header />
      <main>
        <div className="text-center">
          <h1>Maxence Beauvais</h1>
          <p>
            Étudiant en BUT Informatique à l'IUT de Lens.<br />
            Je cherche un stage en développement back-end à partir du 12 avril 2027.
          </p>
        </div>

        <About />
        <Parcours />
        <Competences />
        <Projets />
      </main>
    </div>
  )
}

export default App
