import { render, screen } from '@testing-library/react'
import { MoviesPagination } from '..'

describe('Movies pagination', () => {
  it('Should render proper amount of buttons', () => {
    render(<MoviesPagination page={2} totalPage={6} onPaginate={() => {}} />)
    const buttons = screen.getAllByRole('button')
    const activeButton = screen.getByTestId(2)
    expect(buttons.length).toBe(6)
    expect(activeButton).toHaveClass('bg-secondary')
  })
})
