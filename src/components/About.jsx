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
          Enthusiastic and dedicated{' '}
          <b className="text-[#915eff]">Front-End Developer</b> with a strong
          foundation in software development technologies. I have great
          proficiency in JavaScript and state management library such as
          <b className="text-[#915eff]"> React, Redux and Redux Toolkit</b>.
          <br />
          <br />
          Currently I am actively focused on testing in{' '}
          <b className="text-[#915eff]">Jest</b> and creating{' '}
          <b className="text-[#915eff]">Next.js</b> projects with{' '}
          <b className="text-[#915eff]">TypeScript and Tailwind-CSS.</b> With
          which, I can boost web perfomance, SEO and responsiveness, after,
          I try to test large projects and make them{' '}
          <b className="text-[#915eff]">PWA.</b>
          <br />
          <br />I have gained practical, hands-on experience in these
          technologies and am eager to apply them to{' '}
          <b className="text-[#915eff]"> real-world projects </b>. My dedication
          to continuous learning and staying up-to-date with the latest industry
          trends and best practices drives me to excel in this dynamic field.
          <br />
          <br />I know that there are lots of great things which I must{' '}
          <b className="text-[#915eff]">learn</b>, make mistakes and try hard to
          be the best developer so now I am ready for all of challenges and
          difficulties in <b className="text-[#915eff]">my journey.</b>
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
