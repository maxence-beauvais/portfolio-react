function Header () {
    return (
        <>
        <header id="accueil">
            <nav aria-label="Navigation">
                <a href="#apropos">À propos</a>
                <a href="#parcours">Parcours</a>
                <a href="#competences">Compétences</a>
                <a href="#projets">Projets</a>
                <a href="#contact">Contact</a>
                <a href="https://github.com/maxence-beauvais" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i>GitHub</a>
                <a href="https://www.linkedin.com/in/maxence-beauvais/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i>LinkedIn</a>
                <a href="pdf/cv.pdf" target="_blank" rel="noopener noreferrer"><i className="fa fa-address-card"></i>CV (PDF)</a>
            </nav>
            <nav>
                <select className='center-select' name="themes" id="themes-select">
                    <option value="light">☀️</option>
                    <option value="dark">🌙</option>
                </select>
                <select className='center-select' name="langues" id="langues-select">
                    <option value="fr">FR</option>
                    <option value="en">EN</option>
                </select>
            </nav>
        </header>
        </>
    )
}

export default Header;