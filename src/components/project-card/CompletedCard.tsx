import type { CompleteStat } from '../../constants'
import './completed-card.style.scss'

type CompletedCardProps = {
  complete: CompleteStat
}

const CompletedCard = ({ complete }: CompletedCardProps) => {
  return (
    <div className="about-item">
      <div className="abt-text">
        <p className="large-text">{complete.number}+</p>
        <p className="small-text">
          {complete.text} <br /> {complete.subText}
        </p>
      </div>
    </div>
  )
}

export default CompletedCard
