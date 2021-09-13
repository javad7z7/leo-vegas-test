import { renderHook, act } from '@testing-library/react-hooks'
import { wrapper } from 'tests'
import { useProductRefill } from '../use-product-refill'

describe('Use Product refill', () => {
  it('Should properly submit ', async () => {
    const { result, waitFor } = renderHook(() => useProductRefill(), {
      wrapper,
    })
    expect(result.current.putData).toBe(undefined)
    await act(async () => await result.current.onSubmit())
    await waitFor(() => result.current.isSuccess)
    expect(result.current.putData).toBe('Success put')
  })
})
