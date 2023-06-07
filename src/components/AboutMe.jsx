import { motion } from 'framer-motion'
import { aboutMe } from '../constants'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import DownloadButton from './download-btn/DownloadButton'
import {
  SiFrontendmentor,
  SiDiscord,
  SiStackoverflow,
  SiLinkedin,
} from 'react-icons/si'
const FeedbackCard = ({ title }) => {
  return (
    <motion.div
      variants={fadeIn('', 'spring', 0.5, 0)}
      className="bg-black-200 p-10 rounded-3xl xs:w-[450px] w-full"
    >
      <p className="text-white tracking-wider text-[25px] uppercase pb-4 border-b-[1px] border-secondary border-solid ">
        {title}
      </p>
      <div className="mt-5">
        {title === 'soft skills'
          ? aboutMe.softSkills.map((skill) => (
              <div className="progress-bar pb-2" key={skill.text}>
                <p className="progress-title">{skill.text}</p>
                <div className="progress-con">
                  <p className="prog-text">{skill.percent}</p>
                  <div className="progress">
                    <motion.span
                      animate={{
                        width: skill.percent,
                      }}
                      transition={{
                        duration: '1',
                      }}
                    ></motion.span>
                  </div>
                </div>
              </div>
            ))
          : aboutMe.language.map((lang) => (
              <div className="progress-bar pb-2" key={lang.text}>
                <p className="progress-title">{lang.text}</p>
                <div className="progress-con">
                  <p className="prog-text">{lang.percent}</p>
                  <div className="progress">
                    <motion.span
                      animate={{
                        width: lang.percent,
                      }}
                      transition={{
                        duration: '1',
                      }}
                    ></motion.span>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </motion.div>
  )
}

const AboutMe = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>Working with team</p>
          <h2 className={`${styles.heroHeadText}`}>Soft Skills</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-5`}>
        <FeedbackCard title="soft skills" />
        <FeedbackCard title="language" />
        <div className="flex w-full justify-between flex-wrap sm:gap-y-0 gap-y-10">
          <DownloadButton text="about" />
          <div className="flex items-end pb-5 gap-x-5 w-1/2 justify-center ">
            <a
              href="https://www.linkedin.com/in/azizbek-yunusaliev-6b060b232/"
              className="w-6"
              target="_blank"
            >
              <SiLinkedin className="w-6 hover:fill-slate-500 transition" />
            </a>

            <a
              href="https://www.frontendmentor.io/profile/azick99"
              className="w-6"
              target="_blank"
            >
              <SiFrontendmentor className="w-6 hover:fill-slate-500 transition" />
            </a>
            <a
              href="https://discord.com/Azick_com#0764"
              className="w-6"
              target="_blank"
            >
              <SiDiscord className="w-6 hover:fill-slate-500 transition" />
            </a>
            <a
              href="https://discord.com/Azick_com#0764"
              className="w-6"
              target="_blank"
            >
              <SiStackoverflow className="w-6 hover:fill-slate-500 transition" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper(AboutMe, '')
