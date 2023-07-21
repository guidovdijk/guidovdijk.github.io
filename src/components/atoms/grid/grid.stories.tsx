import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Col, Container, Grid, IGridProps } from './index'

const meta: Meta<IGridProps> = {
  component: Grid,
}

export default meta
type Story = StoryObj<IGridProps>

export const Default: Story = {
  render: () => (
    <Container>
      <Grid>
        <Col className="bg-white-200" span={3}>
          Col 1
        </Col>
        <Col className="bg-white-200">Col 2</Col>
        <Col className="bg-white-200" span={3}>
          Col 3
        </Col>
      </Grid>
    </Container>
  ),
}
