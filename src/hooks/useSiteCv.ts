import { useEffect, useState } from 'react'
import { isSanityConfigured } from '../sanity/client'
import { fetchSiteCvSettings, type SiteCvSettings } from '../sanity/fetchPortfolio'

const defaultCv: SiteCvSettings = {
  cvHref: '/Azizbek_Yunusaliev_cv.pdf',
  downloadName: 'Azizbek Yunusaliev CV.pdf',
}

export function useSiteCv() {
  const [cv, setCv] = useState<SiteCvSettings>(defaultCv)

  useEffect(() => {
    if (!isSanityConfigured) return

    let cancelled = false
    fetchSiteCvSettings()
      .then((next) => {
        if (!cancelled) setCv(next)
      })
      .catch(() => {
        if (!cancelled) setCv(defaultCv)
      })

    return () => {
      cancelled = true
    }
  }, [])

  return cv
}
