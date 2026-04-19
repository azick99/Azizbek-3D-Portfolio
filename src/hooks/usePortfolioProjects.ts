import { useEffect, useState } from 'react'
import type { Project } from '../constants'
import { projects as fallbackProjects } from '../constants'
import { isSanityConfigured } from '../sanity/client'
import { fetchSanityProjects } from '../sanity/fetchPortfolio'

export function usePortfolioProjects() {
  const [projects, setProjects] = useState<Project[]>(fallbackProjects)
  const [loading, setLoading] = useState(isSanityConfigured)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!isSanityConfigured) {
      setLoading(false)
      return
    }

    let cancelled = false
    setLoading(true)
    fetchSanityProjects()
      .then((data) => {
        if (cancelled) return
        if (data && data.length > 0) {
          setProjects(data)
        } else if (data && data.length === 0) {
          setProjects([])
        }
        setError(null)
      })
      .catch(() => {
        if (cancelled) return
        setProjects(fallbackProjects)
        setError('Could not load projects from Sanity. Showing local fallback.')
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [])

  return { projects, loading, error }
}
