import { render, screen } from '@testing-library/react'
import React from 'react'

import Home from '../pages/index'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Home page/i
    })

    expect(heading).toBeInTheDocument()
  })
})