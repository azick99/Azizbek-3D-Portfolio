import { motion } from 'framer-motion'
import { styles } from '../styles'
import { completes, services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import DownloadButton from './download-btn/DownloadButton'
import CompletedCard from './project-card/CompletedCard'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <div className="xs:w-[250px] w-full">
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
    </div>
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
          variants={fadeIn('left', 'tween', 0.5, 0.75)}
          className="mt-4 text-secondary text-[17px] leading-[30px] sm:pr-[80px] pr-[0] max-auto"
        >
          As an aspiring <b className="text-[#915eff]">Front-End Developer</b> ,
          I am deeply passionate about creating engaging and interactive web
          experiences that truly delight users. Currently, I am actively
          expanding my knowledge and skills in front-end development, with a
          focus on{' '}
          <b className="text-[#915eff]">
            TypeScript, JavaScript, React, and Redux.
          </b>
          <br />
          <br />I have gained practical, hands-on experience in these
          technologies and am eager to apply them to{' '}
          <b className="text-[#915eff]"> real-world projects </b>. My dedication
          to continuous learning and staying up-to-date with the latest industry
          trends and best practices drives me to excel in this dynamic field.
          <br />
          <br />I have also gained practical experience through various
          professional endeavors. During my 2.4-year (with breaks) internship as
          an <b className="text-[#915eff]"> IT Assistant </b>, I had the
          opportunity to assist professors in the Computer Science department
          while boosting my web development skills.
          <br />
          <br />I know that there are lots of great things which I must{' '}
          <b className="text-[#915eff]">learn</b>, make mistakes and try hard to
          be the best developer so now I am ready for all of challenges and
          difficulties in <b className="text-[#915eff]">my journey</b>
          <br />
          <DownloadButton />
        </motion.p>
        <motion.div
          variants={fadeIn('right', 'tween', 0.5, 0.75)}
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
