import * as React from 'react'
import { useModal } from './modal.context'

export interface IModalProps {
  className?: string
}

export const Modal: React.FC<IModalProps> = ({
  className = '',
  ...props
}) => {
  const {
    isOpen, setIsOpen, activeItem, setActiveItem,
  } = useModal()

  return (
    (isOpen && <div {...props} className={`${className}`}>{activeItem}</div>)
  )
}
