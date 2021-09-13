import { renderHook } from '@testing-library/react-hooks'
import { MockData, wrapper } from 'tests'
import { useProductsList } from '../use-products-list'

describe('Use Product list', () => {
  it('Should return proper data', async () => {
    const { result, waitFor } = renderHook(() => useProductsList(), { wrapper })
    expect(result.current.isLoading).toBeTruthy()
    await waitFor(() => result.current.isSuccess)
    expect(result.current.isLoading).toBeFalsy()
    expect(result.current.data).toBe(MockData)
  })
})
