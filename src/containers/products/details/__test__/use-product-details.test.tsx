import { renderHook } from '@testing-library/react-hooks'
import { MockData, wrapper } from 'tests'
import { useProductDetails } from '../use-product-details'

describe('Use Product details', () => {
  it('Should return proper data', async () => {
    const { result, waitFor } = renderHook(() => useProductDetails(), {
      wrapper,
    })
    expect(result.current.isLoading).toBeTruthy()
    await waitFor(() => result.current.isSuccess)
    expect(result.current.isLoading).toBeFalsy()
    expect(result.current.data).toBe(MockData)
  })
})
