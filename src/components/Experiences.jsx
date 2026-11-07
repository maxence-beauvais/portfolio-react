import { LangContext } from '../context/LangContext'; 
import { useContext } from 'react'

function Experiences() {
    const { lang } = useContext(LangContext);

    const exp = [
    {
        titre: "Tuteur en Informatique et Mathématiques",
        date: "Septembre 2026 - Aujourd'hui",
        description: "Accompagnement pédagogique des étudiants de première année en Informatique et Mathématiques, avec pour objectif de renforcer leur compréhension des notions fondamentales, de les aider dans la résolution d'exercices et de favoriser leur réussite académique."
        
    }
    ];

    const expEN = [
    {
        titre: "Computer Science and Mathematics Tutor",
        date: "September 2026 - Present",
        description: "Providing academic support to first-year Computer Science and Mathematics students, helping them strengthen their understanding of fundamental concepts, solve exercises, and improve their academic performance."        
    }
    ];

    const experience = lang === 'fr' ? exp : expEN

    return (
        <section id="experiences">
            <h2>{lang === 'fr' ? "Expériences professionnelles" : "Professional Experience"}</h2>
            {experience.map((expe) => (
                <>
                <article key={expe.titre}>
                    <h3>{expe.titre}</h3>
                    <p className='small'>{expe.date}</p>
                </article>
                <p>{expe.description}</p>
                </>
            ))}
        </section>
    )
}

export default Experiences

