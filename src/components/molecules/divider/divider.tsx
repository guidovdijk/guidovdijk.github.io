import * as React from 'react'

import {
  LazyMotion,
  domAnimation,
  m,
  useScroll,
  useTransform,
} from 'framer-motion'

const DividerSvgWhite: React.FC<{
  props?: any
  style: any
  className: string
}> = ({ className = '', ...props }) => (
  <m.div
    {...props}
    className={`absolute z-10 origin-center will-change-transform ${className}`}
  >
    <svg
      fill="none"
      height="85"
      viewBox="0 0 85 85"
      width="85"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M41.7754 84.6753V47.1306L27.202 81.7314L25.5431 81.0327L40.0619 46.5616L13.6134 73.0101L12.3406 71.7373L38.8886 45.1893L4.11699 59.3509L3.43805 57.6838L38.0796 43.5752H0.675348V41.7752H38.2202L3.61918 27.2017L4.31788 25.5428L38.7888 40.0615L12.3404 13.6131L13.6132 12.3403L40.1614 38.8886L25.9999 4.11709L27.6669 3.43815L41.7754 38.0792V0.675274L43.5754 0.675274V38.2197L58.1487 3.6191L59.8076 4.31779L45.2887 38.7892L71.7375 12.3403L73.0103 13.6131L46.4623 40.1611L81.2334 25.9998L81.9124 27.6668L47.2714 41.7752H84.6753V43.5752H47.1311L81.7315 58.1484L81.0328 59.8073L46.5611 45.2883L73.0102 71.7373L71.7374 73.0101L45.1896 46.4623L59.351 81.2335L57.684 81.9125L43.5754 47.271V84.6753H41.7754Z"
        fill="white"
        fillRule="evenodd"
      />
    </svg>
  </m.div>
)

const DividerBorders: React.FC = () => (
  <div className="flex w-full items-center justify-between gap-x-4 overflow-hidden">
    {[...Array(10)].map((_x, i) => (
      <m.div
        key={`divider-${i}`}
        className={`w-[1px] bg-white-100/[.05] ${
          i % 2 === 0 ? 'h-56' : 'h-64'
        }`}
      />
    ))}
  </div>
)

interface IDividerProps extends React.HTMLAttributes<HTMLElement> {}

export const Divider: React.FC<IDividerProps> = ({ className, ...props }) => {
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['center end', 'center start'],
  })
  const scale = useTransform(scrollYProgress, [0, 1], [0, 1])
  const rotateWhite = useTransform(
    scrollYProgress,
    [0, 1],
    ['0deg', '114deg'],
    { clamp: false },
  )

  return (
    <div
      {...props}
      ref={ref}
      className={`relative flex items-center justify-center ${className}`}
    >
      <LazyMotion features={domAnimation}>
        <div className="absolute flex h-full w-full items-center justify-center">
          <DividerSvgWhite
            className="rotate-[var(--rotate)] transition-all"
            style={{ '--rotate': rotateWhite } as any}
          />
        </div>

        <m.div
          className="w-full scale-y-[var(--scale)] will-change-transform"
          style={{ '--scale': scale } as any}
        >
          <DividerBorders />
        </m.div>
      </LazyMotion>
    </div>
  )
}
