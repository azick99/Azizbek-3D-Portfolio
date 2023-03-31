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
  carrent,
  jobit,
  tripguide,
  threejs,
  eductaion,
  school,
  graduationHat,
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

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
]

const projects = [
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Car Ren',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportaion needs.',
    tags: [
      {
        name: 'reat',
        color: 'blue-text-radient',
      },
      {
        name: 'mongodb',
        color: 'green-txt-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-txt-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Car Ren',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportaion needs.',
    tags: [
      {
        name: 'reat',
        color: 'blue-text-radient',
      },
      {
        name: 'mongodb',
        color: 'green-txt-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-txt-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Car Ren',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportaion needs.',
    tags: [
      {
        name: 'reat',
        color: 'blue-text-radient',
      },
      {
        name: 'mongodb',
        color: 'green-txt-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-txt-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/',
  },
]

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  techProgresses,
}
