import { render, screen } from '@testing-library/react'
import { Error } from '..'

describe('Error', () => {
  it('Should render properly', () => {
    render(<Error error={{ message: 'Some error' }} />)
    expect(screen.getByText(/some error/i)).toBeVisible()
  })
})
