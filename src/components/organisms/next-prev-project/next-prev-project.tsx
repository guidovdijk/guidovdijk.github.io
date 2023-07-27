import * as React from 'react'

import { Col, Container, Grid } from '@/components/atoms/grid'
import { Card, ICardProps } from '@/components/molecules/card'

export interface INextPrevProjectProps {
  next: ICardProps
  prev: ICardProps
}

// TODO: Reduces padding on mobile devices
const NextPrevProject: React.FC<INextPrevProjectProps> = ({ next, prev }) => (
  <>
    <div className="mx-auto my-32 px-4 lg:px-12">
      <div className="h-[1px] w-full bg-black-300" />
    </div>
    <Container className="mb-28 px-4 lg:px-12">
      <Grid gap="gap-y-20">
        <Col span={12}>
          <section className="flex flex-col gap-y-8">
            <div className="flex flex-col gap-y-2">
              <p className="text-subtitle uppercase text-white-500">
                Next project
              </p>
              <Card {...next} className={`${next.className} border-b-0`} />
            </div>
            <div className="flex flex-col gap-y-2">
              <p className="text-subtitle uppercase text-white-500">
                Previous project
              </p>
              <Card {...prev} className={`${prev.className} border-b-0`} />
            </div>
          </section>
        </Col>
      </Grid>
    </Container>
  </>
)

export default React.memo(NextPrevProject)
