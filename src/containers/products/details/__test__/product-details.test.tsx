import { render, screen, waitFor } from '@testing-library/react'
import { wrapper } from 'tests'
import { ProductDetails } from '..'

describe(' Product details', () => {
  it('Should render properly', async () => {
    render(<ProductDetails />, { wrapper })
    const loading = screen.queryByTestId(/loading-bounce/i)
    expect(loading).toBeVisible()
    await waitFor(() => expect(loading).not.toBeInTheDocument())
    expect(loading).not.toBeInTheDocument()
  })
})
