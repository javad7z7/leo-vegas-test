import { renderHook, act } from '@testing-library/react-hooks'
import { wrapper } from 'tests'
import { useProducReserve } from '../use-product-reserve'

describe('Use Product refill', () => {
  it('Should properly submit ', async () => {
    const { result, waitFor } = renderHook(() => useProducReserve(), {
      wrapper,
    })
    expect(result.current.putData).toBe(undefined)
    await act(async () => await result.current.onSubmit())
    await waitFor(() => result.current.isSuccess)
    expect(result.current.putData).toBe('Success put')
  })
})
