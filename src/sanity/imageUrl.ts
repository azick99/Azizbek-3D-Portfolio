import imageUrlBuilder from '@sanity/image-url'
import { getSanityClient } from './client'

export function urlForImage(source: unknown) {
  const c = getSanityClient()
  if (!c || !source) return ''
  return imageUrlBuilder(c).image(source).width(900).fit('max').auto('format').url()
}
