import { useCallback, useEffect, useState } from 'react'

interface IUseScrollData {
  x: number
  y: number
  lastX: number
  lastY: number
}

const useScroll = (handler: (data: IUseScrollData) => void) => {
  const [data, setData] = useState<IUseScrollData>({
    x: 0,
    y: 0,
    lastX: 0,
    lastY: 0,
  })

  const handleScroll = useCallback(() => {
    setData((last: { x: number; y: number }) => ({
      x: window.scrollX,
      y: window.scrollY,
      lastX: last.x,
      lastY: last.y,
    }))

    handler(data)
  }, [data, handler])

  useEffect(() => {
    if (typeof window !== 'object') {
      return undefined
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return data
}

export default useScroll
