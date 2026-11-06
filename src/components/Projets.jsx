import { LangContext } from '../context/LangContext'; 
import { useContext } from 'react'

function Projets() {

    const { lang } = useContext(LangContext);

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

    const projetsDataEN = [
    {
      titre: "Medical Clinic Application",
      type: "Academic team project · Java",
      description: "Design and development of a Java application for administrative and medical management of a clinic.",
      lienGitHub: false,
      lien: ""
    },
    {
      titre: "Event Planning Agency",
      type: "Academic project · HTML, CSS",
      description: "Complete business plan for an event planning agency and development of its website.",
      lienGitHub: false,
      lien: ""
    },
    {
      titre: "Chat Platform (In progress)",
      type: "Personal project · HTML, JavaScript",
      description: "Online messaging system featuring real-time communication between connected users.",
      lienGitHub: true,
      lien: "https://github.com/maxence-beauvais/plateforme-chat"
    },
    {
      titre: "Personal Finance Tracker",
      type: "Personal project · HTML, JavaScript, SQL",
      description: "Expense, income, and savings tracker with dashboards and charts. Data is stored in SQL.",
      lienGitHub: false,
      lien: ""
    },
    {
      titre: "Online Blackjack",
      type: "Personal project · HTML, JavaScript, SQL",
      description: "Browser-based blackjack game: player accounts, betting system, and full game logic.",
      lienGitHub: false,
      lien: ""
    },
    {
      titre: "Web Todo-List",
      type: "Personal project · HTML, JavaScript",
      description: "Task management web app to create, complete, and organize tasks by category.",
      lienGitHub: true,
      lien: "https://github.com/maxence-beauvais/todo-list"
    },
    {
      titre: "CS2 Desktop Launcher",
      type: "Personal project · Python, CustomTkinter",
      description: "Desktop launcher for Counter-Strike 2 featuring custom Discord Rich Presence integration.",
      lienGitHub: false,
      lien: ""
    },
    {
      titre: "JavaFX Games",
      type: "Academic project · Java, JavaFX",
      description: "Pac-Man, Sliding Puzzle (Taquin), and Connect Four with graphical user interface.",
      lienGitHub: false,
      lien: ""
    }
  ];

  const projets = lang === 'fr' ? projetsData :projetsDataEN
    
    return (
        <section id="projets">
        <h2>{lang === 'fr' ? "Projets" : "Projects"}</h2>
            {projets.map((projet) => (
                <article key={projet.titre}>
                <h3>{projet.titre}</h3>
                <p className="small">
                    {projet.type}
                    {projet.lienGitHub && (
                <> · <a href={projet.lien} target="_blank" rel="noopener noreferrer">{lang === 'fr' ? "Code sur GitHub" : "Code on GitHub"}</a></>
                )}
            </p>
            <p>{projet.description}</p>
            </article>
         ))} 

        <p>
            {lang === 'fr' ? (
            <>Mes autres projets sont sur <a href="https://github.com/maxence-beauvais" target="_blank" rel="noopener noreferrer">mon GitHub</a>.</>
            ) : (
            <>My other projects are on <a href="https://github.com/maxence-beauvais" target="_blank" rel="noopener noreferrer">my GitHub</a>.</>
            )}
        </p>
            
        
        </section>
    );
}

export default Projets