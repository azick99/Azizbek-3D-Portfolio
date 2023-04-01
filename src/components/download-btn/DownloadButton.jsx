import { download } from '../../assets'
import './download-button.style.scss'

const DownloadButton = () => {
  return (
    <a href="#" className="download-btn" download>
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
