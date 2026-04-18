import { download } from '../../assets'
import './download-button.style.scss'

type DownloadButtonProps = {
  /** Extra class (e.g. `about` for width override in About section) */
  text?: string
}

const DownloadButton = ({ text }: DownloadButtonProps) => {
  const className = ['download-btn', text].filter(Boolean).join(' ')
  return (
    <a
      href="/Azizbek_Yunusaliev_cv.pdf"
      download="Azizbek Yunusaliev CV.pdf"
      target="_blank"
      rel="noreferrer"
      className={className}
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
