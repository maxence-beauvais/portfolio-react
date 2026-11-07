import { LangContext } from '../context/LangContext'; 
import { useContext } from 'react'

function About() {

    const { lang }=  useContext(LangContext);
    
    return (
        <section id="apropos" className="clearfix">
            <h2>{lang === 'fr' ? "À propos" : "About me"}</h2>
            <img src="/images/IMG_2894.jpg" alt="Portrait de Maxence Beauvais" width="130" height="130" className="profil-pic"/>
            <p>{lang === 'fr' ? "Je suis en deuxième année de BUT Informatique à l'IUT de Lens, après un bac technologique en informatique à Arras. Je travaille en Java, SQL, PHP et Python." : "I am in my second year of a BUT (University Bachelor of Technology) program in Computer Science at the IUT of Lens, having previously completed a technological baccalaureate in computer science in Arras. I work with Java, SQL, PHP, and Python."}</p>
            <p>{lang === 'fr' ? "Je sais travailler seul comme en équipe. Je suis organisé et je vais au bout de ce que je commence." : "I am able to work both independently and as part of a team. I am organized and I see things through to completion."}</p>
            <p>{lang === 'fr' ? "J'adore apprendre de nouvelles choses comme de nouveaux langages que j'apprends tout seul comme le JavaScript mais je suis toujours curieux d'obtenir de nouvelles compétences." : "I love learning new things like new languages that I learn by myself like JavaScript but I’m always curious to get new skills."}</p>
            <ul className="plain">
                <li><i className="fa-solid fa-house" style={{color: 'rgb(0, 0, 0)'}}></i>{lang === 'fr' ? "Lieu" : "Location"} : Arras (62)</li>
                <li><i className="fa-solid fa-car" style={{color: 'rgb(0, 0, 0)'}}></i>{ lang === 'fr' ? "Mobilité : Lens, Lille, Arras (permis B, véhicule personnel)" : "Mobility: Lens, Lille, Arras (Category B driver's license, personal vehicle)" }</li>
                <li><i className="fa-solid fa-language" style={{color: 'rgb(0, 0, 0)'}}></i>{ lang === 'fr' ? "Langues :" : "Languages"}
                    <ul>
                        <li> {lang === 'fr' ? "anglais (B1)" : "english (B1)"}</li>
                        <li>{lang === 'fr' ? "espagnol (bases)" : "spanish (basics)"}</li>
                    </ul>
                </li>
            </ul>
        </section>
    )
}

export default About;