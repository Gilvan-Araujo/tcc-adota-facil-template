/* eslint-disable no-console */
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import Slider from '.'

export default {
  title: 'Components/Slider',
  component: Slider,
  args: {
    step: 1,
    leftCommitted: false,
    leftFunction: () => {
      console.log('left')
    },
    middleFunction: () => {
      console.log('middle')
    },
    rightCommitted: true,
    rightFunction: () => {
      console.log('right')
    }
  }
} as ComponentMeta<typeof Slider>

const Template: ComponentStory<typeof Slider> = (args) => <Slider {...args} />

export const Default = Template.bind({})
