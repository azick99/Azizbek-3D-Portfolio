import { motion } from 'framer-motion'
import { useState } from 'react'
import { github, website } from '../assets'
import { projects } from '../constants'
import type { Project } from '../constants'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import Tab from './tab/Tab'

type ProjectCardProps = {
  index: number
  project: Project
}

const ProjectCard = ({ index, project }: ProjectCardProps) => {
  const { name, description, image, source_code_link, tags, url } = project
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
      initial="hidden"
      animate="show"
    >
      <div className="bg-tertiary p-5 rounded-2xl sm:w-[350px] relative  w-full">
        <div className="relative w-full h-[230px] ">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className=" flex justify-end m-3 absolute top-0 right-0">
          <button
            type="button"
            onClick={() => window.open(source_code_link, '_blank')}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mr-2  "
            aria-label="Open GitHub repository"
          >
            <img
              src={github}
              alt="github"
              className="w-1/2 h-1/2 object-contain "
            />
          </button>
          <button
            type="button"
            onClick={() => window.open(url, '_blank')}
            className=" bg-slate-300 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer  "
            aria-label="Open live site"
          >
            <img
              src={website}
              alt="website"
              className="w-1/2 h-1/2 object-contain"
            />
          </button>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}&nbsp;&nbsp;
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

const TAB_NEW = 12
const TAB_MAJOR = 3
const TAB_STYLE = 6
const TAB_SMALL = 9

const projectsForTab = (tab: number): Project[] => {
  switch (tab) {
    case TAB_MAJOR:
      return projects.slice(0, 3)
    case TAB_STYLE:
      return projects.slice(3, 6)
    case TAB_SMALL:
      return projects.slice(6, 9)
    case TAB_NEW:
      return projects.slice(-3)
    default:
      return projects
  }
}

const Works = () => {
  const [indexed, setIndex] = useState(TAB_NEW)

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
          variants={fadeIn('', 'spring', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-center"
        >
          Description of Projects is written down with tools I used. Most
          projects are done recently, around 3 months period with new tools. I
          don't want to show my old projects due to most of them old tools and
          after rewview I didn't like it.
        </motion.p>
      </div>
      <ul className="list-reset flex justify-center mt-10 gap-5 flex-wrap">
        <Tab
          text="New Projects"
          num={TAB_NEW}
          setIndex={setIndex}
          index={indexed}
        />
        <Tab
          text="Major Projects"
          num={TAB_MAJOR}
          setIndex={setIndex}
          index={indexed}
        />
        <Tab
          text="Style Projects"
          num={TAB_STYLE}
          setIndex={setIndex}
          index={indexed}
        />
        <Tab
          text="Small and Sweet"
          num={TAB_SMALL}
          setIndex={setIndex}
          index={indexed}
        />
      </ul>

      <div className="mt-20 flex flex-wrap gap-8" key={indexed}>
        {projectsForTab(indexed).map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, 'projects')
