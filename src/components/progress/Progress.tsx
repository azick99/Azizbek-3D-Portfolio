import { motion } from 'framer-motion'
import type { TechProgress } from '../../constants'
import './progress.style.scss'

type ProgressProps = {
  progress: TechProgress
}

const Progress = ({ progress }: ProgressProps) => {
  return (
    <div className="progress-bar">
      <p className="progress-title">{progress.name}</p>
      <div className="progress-con">
        <p className="prog-text">{progress.percent}%</p>
        <div className="progress">
          <motion.span
            animate={{
              width: `${progress.percent}%`,
            }}
            transition={{
              duration: 1,
            }}
          ></motion.span>
        </div>
      </div>
    </div>
  )
}

export default Progress
