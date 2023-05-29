import {
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  threejs,
  eductaion,
  school,
  graduationHat,
  crown,
  space,
  sneakers,
  gpt,
  bookmark,
  intro,
  calculator,
  news,
  social,
  multi,
  shorten,
  portfolio,
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

export const completes = [
  {
    number: 20,
    text: 'projects',
    subText: 'completed',
  },
  {
    number: 1,
    text: 'year',
    subText: 'none-comercial exeriance',
  },
  {
    number: 2,
    text: 'clients',
    subText: 'number',
  },
  {
    number: 10,
    text: 'costumer',
    subText: 'rewview',
  },
]

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Developer',
    icon: backend,
  },
  {
    title: 'Content Creator',
    icon: creator,
  },
]

const techProgresses = [
  {
    name: 'HTML5',
    percent: 80,
  },
  {
    name: 'CSS3',
    percent: 68,
  },
  {
    name: 'JAVASCRIPT',
    percent: 70,
  },
  {
    name: 'REACT JS',
    percent: 65,
  },
  {
    name: 'TYPESCRIPT',
    percent: 30,
  },
  {
    name: 'TAILWIND',
    percent: 45,
  },
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
]

const experiences = [
  {
    title: 'IELTS teacher',
    company_name: 'The 16th school of Andijan, Uzbekistan',
    icon: school,
    iconBg: '#383E56',
    date: ' November 2019 - June 2021',
    points: [
      'Cultivated welcoming learning environments in both classroom and online context.',
      'Developed lectures and assignments centered on literary and writing fundamentals.',
      'Interpreted literature and essays in context with modern technology to promote critical thinking.',
      'Helped students to achieve their academic goals. ( IELTS and entering prestigious university of Uzbekistan).',
    ],
  },
  {
    title: 'Leader ( volunteer ) of National Library',
    company_name: 'National Library, Uzbekistan',
    icon: eductaion,
    iconBg: '#E6DEDD',
    date: 'July 2019 - August 2021',
    points: [
      'Leading speaking club.',
      'Attracting students ot learn English and Programming language.',
      'Working with library team.',
      'Organizing special events related to English.',
    ],
  },
  {
    title: 'ENGLISH TEACHER',
    company_name: 'The 22th school of Andijan, Uzbekistan',
    icon: graduationHat,
    iconBg: '#383E56',
    date: 'August 2021 - October 2021',
    points: [
      'Interpreted literature and essays in context with modern technology to promote critical thinking.',
      'Helped students to achieve their academic goals. ( IELTS and entering prestigious university of Uzbekistan).',
      "Working and boosting students' English knowledge and outlook.",
      'Organizing special events to attract students to English.',
    ],
  },
]

// const testimonials = [
//   {
//     testimonial:
//       'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
//     name: 'Sara Lee',
//     designation: 'CFO',
//     company: 'Acme Co',
//     image: 'https://randomuser.me/api/portraits/women/4.jpg',
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: 'Chris Brown',
//     designation: 'COO',
//     company: 'DEF Corp',
//     image: 'https://randomuser.me/api/portraits/men/5.jpg',
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: 'Lisa Wang',
//     designation: 'CTO',
//     company: '456 Enterprises',
//     image: 'https://randomuser.me/api/portraits/women/6.jpg',
//   },
// ]

const aboutMe = {
  softSkills: [
    { text: 'Communication', percent: '70%' },
    { text: 'Teamwork', percent: '75%' },
    { text: 'Problem-solving', percent: '60%' },
    { text: 'Leadership', percent: '70%' },
  ],

  language: [
    { text: 'English', percent: '65%' },
    { text: 'Russian', percent: '70%' },
    { text: 'Uzbek(native)', percent: '90%' },
    { text: 'Polish(A1)', percent: '30%' },
  ],
}

let projectId = 1

