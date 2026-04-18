import type { Variants } from 'framer-motion'

export const textVariant = (delay = 0): Variants => ({
  hidden: {
    y: -50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1.25,
      delay,
    },
  },
})

type FadeDirection = 'left' | 'right' | 'up' | 'down' | ''

export const fadeIn = (
  direction: FadeDirection,
  type: string,
  delay: number,
  duration: number,
): Variants => ({
  hidden: {
    x:
      direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
    y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
})

export const zoomIn = (delay: number, duration: number): Variants => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'tween',
      delay,
      duration,
      ease: 'easeOut',
    },
  },
})

type SlideDirection = 'left' | 'right' | 'up' | 'down'

export const slideIn = (
  direction: SlideDirection,
  type: string,
  delay: number,
  duration: number,
): Variants => ({
  hidden: {
    x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
    y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
})

export const staggerContainer = (
  staggerChildren?: number,
  delayChildren?: number,
): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren: delayChildren ?? 0,
    },
  },
})
