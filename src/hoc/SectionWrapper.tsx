import { motion } from 'framer-motion'
import type { ComponentType, FC } from 'react'
import { styles } from '../styles'
import { staggerContainer } from '../utils/motion'

function SectionWrapper(
  Component: ComponentType,
  idName: string,
): FC {
  const HOC: FC = () => (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <span className="hash-span" id={idName}>
        &nbsp;
      </span>
      <Component />
    </motion.section>
  )

  return HOC
}

export default SectionWrapper
