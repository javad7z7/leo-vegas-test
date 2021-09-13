import { renderHook, act } from '@testing-library/react-hooks'
import { wrapper } from 'tests'
import { useProductBuy } from '../use-product-buy'

describe('Use Product buy', () => {
  it('Should properly submit ', async () => {
    const { result, waitFor } = renderHook(() => useProductBuy(), { wrapper })
    expect(result.current.putData).toBe(undefined)
    await act(async () => await result.current.onSubmit())
    await waitFor(() => result.current.isSuccess)
    expect(result.current.putData).toBe('Success put')
  })
})
