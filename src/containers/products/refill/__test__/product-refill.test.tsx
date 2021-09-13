import { render, screen } from '@testing-library/react'
import { wrapper } from 'tests'
import { ProductRefill } from '..'

describe(' Product refill', () => {
  it('Should render properly', async () => {
    render(<ProductRefill />, { wrapper })
    const number = screen.getByPlaceholderText(/Enter number of products/i)
    const button = screen.queryByText(/Refill Product/i)
    expect(number).toBeVisible()
    expect(button).toBeVisible()
  })
})
