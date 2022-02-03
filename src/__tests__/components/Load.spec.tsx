import { render } from '@testing-library/react'
import React from 'react'

import Load from '../../components/Load'

describe('Load', () => {
  it('should render when loading is true', () => {
    const { container } = render(<Load loading />)

    expect(container.firstChild).toBeVisible()
  })

  it('should not render when loading is false', () => {
    const { container } = render(<Load loading={false} />)

    expect(container.firstChild).not.toBeVisible()
  })
})
