import { render, waitFor, screen, act } from '@testing-library/react'
import { wrapper } from 'tests'
import { MoviesContainer } from '..'

describe(' Movies', () => {
  it('Should return proper data', async () => {
    render(<MoviesContainer />, { wrapper })
    const cardBody = screen.getAllByTestId('card-body')
    const loadingWrapper = screen.queryByTestId('movies-wrapper-loading')
    const moviesWrapper = screen.queryByTestId('movies-wrapper')
    expect(cardBody.length).toBe(10)
    await waitFor(() => expect(loadingWrapper).not.toBeInTheDocument())
    expect(moviesWrapper).toBeVisible()
  })
  // it('Should paginate properly', async () => {
  //   render(<MoviesContainer />, { wrapper })
  //   // const skeleton = screen.queryByText(/loading/i)
  //   // expect(skeleton).toBeVisible()
  //   // await waitFor(() => !skeleton)
  //   // expect(screen.getByText(/Beans - Fava Fresh/i)).toBeVisible()
  //   // const buttonForPage2 = screen.getByRole('button', { name: '2' })
  //   // act(() => buttonForPage2.click())
  //   // expect(screen.getByText(/Pasta - Spaghetti, Dry/i)).toBeVisible()
  // })
})
