import { render, screen } from '@testing-library/react'
import { wrapper } from 'tests'
import { ProductReserve } from '..'

describe(' Product reserve', () => {
  it('Should render properly', async () => {
    render(<ProductReserve />, { wrapper })
    const number = screen.getByPlaceholderText(/Enter number of products/i)
    const button = screen.queryByText(/Reserve Product/i)
    expect(number).toBeVisible()
    expect(button).toBeVisible()
  })
})
