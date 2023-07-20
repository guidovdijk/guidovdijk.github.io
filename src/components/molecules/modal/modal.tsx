/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from 'react'
import { IconButton } from '@/components/atoms/icon-button'
import {
  AnimatePresence,
  LazyMotion,
  domAnimation,
  m,
} from 'framer-motion'
import { useKeyUp } from '@/hooks/use-key-up'
import { useScrollLock } from '@/hooks/use-scroll-lock'
import { Col, Grid } from '@/components/atoms/grid'
import { useModal } from './modal.context'

export interface IModalProps {
  className?: string
}

// TODO: Fix a11y issues
export const Modal: React.FC<IModalProps> = ({
  className = '',
  ...props
}) => {
  const {
    isOpen, setIsOpen, activeItem,
  } = useModal()

  useScrollLock(isOpen)

  useKeyUp('Escape', () => {
    setIsOpen(false)
  })

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        {
          isOpen
          && (
            <m.div
              animate={{ opacity: 1 }}
              className="fixed z-50 overflow-y-scroll h-full min-h-screen top-0 right-0 left-0"
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
            >
              <div
                {...props}
                className={`cursor-pointer z-20 top-0 py-6 px-6 left-0 overflow-y-auto ${className}`}
                onClick={() => { setIsOpen(false) }}
              >
                <Grid className="cursor-none pointer-events-none">
                  <Col className="col-span-12 md:col-span-6 md:col-start-4 lg:col-span-4 lg:col-start-5">
                    {activeItem}
                  </Col>
                </Grid>

              </div>
              <IconButton className="fixed top-4 right-8" name="exitscreen" onClick={() => { setIsOpen(false) }} />

              <div
                className="fixed z-[-1] before:backdrop-blur-sm before:bg-black-500/70 before:w-full before:h-full before:fixed cursor-pointer before:right-4 before:top-0 before:bottom-0"
              />
            </m.div>
          )
        }
      </AnimatePresence>
    </LazyMotion>
  )
}
