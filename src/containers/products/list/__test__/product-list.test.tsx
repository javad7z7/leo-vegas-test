import { render, waitFor, screen, act } from '@testing-library/react'
import { wrapper } from 'tests'
import { ProductsList } from '..'

describe(' Product list', () => {
  it('Should return proper data', async () => {
    render(<ProductsList />, { wrapper })
    const skeleton = screen.queryByText(/loading/i)
    expect(skeleton).toBeVisible()
    await waitFor(() => !skeleton)
    expect(screen.getByText(/Beans - Fava Fresh/i)).toBeVisible()
  })
  it('Should paginate properly', async () => {
    render(<ProductsList />, { wrapper })
    const skeleton = screen.queryByText(/loading/i)
    expect(skeleton).toBeVisible()
    await waitFor(() => !skeleton)
    expect(screen.getByText(/Beans - Fava Fresh/i)).toBeVisible()
    const buttonForPage2 = screen.getByRole('button', { name: '2' })
    act(() => buttonForPage2.click())
    expect(screen.getByText(/Pasta - Spaghetti, Dry/i)).toBeVisible()
  })
})
