import { download } from '../../assets'
import './download-button.style.scss'

const defaultHref = '/Azizbek_Yunusaliev_cv.pdf'
const defaultDownload = 'Azizbek Yunusaliev CV.pdf'

type DownloadButtonProps = {
  /** Extra class (e.g. `about` for width override in About section) */
  text?: string
  /** When set (e.g. from Sanity), overrides the default CV path */
  href?: string
  downloadFileName?: string
}

const DownloadButton = ({
  text,
  href = defaultHref,
  downloadFileName = defaultDownload,
}: DownloadButtonProps) => {
  const className = ['download-btn', text].filter(Boolean).join(' ')
  return (
    <a
      href={href}
      download={downloadFileName}
      target="_blank"
      rel="noreferrer"
      className={className}
    >
      <span className="btn-text">Download CV</span>
      <span className="btn-icon ">
        <img
          src={download}
          alt="download-icon"
          className="h-[24px] w-[24px]"
        />
      </span>
    </a>
  )
}

export default DownloadButton
