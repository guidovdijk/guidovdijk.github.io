import * as React from 'react'

import { LazyMotion, domAnimation, m } from 'framer-motion'

import { List } from '@/components/atoms/list'

export interface IWorkHeaderProps {
  index: number
  subtitle: string
  className?: string
  title: string
  subjects: string[]
  dates: string[]
  roles: string[]
}

export const WorkHeader: React.FC<IWorkHeaderProps> = ({
  index,
  subtitle,
  title,
  subjects,
  dates,
  roles,
  className = '',
  ...props
}) => (
  <LazyMotion features={domAnimation}>
    <m.div
      className={`mx-auto flex w-full transform-gpu flex-col gap-x-8 gap-y-8 px-0 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-12 xl:px-24 ${className}`}
      {...props}
      animate="animate"
      initial="initial"
      transition={{ duration: 0.75, type: 'tween' }}
      variants={{
        initial: {
          opacity: 0,
          y: 48,
        },
        animate: {
          opacity: 1,
          y: 0,
        },
      }}
    >
      <div className="flex flex-grow flex-col">
        <p className="text-subtitle uppercase text-white-500">
          0{index} / {subtitle}
        </p>
        <h1 className="font-heading text-heading-2-xl font-semibold">
          {title}
        </h1>
      </div>
      <div className="h-[1px] w-full bg-black-200 md:hidden" />
      <div className="flex items-center md:ml-auto md:justify-end">
        <div className="mr-10 hidden h-44 w-[1px] bg-black-200 md:block" />
        <div className="flex flex-wrap gap-x-12 gap-y-4">
          <List items={subjects} title="made with" />
          <List items={dates} title="when" />
          <List items={roles} title="role" />
        </div>
      </div>
    </m.div>
  </LazyMotion>
)
