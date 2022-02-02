import { render } from '@testing-library/react'
import React from 'react'

import Button from '../../components/Button'

describe('Button', () => {
  it('should render a solid button', () => {
    const { getByText } = render(<Button.Solid>Botão sólido</Button.Solid>)

    expect(getByText('Botão sólido')).toBeInTheDocument()
  })

  it('should render an outline button', () => {
    const { getByText } = render(<Button.Outline>Botão outline</Button.Outline>)

    expect(getByText('Botão outline')).toBeInTheDocument()
  })
})
