import { LangContext } from '../context/LangContext'; 
import { useContext } from 'react'

function Atouts() {

    const { lang } = useContext(LangContext);

    return (
        <section id="atouts">
            <h2>{lang === 'fr' ? "Atouts et centres d'intérêt" : "Strengths & Interests"}</h2>
            <p><strong>{lang === 'fr' ? "Atouts :" : "Strengths :"}</strong> {lang === 'fr' ? "détermination, autonomie, esprit d'équipe, sens de l'organisation." : "determination, autonomy, teamwork, organizational skills."}</p>
            <p><strong>{lang === 'fr' ? "Centres d'intérêt :" : "Interests :"}</strong> {lang === 'fr' ? "e-sport, musique, jeux vidéo, voyage." : "e-sports, music, video games, travel."}</p>
        </section>
    )
}

export default Atouts