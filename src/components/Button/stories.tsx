import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import Button from '.'

export default {
  title: 'Components/Button',
  component: Button.Solid
} as ComponentMeta<typeof Button.Solid>

export const Solid: ComponentStory<typeof Button.Solid> = () => (
  <Button.Solid>Botão sólido</Button.Solid>
)

export const Outline: ComponentStory<typeof Button.Outline> = () => (
  <Button.Outline>Botão outline</Button.Outline>
)
