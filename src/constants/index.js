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
  computer,
  upwork,
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
    percent: 75,
  },
  {
    name: 'JAVASCRIPT',
    percent: 70,
  },
  {
    name: 'REACT JS',
    percent: 75,
  },
  {
    name: 'TYPESCRIPT',
    percent: 45,
  },
  {
    name: 'TAILWIND',
    percent: 70,
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
    title: 'Assistant in IT sector (Internship) ',
    company_name: 'Computer Technology collage of fergana',
    icon: computer,
    iconBg: '#383E56',
    date: ' May 2017 - August 2019',
    points: [
      ' Assisted professors of Computer Science at college, providing support and assistance in various tasks.',
      'Developed skills in web development, including HTML5, CSS3, and JavaScript.',
      'Gained knowledge in both software and hardware aspects of computers.',
      'Helped students to understand difficult themes that I learnt.',
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
    title: 'Self-employed Web developer',
    company_name: 'Upwork and fiverr freelance market',
    icon: upwork,
    iconBg: '#383E56',
    date: 'May 2023 - Present',
    points: [
      'Creating user-friendly web apps and web pages.',
      ' Utilized modern frameworks and JavaScript programming languages such as Tailwind CSS and React.',
      "Delivered high-quality web services tailored to clients' specific requirements.",
      'Coding readable codes and intagrating it to real world porjects.',
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
    url: 'https://clothing-e-commerce-web.netlify.app/',
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
    url: 'https://chat-gpt-web.netlify.app',
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
    url: 'https://home-landing.netlify.app/',
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
    url: 'https://tips-calculator-web.netlify.app/',
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
    url: 'https://multi-steps-form-web.netlify.app/',
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
    url: 'https://shorten-url-web.netlify.app/',
    source_code_link: 'https://github.com/azick99/Shorten-Url',
  },

  {
    id: projectId++,
    name: 'Sneakers Shop',
    description:
      "E-commerce web App with user-friendly design and some features like home page counter, stripe card payment and auth.Light weight and it's still in the proccess of development that can improve its functionality.",
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
    url: 'https://sneakers-and-clothes-shop.netlify.app',
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
