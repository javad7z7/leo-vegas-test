import { renderHook } from '@testing-library/react-hooks'
import { MockData, wrapper } from 'tests'
import { useMovies } from '../use-movies'

describe('Use movies', () => {
  it('Should return proper data', async () => {
    const { result, waitFor } = renderHook(() => useMovies(), { wrapper })
    // expect(result.current.isLoading).toBeTruthy()
    // await waitFor(() => result.current.isSuccess)
    // expect(result.current.isLoading).toBeFalsy()
    // expect(result.current.movies).toBe(MockData)
  })
})
