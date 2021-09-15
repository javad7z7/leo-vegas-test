import { render, screen } from '@testing-library/react'
import { CardBody } from '..'

describe('CardBody', () => {
  it('Should render properly when is loading', () => {
    render(<CardBody isLoading />)
    const wrapper = screen.getByTestId('card-body')
    expect(wrapper).toHaveClass('animate-pulse')
  })
  it('Should render header and text when is not loading', () => {
    render(<CardBody title="some title" description="some desc" />)
    const wrapper = screen.getByTestId('card-body')
    const text = screen.getByTestId('card-text')
    const header = screen.getByTestId('card-header')
    expect(wrapper).not.toHaveClass('animate-pulse')
    expect(text).toBeVisible()
    expect(header).toBeVisible()
  })
})
