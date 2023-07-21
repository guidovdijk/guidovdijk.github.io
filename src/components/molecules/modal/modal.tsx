/* eslint-disable jsx-a11y/click-events-have-key-events */

/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from 'react'

import { AnimatePresence, LazyMotion, domAnimation, m } from 'framer-motion'

import { useKeyUp } from '@/hooks/use-key-up'
import { useScrollLock } from '@/hooks/use-scroll-lock'

import { Col, Grid } from '@/components/atoms/grid'
import { IconButton } from '@/components/atoms/icon-button'

import { useModal } from './modal.context'

export interface IModalProps {
  className?: string
}

// TODO: Fix a11y issues
export const Modal: React.FC<IModalProps> = ({ className = '', ...props }) => {
  const { isOpen, setIsOpen, activeItem } = useModal()

  useScrollLock(isOpen)

  useKeyUp('Escape', () => {
    setIsOpen(false)
  })

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        {isOpen && (
          <m.div
            animate={{ opacity: 1 }}
            className="fixed left-0 right-0 top-0 z-50 h-full min-h-screen overflow-y-scroll"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
          >
            <div
              {...props}
              className={`left-0 top-0 z-20 cursor-pointer overflow-y-auto px-6 py-6 ${className}`}
              onClick={() => {
                setIsOpen(false)
              }}
            >
              <Grid className="pointer-events-none cursor-none">
                <Col className="col-span-12 md:col-span-6 md:col-start-4 lg:col-span-4 lg:col-start-5">
                  {activeItem}
                </Col>
              </Grid>
            </div>
            <IconButton
              className="fixed right-8 top-4"
              name="exitscreen"
              onClick={() => {
                setIsOpen(false)
              }}
            />

            <div className="fixed z-[-1] cursor-pointer before:fixed before:bottom-0 before:right-4 before:top-0 before:h-full before:w-full before:bg-black-500/70 before:backdrop-blur-sm" />
          </m.div>
        )}
      </AnimatePresence>
    </LazyMotion>
  )
}
