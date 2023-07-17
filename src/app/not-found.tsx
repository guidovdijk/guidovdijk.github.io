'use client'

import * as React from 'react'
import { PageErrorSection } from '@/components/organisms/page-error-section'

function NotFound() {
  return (
    <PageErrorSection error="404" title="Page not found" />
  )
}

export default NotFound
