import { motion } from 'framer-motion'
import { useState } from 'react'
import { github, website } from '../assets'
import { projects } from '../constants'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import Tab from './tab/Tab'

const ProjectCard = ({ index, project }) => {
  const { name, description, image, source_code_link, tags, url } = project
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.5, 0.75)}

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
          <div
            onClick={() => window.open(source_code_link, '_blank')}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mr-2  "
          >
            <img
              src={github}
              alt="github"
              className="w3-1/2 h-1/2 object-contain "
            />
          </div>
          <div
            onClick={() => window.open(url, '_blank')}
            className=" bg-slate-300 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer  "
          >
            <img
              src={website}
              alt="website"
              className="w3-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-6 flex flex-wrap g-2">
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

const Works = () => {
  const [indexed, setIndex] = useState(12)
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
          Description of Projects is written down with tools I used. Most
          projects are done recently, around 3 months period with new tools. I
          don't want to show my old projects due to most of them old tools and
          after rewview I didn't like it.
        </motion.p>
      </div>
      <ul className="list-reset flex justify-center mt-10 gap-5 flex-wrap">
        <Tab text="New Projects" num={12} setIndex={setIndex} index={indexed} />
        <Tab
          text="Major Porjects"
          num={3}
          setIndex={setIndex}
          index={indexed}
        />
        <Tab
          text="Style Projects"
          num={6}
          setIndex={setIndex}
          index={indexed}
        />
        <Tab
          text="Small and Sweet"
          num={9}
          setIndex={setIndex}
          index={indexed}
        />
      </ul>

      <div className="mt-20 flex flex-wrap gap-8">
        {projects
          .filter((p) => {
            if (indexed === 3) {
              return indexed >= p.id
            }
            if (indexed === 6) {
              return indexed <= p.id + 2 && indexed >= p.id
            }
            if (indexed === 9) {
              return indexed <= p.id + 2  && indexed >= p.id
            }
            if (indexed === 12) {
              return indexed <= p.id + 2
            }
          })
          .map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              project={project}
              index={index}
              indexed={indexed}
            />
          ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, '')
