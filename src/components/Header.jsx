import { useContext } from "react";
import { LangContext } from "../context/LangContext";

function Header ( { theme, setTheme }) {
    const { lang, setLang } = useContext(LangContext);
    return (
        <>
        <header id="accueil">
            <nav aria-label="Navigation">
                <a href="#apropos">{lang === 'fr' ? 'À propos' : 'About'}</a>
                <a href="#parcours">{lang === 'fr' ? 'Parcours' : 'Experience'}</a>
                <a href="#competences">{lang === 'fr' ? 'Compétences' : 'Skills'}</a>
                <a href="#projets">{lang === 'fr' ? 'Projets' : 'Projects'}</a>
                <a href="#contact">{lang === 'fr' ? 'Contact' : 'Contact'}</a>
                <a href="https://github.com/maxence-beauvais" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i>GitHub</a>
                <a href="https://www.linkedin.com/in/maxence-beauvais/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i>LinkedIn</a>
                <a href="pdf/cv.pdf" target="_blank" rel="noopener noreferrer"><i className="fa fa-address-card"></i>CV (PDF)</a>
            </nav>
            <nav>
                <select className='center-select' name="themes" id="themes-select" value={theme} onChange={(e) => setTheme(e.target.value)}>
                    <option value="light">☀️</option>
                    <option value="dark">🌙</option>
                </select>
                <select className='center-select' name="langues" id="langues-select" value={lang} onChange={(e) => setLang(e.target.value)}>
                    <option value="fr">FR</option>
                    <option value="en">EN</option>
                </select>
            </nav>
        </header>
        </>
    )
}

export default Header;