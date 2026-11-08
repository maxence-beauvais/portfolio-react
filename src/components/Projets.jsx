import { LangContext } from '../context/LangContext';
import { useContext, useState } from 'react';

function Projets() {

    const { lang } = useContext(LangContext);

    const dreamTeam = [
      {
        prenom: "Thomas",
        nom: "Barloy",
        photo: "",
        description: { fr: "Aucune description pour le moment", en: "No description for the moment" },
        github: "https://github.com/thomas-barloy",
        linkedin: "https://www.linkedin.com/in/thomas-barloy",
        portfolio: ""
      },
      {
        prenom: "Kevin",
        nom: "Dubreucq",
        photo: "",
        description: { fr: "Aucune description pour le moment", en: "No description for the moment" },
        github: "https://github.com/kevin-dubreucq",
        linkedin: "https://fr.linkedin.com/in/kevin-dubreucq-developpeur",
        portfolio: ""
      },
      {
        prenom: "Lucas",
        nom: "Vanstraceele",
        photo: "",
        description: { fr: "Aucune description pour le moment", en: "No description for the moment" },
        github: "",
        linkedin: "https://www.linkedin.com/in/lucas-vanstraceele-661a43443/",
        portfolio: ""
      }
    ];

    const projetsData = [
      {
        titre: "FractaLens",
        type: "Projet universitaire, en équipe · Java",
        description: "Conception et développement d’une bibliothèque Java pour la génération d’images fractales en utilisant des patrons de conception.",
        lienGitHub: true,
        lien: "https://github.com/maxence-beauvais/fractalens",
        categories: "universitaire",
        membres: dreamTeam
      },
      {
        titre: "Application de cabinet médical",
        type: "Projet universitaire, en équipe · Java",
        description: "Conception et développement d'une application Java pour la gestion administrative et médicale d'un cabinet.",
        lienGitHub: true,
        lien: "https://github.com/maxence-beauvais/gestion-cabinet-medical",
        categories: "universitaire",
        membres: dreamTeam
      },
      {
        titre: "OtakuList (en cours)",
        type: "Projet universitaire, en équipe · PHP, Laravel",
        description: "Conception d'une application de gestion de mangas et animes avec système de notation, listes personnalisées et recommandations.",
        lienGitHub: false,
        lien: "",
        categories: "universitaire",
        membres: dreamTeam
      },
      {
        titre: "Suivi de finances",
        type: "Projet personnel · HTML, JavaScript, SQL",
        description: "Suivi des dépenses, des revenus et de l'épargne avec tableaux de bord et graphiques. Les données sont stockées en SQL.",
        lienGitHub: false,
        lien: "",
        categories: "personnel"
      },
      {
        titre: "Blackjack en ligne",
        type: "Projet personnel · HTML, JavaScript, SQL",
        description: "Jeu de blackjack dans le navigateur : comptes joueurs, paris et logique de jeu complète.",
        lienGitHub: false,
        lien: "",
        categories: "personnel"
      },
      {
        titre: "Todo-List web",
        type: "Projet personnel · HTML, JavaScript",
        description: "Application pour créer, valider et ranger ses tâches par catégories.",
        lienGitHub: true,
        lien: "https://github.com/maxence-beauvais/todo-list",
        categories: "personnel"
      },
      {
        titre: "Launcher CS2",
        type: "Projet personnel · Python, CustomTkinter",
        description: "Lanceur de bureau pour Counter-Strike 2 avec un Rich Presence Discord personnalisé.",
        lienGitHub: false,
        lien: "",
        categories: "personnel"
      },
      {
        titre: "Jeux en JavaFX",
        type: "Projet universitaire · Java, JavaFX",
        description: "Pac-Man, Taquin et Puissance 4 avec interface graphique.",
        lienGitHub: false,
        lien: "",
        categories: "universitaire",
        membres: dreamTeam
      }
    ];

    const projetsDataEN = [
      {
        titre: "Medical Clinic Application",
        type: "Academic team project · Java",
        description: "Design and development of a Java application for administrative and medical management of a clinic.",
        lienGitHub: false,
        lien: "",
        categories: "universitaire",
        membres: dreamTeam
      },
      {
        titre: "Event Planning Agency",
        type: "Academic project · HTML, CSS",
        description: "Complete business plan for an event planning agency and development of its website.",
        lienGitHub: false,
        lien: "",
        categories: "universitaire",
        membres: dreamTeam
      },
      {
        titre: "Chat Platform (In progress)",
        type: "Personal project · HTML, JavaScript",
        description: "Online messaging system featuring real-time communication between connected users.",
        lienGitHub: true,
        lien: "https://github.com/maxence-beauvais/plateforme-chat",
        categories: "personnel"
      },
      {
        titre: "Personal Finance Tracker",
        type: "Personal project · HTML, JavaScript, SQL",
        description: "Expense, income, and savings tracker with dashboards and charts. Data is stored in SQL.",
        lienGitHub: false,
        lien: "",
        categories: "personnel"
      },
      {
        titre: "Online Blackjack",
        type: "Personal project · HTML, JavaScript, SQL",
        description: "Browser-based blackjack game: player accounts, betting system, and full game logic.",
        lienGitHub: false,
        lien: "",
        categories: "personnel"
      },
      {
        titre: "Web Todo-List",
        type: "Personal project · HTML, JavaScript",
        description: "Task management web app to create, complete, and organize tasks by category.",
        lienGitHub: true,
        lien: "https://github.com/maxence-beauvais/todo-list",
        categories: "personnel"
      },
      {
        titre: "CS2 Desktop Launcher",
        type: "Personal project · Python, CustomTkinter",
        description: "Desktop launcher for Counter-Strike 2 featuring custom Discord Rich Presence integration.",
        lienGitHub: false,
        lien: "",
        categories: "personnel"
      },
      {
        titre: "JavaFX Games",
        type: "Academic project · Java, JavaFX",
        description: "Pac-Man, Sliding Puzzle (Taquin), and Connect Four with graphical user interface.",
        lienGitHub: false,
        lien: "",
        categories: "universitaire",
        membres: dreamTeam
      }
    ];

    const projets = lang === 'fr' ? projetsData : projetsDataEN;

    const filtres = [
      { valeur: "tous", fr: "Tous", en: "All" },
      { valeur: "universitaire", fr: "Universitaire", en: "Academic" },
      { valeur: "personnel", fr: "Personnel", en: "Personal" }
    ];

    const [filtreActif, setFiltreActif] = useState("tous");
    const [projetOuvert, setProjetOuvert] = useState(null);
    const [membreActif, setMembreActif] = useState(0);

    const projetsFiltres = filtreActif === "tous"
      ? projets
      : projets.filter((projet) => projet.categories === filtreActif);

    const basculerGroupe = (titre) => {
      if (projetOuvert === titre) {
        setProjetOuvert(null);
      } else {
        setProjetOuvert(titre);
        setMembreActif(0);
      }
    };

    return (
      <section id="projets" className="glass-section">
        <h2>{lang === 'fr' ? "Projets" : "Projects"}</h2>

        <div className="filtres">
          {filtres.map((filtre) => (
            <button
              key={filtre.valeur}
              className={`filtre-btn ${filtreActif === filtre.valeur ? 'actif' : ''}`}
              onClick={() => setFiltreActif(filtre.valeur)}
            >
              {lang === 'fr' ? filtre.fr : filtre.en}
            </button>
          ))}
        </div>

        {projetsFiltres.map((projet) => {
          const ouvert = projetOuvert === projet.titre;
          const membre = projet.membres
            ? (projet.membres[membreActif] ?? projet.membres[0])
            : null;

          return (
            <article key={projet.titre}>
              <h3>{projet.titre}</h3>

              <p className="small">
                {projet.type}
                {projet.lienGitHub && (
                  <> · <a href={projet.lien} target="_blank" rel="noopener noreferrer">
                    {lang === 'fr' ? "Code sur GitHub" : "Code on GitHub"}
                  </a></>
                )}
                {projet.membres && (
                  <button
                    className="filtre-btn"
                    onClick={() => basculerGroupe(projet.titre)}
                  >
                    {ouvert
                      ? (lang === 'fr' ? "Masquer le groupe" : "Hide team")
                      : (lang === 'fr' ? "Voir le groupe" : "View team")}
                  </button>
                )}
              </p>

              <p>{projet.description}</p>

              {ouvert && membre && (
                <div className="equipe">
                  <p><strong>{lang === 'fr' ? "Membres :" : "Members:"}</strong></p>

                  <div className="filtres">
                    {projet.membres.map((m, index) => (
                      <button
                        key={index}
                        className={`filtre-btn ${index === membreActif ? 'actif' : ''}`}
                        onClick={() => setMembreActif(index)}
                      >
                        {m.prenom} {m.nom}
                      </button>
                    ))}
                  </div>

                  <div className="membre-fiche">
                    {membre.photo && (
                      <img
                        className="membre-photo"
                        src={membre.photo}
                        alt={`${membre.prenom} ${membre.nom}`}
                        width="130"
                        height="130"
                      />
                    )}
                    <h4>{membre.prenom} {membre.nom}</h4>
                    <p>{membre.description[lang]}</p>

                    <div className="liens-membre">
                      {membre.github && (
                        <a href={membre.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                      )}
                      {membre.linkedin && (
                        <a href={membre.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                      )}
                      {membre.portfolio && (
                        <a href={membre.portfolio} target="_blank" rel="noopener noreferrer">Portfolio</a>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </article>
          );
        })}

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

export default Projets;