import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Parcours from './components/Parcours'
import './style.css'
import Competences from './components/Competences';
import Projets from './components/Projets'
import Atouts from './components/Atouts'
import Contact from './components/Contact'
import Experiences from './components/Experiences'
import { LangContext } from './context/LangContext'
import { useContext } from 'react'

function App() {

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light'
  })
  
  useEffect (() => {
    if (theme === 'dark') {
      document.body.classList.add('dark-theme') 
    } else {
      document.body.classList.remove('dark-theme')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const { lang }=  useContext(LangContext);

  return (
    <div className="wrap">
      <Header theme={theme} setTheme={setTheme} />
      <main>
        <div className="text-center">
          <h1>Maxence Beauvais</h1>
          <p>
            {lang === 'fr' ? "Étudiant en BUT Informatique à l'IUT de Lens." : "Computer Science student at IUT de Lens."}<br />
            { lang === 'fr' ? "Je cherche un stage en développement à partir du 12 avril 2027." : "I am looking for an internship in development, starting on April 12, 2027."}
          </p>
        </div>

        <About />
        <Parcours />
        <Competences />
        <Experiences />
        <Projets />
        <Atouts />
        <Contact />
        <br/>
        <p>{lang === 'fr' ? <>Ce portfolio a été entièrement migré de HTML/CSS/JS natif vers React. <a href="https://github.com/maxence-beauvais/portfolio-legacy" target="_blank" rel="noopener noreferrer">Code sur GitHub</a></> : <>This portfolio has been entirely migrated from native HTML/CSS/JS to React. <a href="https://github.com/maxence-beauvais/portfolio-legacy" target="_blank" rel="noopener noreferrer">Code on GitHub</a></>}</p>
      </main>
    </div>
  )
}

export default App
