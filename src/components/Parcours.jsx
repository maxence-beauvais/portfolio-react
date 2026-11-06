import { LangContext } from '../context/LangContext'; 
import { useContext } from 'react'

function Parcours() {

    const { lang }=  useContext(LangContext);

    return (
        <section id="parcours">
            <h2>{lang === 'fr' ? "Parcours" : "Educational background"}</h2>
            <article>
            <h3>{lang == 'fr' ? <>BUT Informatique, 2<sup>e</sup> année </>: <>Bachelor of Technology in CS, 2<sup>nd</sup> year</>}</h3>
            <p className="small">{lang === 'fr' ? "Depuis septembre 2025 ·" : "Since September 2025 ·"} <a href="https://www.iut-lens.univ-artois.fr" target="_blank" rel="noopener noreferrer">IUT de Lens</a></p>
            </article>
            <article>
            <h3>{lang === 'fr' ? "Baccalauréat technologique en informatique" : "High School Diploma in Computer Science"}</h3>
            <p className="small">{lang === 'fr' ? "Septembre 2022 à juillet 2025 ·" : "September 2022 to July 2025 ·"} {lang === 'fr' ? "Lycée" : "High schools"} Gambetta-Carnot, Arras</p>
            </article>
        </section>
    )
}

export default Parcours;