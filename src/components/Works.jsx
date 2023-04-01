import { motion } from 'framer-motion'
import { useState } from 'react'
import Tilt from 'react-tilt'
import { github } from '../assets'
import { projects } from '../constants'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import Tab from './tab/Tab'

const ProjectCard = ({ index, project }) => {
  const { name, description, image, source_code_link, tags } = project
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        option={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[300px] w-full"
      >
        <div className="relative w-full h-[230px] ">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="absolute inset-0 flex justify-end m-3 card-img-hover">
          <div
            onClick={() => window.open(source_code_link, '_blank')}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={github}
              alt="github"
              className="w3-1/2 h-1/2 object-contain"
            />
          </div>
          <div
            onClick={() => window.open(source_code_link, '_blank')}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={github}
              alt="github"
              className="w3-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap g-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}&nbsp;&nbsp;
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  const [card, setCard] = useState({ x: 9, y: 6 })
  return (
    <>
      <motion.div
        variants={textVariant()}
        className="flex text-center justify-center "
      >
        <div className="w-[30%]">
          <p
            className={`${styles.sectionSubText} border-t-[1px] border-[#aaa6c3] border-solid pt-7  `}
          >
            My work
          </p>
          <h2 className={styles.sectionHeadText}>Projects</h2>
        </div>
      </motion.div>
      <div className="w-full flex justify-center ">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-center"
        >
          Description of Projects with high desire to <b>learn new skills</b>{' '}
          and working with team. After graduation, I started to deep dive into
          IT and chose web developing as a main field of my career, same time
          improve my communication and organization skills. As, I had good
          knowledge in English I worked at some schools and costumer services,
          in free time enhance <b>Front-end knowledge</b>. Had gained the
          skills, I decided to go abroad and continue my career in web
          development.
        </motion.p>
      </div>
      <ul className="list-reset flex justify-center mt-10 gap-5">
        <Tab text="Major Porjects" />
        <Tab text="Style Projects" />
        <Tab text="Small and Sweet" />
      </ul>

      <div className="mt-20 flex flex-wrap justify-around">
        {projects
          .filter((_, idx) => card.x > idx + card.y)
          .map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              project={project}
              index={index}
            />
          ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, '')
