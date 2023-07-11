/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from 'react'
import { useEffect } from 'react'
import { IconButton } from '@/components/atoms/icon-button'
import { useModal } from './modal.context'

export interface IModalProps {
  className?: string
}

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
        <div
          {...props}
          className={`flex justify-center items-center fixed backdrop-blur-sm z-20 top-0 left-0 w-screen h-screen overflow-y-auto ${className}`}
        >
          {activeItem}

          <IconButton className="absolute top-4 right-4" name="exitscreen" onClick={() => { setIsOpen(false) }} />
          <div
            className="bg-black-500/70 -z-10 w-full h-full absolute cursor-pointer"
            onClick={() => { setIsOpen(false) }}
          />
        </div>
      )
    )
  )
}
