import { useState, useLayoutEffect } from 'react'

export default function useWindowHeight() {
  const [height, setHeight] = useState(0)

  useLayoutEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return height
}
