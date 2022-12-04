import type { StoryObj, Meta } from '@storybook/react'
import {
  ToolTip,
  ToolTipProps,
  Button,
  Box,
} from '@diego-batista-ignite-ui/react'

export default {
  title: 'Surfaces/ToolTip',
  component: ToolTip,
  args: {
    children: <Button>Hover Me</Button>,
    content: 'This is a Tootip',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '$20',
            background: '$gray500',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<ToolTipProps>

export const Primary: StoryObj<ToolTipProps> = {}
