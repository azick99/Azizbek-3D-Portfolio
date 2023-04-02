import { download } from '../../assets'
import './download-button.style.scss'
import AzizbekCv from '../../cv/Azizbek_Yunusaliev_cv.pdf'

const DownloadButton = ({ text }) => {
  return (
    <a
      href={AzizbekCv}
      download="Azizbek Yunusaliev's CV"
      target="_blank"
      className={`${text} download-btn`}
    >
      <span className="btn-text">Download CV</span>
      <span className="btn-icon ">
        <img
          src={download}
          alt="download-icon"
          className="w-[24px] h-[24px]  "
        />
      </span>
    </a>
  )
}

export default DownloadButton
