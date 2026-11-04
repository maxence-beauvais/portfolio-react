function About() {
    return (
        <section id="apropos" className="clearfix">
            <h2>À propos</h2>
            <img src="/images/IMG_2894.jpg" alt="Petite photo de moi" width="130" height="130" className="profil-pic"/>
            <p>Je suis en deuxième année de BUT Informatique à l'IUT de Lens, après un bac technologique en informatique à Arras. Je travaille en Java, SQL, PHP et Python.</p>
            <p>Je sais travailler seul comme en équipe. Je suis organisé et je vais au bout de ce que je commence.</p>
            <p>J'adore apprendre de nouvelles choses comme de nouveaux langages que j'apprends tout seul comme le JavaScript mais je suis toujours curieux d'obtenir de nouvelles compétences.</p>
            <ul className="plain">
                <li><i className="fa-solid fa-house" style={{color: 'rgb(0, 0, 0)'}}></i>Lieu : Arras (62)</li>
                <li><i className="fa-solid fa-car" style={{color: 'rgb(0, 0, 0)'}}></i>Mobilité : Lens, Lille, Arras (permis B, véhicule personnel)</li>
                <li><i className="fa-solid fa-language" style={{color: 'rgb(0, 0, 0)'}}></i>Langues :
                    <ul>
                        <li> anglais (B1)</li>
                        <li>espagnol (bases)</li>
                    </ul>
                </li>
            </ul>
        </section>
    )
}

export default About;