import { List } from '@/components/atoms/list'
import { motion } from 'framer-motion'
import * as React from 'react'

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
  <motion.div
    className={`transform-gpu flex flex-col md:flex-row md:items-center md:justify-between w-full gap-x-8 gap-y-8 px-0 sm:px-6 lg:px-12 xl:px-24 mx-auto ${className}`}
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
    <div className="flex flex-col flex-grow">
      <p className="text-subtitle uppercase text-white-500">0{index} / {subtitle}</p>
      <h1 className="text-heading-2-xl font-semibold font-heading w-min">{title}</h1>
    </div>
    <div className="md:hidden h-[1px] w-full bg-black-200" />
    <div className="flex md:ml-auto items-center md:justify-end">
      <div className="mr-10 h-44 w-[1px] bg-black-200 hidden md:block" />
      <div className="flex flex-wrap gap-y-4 gap-x-12">
        <List
          items={subjects}
          title="made with"
        />
        <List
          items={dates}
          title="when"
        />
        <List
          items={roles}
          title="role"
        />
      </div>
    </div>
  </motion.div>
)
