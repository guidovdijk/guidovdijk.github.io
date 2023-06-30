import { Button } from './index'

export default {
  component: Button,
  title: 'Atoms/Button',
}

export const Default = {
  args: {
    children: 'Button Title',
  },
}

export const Secondary = {
  args: {
    variation: 'secondary',
    children: 'Button Title',
  },
}
