import { renderHook, act } from '@testing-library/react-hooks'
import { wrapper } from 'tests'
import { useProductForm } from '../use-product-form'

describe('Use Product form', () => {
  it('Should properly submit ', async () => {
    const { result, waitFor } = renderHook(() => useProductForm(), { wrapper })
    expect(result.current.patchData).toBe(undefined)
    await act(async () => await result.current.onSubmit())
    await waitFor(() => result.current.isSuccess)
    expect(result.current.patchData).toBe('Success patch')
  })
})
