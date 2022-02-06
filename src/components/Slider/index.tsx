import {
  Slider as MUISlider,
  SliderProps as MUISliderProps
} from '@material-ui/core'
import React from 'react'

export interface SliderProps extends MUISliderProps {
  leftFunction: () => void
  leftCommitted: boolean
  middleFunction: () => void
  rightFunction: () => void
  rightCommitted: boolean
}

export default function Slider({
  leftFunction,
  leftCommitted,
  middleFunction,
  rightFunction,
  rightCommitted,
  ...props
}: SliderProps) {
  const marks = [
    {
      value: 0,
      label: ''
    },
    {
      value: 1,
      label: ''
    },
    {
      value: 2,
      label: ''
    }
  ]

  return (
    <MUISlider
      marks={marks}
      step={1}
      min={0}
      max={2}
      defaultValue={1}
      color="primary"
      {...props}
      onChangeCommitted={(_, newValue) => {
        if (newValue === 2) {
          if (rightCommitted) rightFunction()
        } else if (newValue === 0) {
          if (leftCommitted) leftFunction()
        }
      }}
      onChange={(_, newValue) => {
        if (newValue === 2) {
          if (!rightCommitted) rightFunction()
        } else if (newValue === 0) {
          if (!leftCommitted) leftFunction()
        } else {
          middleFunction()
        }
      }}
    />
  )
}
