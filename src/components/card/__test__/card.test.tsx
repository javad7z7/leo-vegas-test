import { render, screen } from '@testing-library/react'
import { Card } from '..'

describe('Card', () => {
  it('Should render properly', () => {
    render(<Card>Some children</Card>)
    const wrapper = screen.getByTestId('card')
    const children = screen.getByText(/some children/i)
    expect(children).toBeVisible()
    expect(wrapper).toHaveClass(
      'w-full  max-h-[350px] flex flex-col items-center'
    )
  })
})
