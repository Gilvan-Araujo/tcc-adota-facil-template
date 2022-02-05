import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import Load from '@components/Load'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Load',
  component: Load,
  argTypes: {
    loading: {
      control: {
        type: 'boolean'
      }
    }
  },
  args: {
    loading: true
  }
} as ComponentMeta<typeof Load>

const Template: ComponentStory<typeof Load> = (args) => <Load {...args} />

export const Default = Template.bind({
  loading: true
})
