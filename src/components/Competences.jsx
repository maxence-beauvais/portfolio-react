import { LangContext } from '../context/LangContext'; 
import { useContext } from 'react'

function Competences() {

    const { lang }=  useContext(LangContext);

    const competencesData = [
    { nom: "HTML/CSS", icon: "fa-brands fa-html5", niveau: 75 },
    { nom: "Python", icon: "fa-brands fa-python", niveau: 40 },
    { nom: "Java", icon: "fa-brands fa-java", niveau: 85 },
    { nom: "PHP", icon: "fa-brands fa-php", niveau: 60 },
    { nom: "SQL", icon: "fa-solid fa-database", niveau: 70 },
    { nom: "PostgreSQL", icon: "fa-solid fa-server", niveau: 50 },
    { nom: "JavaScript", icon: "fa-brands fa-js", niveau: 20 },
    { nom: "React", icon: "fa-brands fa-react", niveau: 10}
    ];

    const outilsData = [
    { nom: "Git", icon: "fa-brands fa-git-alt" },
    { nom: "VS Code", icon: "fa-solid fa-code" },
    { nom: "IntelliJ", icon: "fa-solid fa-code" },
    { nom: "Canva", icon: "fa-solid fa-palette" }
    ];

    return (
        <section id="competences">
            <h2>{lang === 'fr' ? "Compétences" : "Skills"}</h2>
            {competencesData.map((competence) => (
                <div className="skill" key={competence.nom}><span><i className={competence.icon}></i>{competence.nom}</span><div className="bar"><span style={{width:`${competence.niveau}%`}}></span></div><b>{competence.niveau}%</b></div>
            ))}
            <div style={{ marginTop:`1rem`}}>
                <strong>{lang === 'fr' ? "Outils :" : "Tools :"}</strong> 
                <ul className="tools-list">
                    {outilsData.map((outil) => (
                        <li key={outil.nom}><i className={outil.icon} style={{color: 'rgb(0, 0, 0)'}}></i>{outil.nom}</li>
                    ))}     
                </ul>
            </div>
        </section>
    )
}

export default Competences