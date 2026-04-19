/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SANITY_PROJECT_ID?: string
  readonly VITE_SANITY_DATASET?: string
  readonly VITE_SANITY_API_VERSION?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module '*.svg' {
  const src: string
  export default src
}

declare module '*.png' {
  const src: string
  export default src
}

declare module '*.jpg' {
  const src: string
  export default src
}

declare module '*.pdf' {
  const src: string
  export default src
}

declare module 'maath/random/dist/maath-random.esm' {
  export function inSphere(
    buffer: Float32Array,
    options: { radius: number },
  ): Float32Array
}
