/// <reference types="vite/client" />

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
