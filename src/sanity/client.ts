import { createClient, type SanityClient } from '@sanity/client'

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID
const dataset = import.meta.env.VITE_SANITY_DATASET ?? 'production'
const apiVersion = import.meta.env.VITE_SANITY_API_VERSION ?? '2024-01-01'

export const isSanityConfigured = Boolean(projectId)

let client: SanityClient | null = null

export function getSanityClient(): SanityClient | null {
  if (!projectId) return null
  if (!client) {
    client = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
    })
  }
  return client
}
