import { useEffect, useLayoutEffect } from 'react'

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

export function useScrollUnlock() {
  useLayoutEffect(() => {
    document.body.style.overflow = ''
    document.body.style.paddingRight = ''
    // eslint-disable-next-line no-return-assign
    return () => {
      document.body.style.paddingRight = ''
      document.body.style.overflow = ''
    }
  }, [])
}
