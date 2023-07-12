import * as React from 'react'
import { Grid } from '@/components/atoms/grid'

export const BentoGrid: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Grid
    as="section"
    className="grid-rows-[repeat(9,120px)] grid-flow-dense gap-y-6"
  >
    {children}
  </Grid>
)