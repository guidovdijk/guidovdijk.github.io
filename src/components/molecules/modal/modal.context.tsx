import React, { useContext } from 'react'

interface IModalContextProps {
  isOpen: boolean;
  activeItem: React.ReactNode;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveItem: React.Dispatch<React.SetStateAction<React.ReactNode>>;
}

const ModalContext = React.createContext<IModalContextProps | null>(null)

export function useModal(): IModalContextProps {
  const context = useContext(ModalContext)

  if (context === null) {
    throw new Error('useModal must be used within a ModalProvider component')
  }

  return context
}

const ModalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [activeItem, setActiveItem] = React.useState<React.ReactNode>(null)

  const value = React.useMemo(
    () => ({
      isOpen, setIsOpen, activeItem, setActiveItem,
    }),
    [isOpen, setIsOpen, activeItem, setActiveItem],
  )

  return (
    <ModalContext.Provider value={value}>
      {children}
    </ModalContext.Provider>
  )
}

export default ModalProvider
