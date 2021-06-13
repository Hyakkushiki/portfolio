import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'CZ',
  lang: 'en',
  description: 'ようこそ！',
};

// HERO DATA
export const heroData = {
  img: 'tokyo_skyline.jpg',
  title: "Hi, i'm",
  name: 'Corwin',
  subtitle: 'I like creating',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'gundam_head.png',
  paragraphOne: "Hello, I'm a mechanical engineer currently located in Japan and I love creating things. I'm an Alumnus of The Georgia Institute of Technology. My degree and working experience has given me a strong background in analysis and design. I love facing challenging problems and being able to design solutions. My hope is that my programming projects can apply my engineering knowledge to real problems.",
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // 'https://www.resumemaker.online/es.php' ADD MY RESUME LATER
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'tic_tac_toe.PNG',
    title: 'tic-tac-toe game',
    info: 'I created this game in Vue.js. I wanted to try making a simple "AI" for a game.',
    info2: 'Vue.js',
    url: 'https://hyakkushiki.github.io/tic-tac-toe/',
    repo: 'https://github.com/Hyakkushiki/tic-tac-toe',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'codesandbox',
      url: 'https://codesandbox.io/u/Hyakkushiki',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/Hyakkushiki',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/corwz/',
    },
//     {
//       id: nanoid(),
//       name: 'github',
//       url: 'https://github.com/Hyakkushiki',
//     },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false,
};
