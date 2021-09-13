import { Button } from '..'
import { render, screen } from '@testing-library/react'

describe('Button component', () => {
  it('Should render children properly', () => {
    render(<Button>Click me</Button>)
    const child = screen.getByText(/Click me/i)
    expect(child).toBeVisible()
  })
  it('Should be disabled if disabled props is true', () => {
    render(<Button disabled>Click me</Button>)
    const child = screen.getByRole('button')
    expect(child.className).toContain('opacity-50')
  })
  it('Should be loading if loading props is true', () => {
    render(<Button loading>Click me</Button>)
    const child = screen.getByRole('button')
    expect(child.className).toContain('cursor-wait')
  })
  it('Should not have shadow if children is icon', () => {
    render(<Button icon>Click me</Button>)
    const child = screen.getByRole('button')
    expect(child.className).not.toContain('shadow')
  })
  it('Should not have transform if is disabled', () => {
    render(<Button disabled>Click me</Button>)
    const child = screen.getByRole('button')
    expect(child.className).not.toContain(
      'transform hover:-translate-y-1 hover:scale-105'
    )
  })
  it('Should contain classname props', () => {
    render(<Button className="bg-indigo-500">Click me</Button>)
    const child = screen.getByRole('button')
    expect(child.className).toContain('bg-indigo-500')
  })
  it('Should render loading bounce when loading props is true', () => {
    render(<Button loading>Click me</Button>)
    const child = screen.getByTestId('loading-bounce')
    expect(child).toBeInTheDocument()
  })
  it('Should not render children when its loading', () => {
    render(<Button loading>Click me</Button>)
    const child = screen.queryByText(/Click me/i)
    expect(child).not.toBeInTheDocument()
  })
})
