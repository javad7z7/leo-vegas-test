import { render, screen, fireEvent } from '@testing-library/react'
import { useState } from 'react'
import { InputCore } from '..'

const Input = () => {
  const [value, setvalue] = useState('')
  return <InputCore value={value} onChange={(e) => setvalue(e.target.value)} />
}

describe('Input core', () => {
  it('Should render properly', () => {
    render(<InputCore />)
    const element = screen.getByTestId('input-core')
    expect(element).toBeInTheDocument()
  })
  it('Should render properly with placeholder', () => {
    render(<InputCore placeholder="password" />)
    const element = screen.getByPlaceholderText('password')
    expect(element).toBeVisible()
  })
  it('Should render properly with error', () => {
    render(<InputCore error="Error" />)
    const element = screen.getByTestId('input-core')
    expect(element.className).toContain('border-red-400')
  })
  it('Should render properly with proper size large', () => {
    render(<InputCore size="large" />)
    const element = screen.getByTestId('input-core')
    expect(element.className).toContain('h-14')
  })
  it('Should render properly with proper size small', () => {
    render(<InputCore size="small" />)
    const element = screen.getByTestId('input-core')
    expect(element.className).toContain('h-8')
  })
  it('Should change properly', () => {
    render(<Input />)
    const element = screen.getByTestId('input-core') as any
    fireEvent.change(element, { target: { value: 'changed' } })
    expect(element.value).toBe('changed')
  })
})
