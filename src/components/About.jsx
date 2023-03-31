import { motion } from 'framer-motion'
import Tilt from 'react-tilt'
import { styles } from '../styles'
import { completes, services } from '../constants'
import { fadeIn, slideIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import DownloadButton from './download-btn/DownloadButton'
import CompletedCard from './project-card/CompletedCard'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 65, scale: 2, speed: 150 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        className="flex sm:flex-row flex-col items-center justify-between"
      >
        <div>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview </h2>
        </div>
      </motion.div>
      <div className="about-container">
        <motion.p
          variants={slideIn('left', 'tween', 0.2, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] sm:pr-[80px] pr-[0] overflow-auto"
        >
          I'm a <b className="text-[#915eff]">Front-end developer</b> with a
          passion for creating beautiful, user-friendly websites. Although I
          don't have any commercial work experience, I've spent
          <b className="text-[#915eff]"> countless hours</b> honing my skills
          and building my portfolio.
          <br />
          <br />
          My interest in web development started when I took an introductory
          course in <b className="text-[#915eff]">HTML and CSS in college</b>. I
          was immediately hooked and spent every spare moment working on
          personal projects and learning new skills. Since then, I've become
          proficient in
          <b className="text-[#915eff]">JavaScript, React,</b> and other
          front-end technologies.
          <br />
          <br />I know that there are lots of great things which I must{' '}
          <b className="text-[#915eff]">learn</b>, make mistakes and try hard to
          be the best developer so now I am ready for all of challenges and
          difficulties in <b className="text-[#915eff]">my journey</b>
          <br />
          <DownloadButton />
        </motion.p>
        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="right-about"
        >
          {completes.map((complete) => (
            <CompletedCard key={complete.text} complete={complete} />
          ))}
        </motion.div>
      </div>
      <div className="mt-20 flex flex-wrap gap-10 sm:justify-center justify-start">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')
