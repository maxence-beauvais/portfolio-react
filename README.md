# Portfolio React — Maxence Beauvais

Portfolio personnel de **Maxence Beauvais**, étudiant en BUT Informatique à l'IUT de Lens.

Ce projet est la migration du portfolio initialement conçu en HTML/CSS/JS natif vers une application React propulsée par Vite.

## Technologies

| Domaine | Choix |
| --- | --- |
| Framework | React 18 |
| Bundler | Vite |
| Styles | CSS3 personnalisé (mode sombre / clair) |
| Icônes | FontAwesome 6 |
| State & contexte | React Hooks (`useState`, `useEffect`, `useContext`) |

## Fonctionnalités

- **Thème dynamique (sombre / clair)** : l'état du thème est conservé dans le `localStorage`.
- **Bilingue FR / EN** : la langue est gérée globalement via un `LangContext` (`createContext` + `useContext`).
- **Composants modulaires** : une section = un composant (`Header`, `About`, `Parcours`, `Competences`, `Projets`, `Atouts`, `Contact`).
- **Rendu dynamique** : les barres de compétences et les cartes de projets sont générées à partir d'objets JavaScript.

## Installation et lancement

### Prérequis

- [Node.js](https://nodejs.org/) v20.12.0 ou plus récent
- npm

### Étapes

1. Cloner le dépôt :

   ```bash
   git clone https://github.com/maxence-beauvais/portfolio-react.git
   cd portfolio-react
   ```

2. Installer les dépendances :

   ```bash
   npm install
   ```

3. Lancer le serveur de développement (accessible sur <http://localhost:5173/>) :

   ```bash
   npm run dev
   ```

4. Générer le build de production :

   ```bash
   npm run build
   ```

## Structure du projet

```text
portfolio-react/
├── public/
│   └── images/            # Assets statiques (photo de profil, etc.)
├── src/
│   ├── components/        # Un composant par section
│   │   ├── About.jsx
│   │   ├── Atouts.jsx
│   │   ├── Competences.jsx
│   │   ├── Contact.jsx
│   │   ├── Header.jsx
│   │   ├── Parcours.jsx
│   │   └── Projets.jsx
│   ├── context/
│   │   └── LangContext.jsx  # Gestion globale de la langue
│   ├── App.jsx            # Composant racine
│   ├── main.jsx           # Point d'entrée React & Provider
│   └── style.css          # Styles globaux
├── index.html
├── package.json
└── README.md
```

## Auteur

**Maxence Beauvais** — [GitHub](https://github.com/maxence-beauvais)