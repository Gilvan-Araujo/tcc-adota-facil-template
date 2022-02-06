import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import Card from '.'

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    pet: {
      control: {
        type: 'object'
      }
    }
  },
  args: {
    pet: {
      id: 1,
      name: 'Jade',
      type: 'dog',
      age: 2,
      breed: 'Poodle',
      sex: 'F',
      phoneUrl:
        'https://wa.me/5583996481242?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Vi%20seu%20pet%20no%20Adota%20F%C3%A1cil%20e%20estou%20interessado%20em%20adot%C3%A1-lo.',
      description: 'Fake description',
      image:
        'https://i.ibb.co/FDtKFY7/Whats-App-Image-2022-01-29-at-11-13-38.jpg'
    }
  }
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Default = Template.bind({})
