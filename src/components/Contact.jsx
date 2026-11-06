import { LangContext } from '../context/LangContext';
import { useContext } from 'react';

function Contact() {

    const { lang } = useContext(LangContext);   
    
    return (
        <section id="contact">
            <h2>Contact</h2>
            <ul className="plain">
                <li><i className="fa-solid fa-envelope"></i> E-mail : <a href="mailto:maxence.beauvais.info@gmail.com">maxence.beauvais.info@gmail.com</a></li>
                <li><i className="fa-brands fa-github"></i> GitHub : <a href="https://github.com/maxence-beauvais" target="_blank" rel="noopener noreferrer">github.com/maxence-beauvais</a></li>
                <li><i className="fa-brands fa-linkedin"></i> LinkedIn : <a href="https://www.linkedin.com/in/maxence-beauvais/" target="_blank" rel="noopener noreferrer">linkedin.com/in/maxence-beauvais</a></li>
                <li><i className="fa-solid fa-file-pdf"></i> CV : <a href="pdf/cv.pdf" target="_blank" rel="noopener noreferrer">{lang === 'fr' ? "télécharger (PDF)" : "download (PDF)"}</a></li>
            </ul>
        </section>
    )
}

export default Contact;