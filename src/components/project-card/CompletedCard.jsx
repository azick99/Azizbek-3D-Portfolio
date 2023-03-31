import './completed-card.style.scss'

const CompletedCard = ({ complete }) => {
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
