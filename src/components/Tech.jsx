import { motion } from 'framer-motion'
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies, techProgresses } from '../constants'
import { textVariant } from '../utils/motion.js'
import { styles } from '../styles'
import Progress from './progress/Progress'
import useIsMobile from '../utils/useIsMobile'

const Tech = () => {
  const isMobile = useIsMobile()
  return (
    <>
      <motion.div
        variants={textVariant()}
        className="flex sm:flex-row flex-col items-center justify-center text-center mb-[30px]"
      >
        <div>
          <p
            className={`${styles.sectionSubText} border-t-[1px] border-[#aaa6c3] border-solid pt-7`}
          >
            {' '}
            Expertise
          </p>
          <h2 className={styles.sectionHeadText}>My Skills </h2>
        </div>
      </motion.div>
      <motion.div variants={textVariant()} className="progress-bars">
        {techProgresses.map((techProgress, index) => (
          <Progress
            key={techProgress.name}
            progress={techProgress}
            index={index}
          />
        ))}
      </motion.div>
      {isMobile ? (
        ''
      ) : (
        <div className="flex flex-row flex-wrap justify-center gap-10">
          {technologies.map((technology) => (
            <div className="w-28 h-28" key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default SectionWrapper(Tech, '')
