import { useCallback, useEffect } from 'react'

const useKeyUp = (targetKey: KeyboardEvent['key'], handler: () => void) => {
  const handleKeyUp = useCallback(
    ({ key }: { key: string }) => {
      if (key === targetKey) {
        handler()
      }
    },
    [targetKey, handler],
  )

  useEffect(() => {
    if (typeof window !== 'object') {
      return undefined
    }

    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [handleKeyUp])
}

export default useKeyUp
