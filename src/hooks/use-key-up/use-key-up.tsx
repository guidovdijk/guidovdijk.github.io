import { useEffect, useCallback } from 'react'

const useKeyUp = (
  targetKey: KeyboardEvent['key'],
  handler: () => void,
) => {
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
      return
    }

    window.addEventListener('keyup', handleKeyUp)

    // eslint-disable-next-line consistent-return
    return () => {
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [handleKeyUp])
}

export default useKeyUp
