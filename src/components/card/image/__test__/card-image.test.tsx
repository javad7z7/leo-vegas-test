import { render, screen } from '@testing-library/react'
import { CardImage } from '..'

describe('CardImage', () => {
  it('Should render properly when is loading', () => {
    render(<CardImage isLoading />)
    const wrapper = screen.getByTestId('card-image')
    expect(wrapper).toHaveClass('animate-pulse')
  })
  it('Should render action when is not loading', () => {
    render(<CardImage title="some title" description="some desc" />)
    const wrapper = screen.getByTestId('card-image')
    const action = screen.getByTestId('card-image-action')
    expect(wrapper).not.toHaveClass('animate-pulse')
    expect(action).toBeVisible()
  })
})
