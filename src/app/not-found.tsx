'use client'

import * as React from 'react'
import { useEffect } from 'react'

import { PageErrorSection } from '@/components/organisms/page-error-section'

function NotFound() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return <PageErrorSection error="404" title="Page not found" />
}

export default NotFound
