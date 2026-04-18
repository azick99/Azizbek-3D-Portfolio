import { useEffect, useState } from 'react'

const useIsMobile = (maxWidthPx = 600): boolean => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${maxWidthPx}px)`)
    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange)
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [maxWidthPx])

  return isMobile
}

export default useIsMobile
