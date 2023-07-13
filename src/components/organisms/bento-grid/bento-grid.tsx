import * as React from 'react'
import { Grid } from '@/components/atoms/grid'

export const BentoGrid: React.FC<{ className: string, children: React.ReactNode }> = ({
  className,
  children,
}) => (
  <Grid
    as="section"
    className={`grid-rows-[repeat(9,120px)] grid-flow-dense gap-y-6 ${className}`}
  >
    {children}
  </Grid>
)
