function Projets() {
    const projetsData = [
    {titre: "Application de cabinet médical", type: "Projet universitaire, en équipe · Java", description: "Conception et développement d'une application Java pour la gestion administrative et médicale d'un cabinet.", lienGitHub: true, lien: "https://maxence-beauvais-portfolio.netlify.app/"},
    {titre: "Application de cabinet médical 2", type: "Projet universitaire, en équipe · Java", description: "Conception et développement d'une application Java pour la gestion administrative et médicale d'un cabinet.", lienGitHub: false, lien: ""}
    ]
    
    return (
        <section id="projets">
        <h2>Projets</h2>
        {projetsData.map((projet) => (
            <article key={projet.titre}>
            <h3>{projet.titre}</h3>
            <p className="small">
                {projet.type}
                {projet.lienGitHub && (
                <> · <a href={projet.lien} target="_blank" rel="noopener noreferrer">Code sur GitHub</a></>
                )}
            </p>
            <p>{projet.description}</p>
            </article>
        ))}
        </section>
    );
}

export default Projets