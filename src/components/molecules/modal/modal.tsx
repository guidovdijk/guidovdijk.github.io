/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from 'react'
import { useEffect } from 'react'
import { IconButton } from '@/components/atoms/icon-button'
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

  const handleKeyUp = React.useCallback((event: { key: string }) => {
    if (isOpen && event.key === 'Escape') {
      setIsOpen(false)
    }
  }, [isOpen, setIsOpen])

  useEffect(() => {
    if (typeof window !== 'object') {
      return
    }

    window.addEventListener('keyup', handleKeyUp)

    // eslint-disable-next-line consistent-return
    return () => {
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [handleKeyUp])

  return (
    (isOpen
      && (
        <>
          <div
            {...props}
            className={`flex justify-center items-center sticky z-20 top-0 left-0 overflow-y-auto ${className}`}
          >
            {activeItem}

            <IconButton className="fixed top-4 right-4" name="exitscreen" onClick={() => { setIsOpen(false) }} />
          </div>
          <div
            className="fixed before:backdrop-blur-sm before:bg-black-500/70 before:w-full before:h-full before:fixed cursor-pointer before:left-0 before:top-0 before:bottom-0"
            onClick={() => { setIsOpen(false) }}
          />
        </>
      )
    )
  )
}
