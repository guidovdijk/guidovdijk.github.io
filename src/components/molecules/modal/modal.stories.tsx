import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import Image from 'next/image'
import { Button } from '@/components/atoms/button'
import {
  Modal, IModalProps, ModalProvider, useModal,
} from './index'

const meta: Meta<IModalProps> = {
  component: Modal,
}

export default meta
type Story = StoryObj<IModalProps>

const Component: React.FC = () => {
  const {
    isOpen, setIsOpen, activeItem, setActiveItem,
  } = useModal()

  const openModal = (text: string) => {
    console.log('clicked')
    setIsOpen(true)
    setActiveItem(<p>{text}</p>)
  }

  return (
    <>
      <Button onClick={() => { openModal('Modal Text One') }} variation="primary">Open Modal One</Button>
      <Button onClick={() => { openModal('Modal Text Two') }} variation="primary">Open Modal Two</Button>
      <Modal />
    </>
  )
}

export const Default: Story = {
  render: () => (
    <ModalProvider>
      <Component />
    </ModalProvider>
  ),
}
