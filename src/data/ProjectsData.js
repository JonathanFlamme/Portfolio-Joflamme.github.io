import othello from '../assets/othello.jpg';
import flamscookbook from '../assets/yummycook.jpg';
import botDiscord from '../assets/botDiscord.jpg';
import foodFlex from '../assets/foodFlex.png';
import agsLogo from '../assets/ags_logo.jpg';
import editionLimitee from '../assets/editionlimitee.png';

const ProjetsData = [
  {
    id: 6,
    name: "Flam's Cookbook :",
    image: `${flamscookbook}`,
    description: [
      {
        description:
          'Plateforme de création et de partage de recettes de cuisines :',
      },
      {
        description: '- Affichage des recettes avec pagination et filtres.',
      },
      {
        description:
          '- Gestion des comptes utilisateurs et des recettes (CRUD) via une API REST.',
      },
      {
        description:
          '- Activation des comptes par token avec création de recettes limitée avant validation.',
      },
      {
        title: 'Techno : ( FullStack ) ',
        description:
          'Javascript ,TypeScript, Angular, NodeJs, NestJs, Docker, Nx Monorepo',
      },
    ],
    box_title: "Flam's Cookbook",
    box_description: [
      'Création et partage de recettes entre cuisiniers amateurs',
    ],
    link_box: 'https://github.com/JonathanFlamme/CookBook',
    button: true,
    button_title: 'Lien du site',
    button_link: 'https://flamscookbook.netlify.app',
    button_title2: 'Code source',
    button_link2: 'https://github.com/JonathanFlamme/CookBook',
  },
  {
    id: 5,
    name: 'Edition Limitée :',
    image: `${editionLimitee}`,
    description: [
      {
        description:
          "Développement d'un site web dédié à la gestion d'une guilde de jeu vidéo :",
      },
      {
        description:
          " - Conception de l'interface utilisateur pour présenter la guilde",
      },
      {
        description:
          " - Intégration de l'authentification OAuth et de l'API Battle.net pour sécuriser l'accès et structurer les données des joueurs dans une BDD personnalisée",
      },
      {
        description:
          ' - Suivi automatique des activités des joueurs en analysant les données récupérées',
      },
      {
        description: ' - Utilisation de Google Api',
      },
      {
        title: 'Techno :  ',
        description:
          'Javascript , React, NextJs, Tailwind, Prisma, PostgreSQL, Docker, OAuth, Google API, Battle.net API',
      },
    ],
    box_title: 'Edition Limitée',
    box_description: [
      "Développement d'un site web dédié à la gestion d'une guilde de jeu vidéo :",
    ],
    link_box: '',
    button: true,
    button_title: 'Lien du site',
    button_link: 'https://www.editionlimitee-elune.fr/',
    button_title2: 'Code source',
    button_link2: 'https://github.com/JonathanFlamme/edition-limitee',
  },
  {
    id: 4,
    name: 'Assistance à la gestion des secours :',
    image: `${agsLogo}`,
    description: [
      {
        description: 'Gestion du planning des RH,',
      },
      {
        description: 'Validation des compétences métier des RH par le manager,',
      },
      {
        description:
          'Création de vacations durant un événement par le manager,',
      },
      {
        description: 'Notification par mails/SMS,',
      },
      {
        description: 'Inscription des membres sur les vacations,',
      },
      {
        description: 'Suivi des inscriptions des membres,',
      },
      {
        title: 'Techno : ( FullStack ) ',
        description:
          'Javascript ,TypeScript, Angular, NodeJs, NestJs, Docker, Nx Monorepo',
      },
    ],
    box_title: 'Assistance à la gestion des secours',
    box_description: [
      'Validation des compétences métier des RH par le manager',
      'Gestion du planning du personnel de secours',
    ],
    link_box: '',
    button: false,
  },
  {
    id: 3,
    name: 'Othello :',
    image: `${othello}`,
    description: [
      {
        description: 'Développement du jeu de plateau Othello',
      },
      {
        title: 'Techno : ',
        description: 'Javascript Vanilla',
      },
    ],
    box_title: 'Othello : jeu de société',
    box_description: [
      'Différent mode',
      'Joueur contre joueur',
      'Joueur contre ordinateur',
      'Mode facile',
    ],
    link_box: 'https://github.com/JonathanFlamme/Joflamme-othello.github.io',
    button: true,
    button_title: 'Cliquer pour jouer',
    button_link: 'https://JonathanFlamme.github.io/Joflamme-othello.github.io/',
  },
  {
    id: 2,
    name: 'Bots Discord :',
    image: `${botDiscord}`,
    description: [
      {
        description: 'TypeScript',
      },
    ],
    box_title: 'Bots Discords',
    box_description: [],
    link_box: 'https://github.com/JonathanFlamme/Jobot_EditionLimit',
    button: false,
  },
  {
    id: 1,
    name: 'FoodFlex :',
    image: `${foodFlex}`,
    description: [
      {
        description:
          'Gestion de recettes de cuisine sur un planning à la semaine',
      },
      {
        title: 'Techno : ',
        description: 'TypeScript - React - Tailwind - Express - Sequelize',
      },
    ],
    box_title: 'Foodflex',
    box_description: [
      'Gestion de recettes de cuisine sur un planning à la semaine',
      'Gestion de recettes favories',
    ],
    link_box: 'https://github.com/JonathanFlamme/projet-foodflex-front',
    button: true,
    button_title: 'Lien du site',
    button_link: 'https://foodflex.me/',
  },
];

export default ProjetsData;
