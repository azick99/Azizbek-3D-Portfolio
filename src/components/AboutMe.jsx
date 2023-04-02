import { motion } from 'framer-motion'
import { aboutMe } from '../constants'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import DownloadButton from './download-btn/DownloadButton'

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
      <DownloadButton text='about'/>
      </div>
    </div>
  )
}

export default SectionWrapper(AboutMe, '')
