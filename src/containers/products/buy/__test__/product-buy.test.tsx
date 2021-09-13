import { render, screen } from '@testing-library/react'
import { wrapper } from 'tests'
import { ProductBuy } from '..'

describe(' Product buy', () => {
  it('Should render properly', async () => {
    render(<ProductBuy />, { wrapper })
    const number = screen.getByPlaceholderText(/Enter number of products/i)
    const button = screen.queryByText(/Buy Product/i)
    expect(number).toBeVisible()
    expect(button).toBeVisible()
  })
})
