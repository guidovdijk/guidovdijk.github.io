import { useEffect } from 'react'

export function useScrollLock(isLocked: boolean) {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow

    if (isLocked) {
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = '16px'
    } else {
      document.body.style.overflow = originalStyle
      document.body.style.paddingRight = ''
    }
    return () => {
      document.body.style.overflow = originalStyle
      document.body.style.paddingRight = ''
    }
  }, [isLocked])
}