const projects = [
  {
    id: projectId++,
    name: 'Crown Clothing',
    description:
      'Fully functional e-commerce web app with carts, payments and supported by database. Google Authorization is also available.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'firebase',
        color: 'orange-text-gradient',
      },
      {
        name: 'redux',
        color: 'violet-text-gradient',
      },
      {
        name: 'react-router',
        color: 'green-text-gradient',
      },
    ],
    image: crown,
    url: 'https://whimsical-cendol-8c17e3.netlify.app',
    source_code_link: 'https://github.com/azick99/Clothing-shop',
  },
  {
    id: projectId++,
    name: 'Space Tourism',
    description:
      'Brief information of space tourism working with design and layouts, it can be used as entrance for space information.',
    tags: [
      {
        name: 'html5',
        color: 'orange-text-gradient',
      },
      {
        name: 'sass',
        color: 'pink-text-gradient',
      },
      {
        name: 'responsive',
        color: 'violet-text-gradient',
      },
      {
        name: 'javascript',
        color: 'yellow-text-gradient',
      },
    ],
    image: space,
    url: 'https://azick99.github.io/Space-Tourism',
    source_code_link: 'https://github.com/azick99/Space-Tourism',
  },
  {
    id: projectId++,
    name: ' My Portflio 2.0',
    description:
      'My first portfolio that I did, it is fully functional except forms well-designed and can switch dark, light mode. ',
    tags: [
      {
        name: 'sass',
        color: 'pink-text-gradient',
      },
      {
        name: 'responsive',
        color: 'violet-text-gradient',
      },
      {
        name: 'javascript',
        color: 'yellow-text-gradient',
      },
      {
        name: 'html5',
        color: 'orange-text-gradient',
      },
    ],
    image: portfolio,
    url: 'https://azick99.github.io/My-Portflio-2.0',
    source_code_link: 'https://github.com/azick99/My-Portflio-2.0',
  },
  {
    id: projectId++,
    name: 'Chat Gpt3',
    description:
      'Web app has no functionality only design and navigation, basic information about chat-gpt3.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'responsive',
        color: 'violet-text-gradient',
      },
      {
        name: 'sass',
        color: 'pink-text-gradient',
      },
    ],
    image: gpt,
    url: 'https://magnificent-cucurucho-c14116.netlify.app',
    source_code_link: 'https://github.com/azick99/gpt-azicom',
  },
  {
    id: projectId++,
    name: 'Bookmark Landing',
    description:
      'Web page without functionality, a good temple to play around and see.',
    tags: [
      {
        name: 'sass',
        color: 'pink-text-gradient',
      },
      {
        name: 'html5',
        color: 'blue-text-gradient',
      },
      {
        name: 'responsive',
        color: 'violet-text-gradient',
      },
    ],
    image: bookmark,
    url: 'https://glittering-kangaroo-f0347f.netlify.app/',
    source_code_link: 'https://github.com/azick99/Book-mark-landing',
  },
  {
    id: projectId++,
    name: 'Intro landing',
    description: 'Web page without functionality,with mobile navigation',
    tags: [
      {
        name: 'sass',
        color: 'pink-text-gradient',
      },
      {
        name: 'responsive',
        color: 'violet-text-gradient',
      },
      {
        name: 'html5',
        color: 'blue-text-gradient',
      },
      {
        name: 'javascript',
        color: 'orange-text-gradient',
      },
    ],
    image: intro,
    url: 'https://azick99.github.io/Intro-with-drop-navigation',
    source_code_link: 'https://github.com/azick99/Intro-with-drop-navigation',
  },
  {
    id: projectId++,
    name: 'Tip Calculator',
    description:
      'Small and handy tip calculator you can calculate percentage of tips and outputs easy and smoothly working.',
    tags: [
      {
        name: 'sass',
        color: 'pink-text-gradient',
      },
      {
        name: 'responsive',
        color: 'violet-text-gradient',
      },
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
    ],
    image: calculator,
    url: 'https://spectacular-fox-9912be.netlify.app/',
    source_code_link: 'https://github.com/azick99/tip-calculator',
  },
  {
    id: projectId++,
    name: 'News Homepage',
    description:
      'Web page has no big functionality mainly styled some additon for mobile. Designed by front-mentor.',
    tags: [
      {
        name: 'responsive',
        color: 'violet-text-gradient',
      },
      {
        name: 'sass',
        color: 'pink-text-gradient',
      },
      {
        name: 'bootstrap5',
        color: 'blue-text-gradient',
      },
      {
        name: 'html5',
        color: 'orange-text-gradient',
      },
    ],
    image: news,
    url: 'https://azick99.github.io/Home-page-news/',
    source_code_link: 'https://github.com/azick99/Home-page-news',
  },
  {
    id: projectId++,
    name: 'Social Proof Section',
    description:
      'Web page has no big functionality mainly styled some additon for mobile. Designed by front-mentor.',
    tags: [
      {
        name: 'responsive',
        color: 'violet-text-gradient',
      },
      {
        name: 'w3_school(css framework)',
        color: 'green-text-gradient',
      },
      {
        name: 'bootstrap5',
        color: 'blue-text-gradient',
      },
      {
        name: 'html5',
        color: 'orange-text-gradient',
      },
    ],
    image: social,
    url: 'https://azick99.github.io/Social-proof-section/',
    source_code_link: 'https://github.com/azick99/Social-proof-section',
  },
  {
    id: projectId++,
    name: 'Multi step form',
    description:
      'Web app has all functionality, pretty user-friendly design and step by step form with smooth changing pages. User can come back pervious steps and it can be completed if user does not fill all of form field that required.  ',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'responsive',
        color: 'violet-text-gradient',
      },
      {
        name: 'sass',
        color: 'pink-text-gradient',
      },
    ],
    image: multi,
    url: 'https://radiant-maamoul-f5d488.netlify.app/',
    source_code_link: 'https://github.com/azick99/Multi-step-form',
  },
  {
    id: projectId++,
    name: 'Shorten Url',
    description:
      'Web page is fully functional, well-designed page with working shortening input and smooth scroll animation in navigation. Web app can shorten long and ugly urls to short and better urls.',
    tags: [
      {
        name: 'tailwind-css',
        color: 'blue-text-gradient',
      },
      {
        name: 'react',
        color: 'green-text-gradient',
      },
      {
        name: 'responsive',
        color: 'orange-text-gradient',
      },
    ],
    image: shorten,
    url: 'https://benevolent-swan-102734.netlify.app/',
    source_code_link: 'https://github.com/azick99/Shorten-Url',
  },

  {
    id: projectId++,
    name: 'Sneakers Shop',
    description:
      'E-commerce web App with user-friendly design and some features like home page counter, stripe card payment and auth.Light weight and it\'s still in the proccess of development that can improve its functionality.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'firebase',
        color: 'orange-text-gradient',
      },
      {
        name: 'sass',
        color: 'pink-text-gradient',
      },
      {
        name: 'react-router',
        color: 'green-text-gradient',
      },
    ],
    image: sneakers,
    url: 'https://effortless-cassata-2d5f5f.netlify.app/',
    source_code_link: 'https://github.com/azick99/Sneakers-shop',
  },
]

export {
  services,
  technologies,
  experiences,
  // testimonials,
  aboutMe,
  projects,
  techProgresses,
}
