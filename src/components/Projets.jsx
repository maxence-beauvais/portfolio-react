function Projets() {
    const projetsData = [
    {
        titre: "Application de cabinet médical",
        type: "Projet universitaire, en équipe · Java",
        description: "Conception et développement d'une application Java pour la gestion administrative et médicale d'un cabinet.",
        lienGitHub: false,
        lien: ""
    },
    {
        titre: "Agence événementielle",
        type: "Projet universitaire · HTML, CSS",
        description: "Business plan complet d'une agence événementielle et développement de son site web.",
        lienGitHub: false,
        lien: ""
    },
    {
        titre: "Plateforme de chat (en cours)",
        type: "Projet personnel · HTML, JavaScript",
        description: "Messagerie en ligne avec échanges en temps réel entre utilisateurs connectés.",
        lienGitHub: true,
        lien: "https://github.com/maxence-beauvais/plateforme-chat"
    },
    {
        titre: "Suivi de finances",
        type: "Projet personnel · HTML, JavaScript, SQL",
        description: "Suivi des dépenses, des revenus et de l'épargne avec tableaux de bord et graphiques. Les données sont stockées en SQL.",
        lienGitHub: false,
        lien: ""
    },
    {
        titre: "Blackjack en ligne",
        type: "Projet personnel · HTML, JavaScript, SQL",
        description: "Jeu de blackjack dans le navigateur : comptes joueurs, paris et logique de jeu complète.",
        lienGitHub: false,
        lien: ""
    },
    {
        titre: "Todo-List web",
        type: "Projet personnel · HTML, JavaScript",
        description: "Application pour créer, valider et ranger ses tâches par catégories.",
        lienGitHub: true,
        lien: "https://github.com/maxence-beauvais/todo-list"
    },
    {
        titre: "Launcher CS2",
        type: "Projet personnel · Python, CustomTkinter",
        description: "Lanceur de bureau pour Counter-Strike 2 avec un Rich Presence Discord personnalisé.",
        lienGitHub: false,
        lien: ""
    },
    {
        titre: "Jeux en JavaFX",
        type: "Projet universitaire · Java, JavaFX",
        description: "Pac-Man, Taquin et Puissance 4 avec interface graphique.",
        lienGitHub: false,
        lien: ""
    }
    ];
    
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