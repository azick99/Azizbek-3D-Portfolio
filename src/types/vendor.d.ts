declare module 'react-vertical-timeline-component' {
  import type { CSSProperties, FC, ReactNode } from 'react'

  export interface VerticalTimelineProps {
    children?: ReactNode
    className?: string
    layout?: '1-column' | '2-columns'
    lineColor?: string
  }

  export interface VerticalTimelineElementProps {
    className?: string
    contentArrowStyle?: CSSProperties
    contentStyle?: CSSProperties
    date?: string
    dateClassName?: string
    icon?: ReactNode
    iconOnClick?: () => void
    iconStyle?: CSSProperties
    onTimelineElementClick?: () => void
    position?: string
    textClassName?: string
    children?: ReactNode
  }

  export const VerticalTimeline: FC<VerticalTimelineProps>
  export const VerticalTimelineElement: FC<VerticalTimelineElementProps>
}
