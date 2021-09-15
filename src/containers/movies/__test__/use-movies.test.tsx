import { renderHook, act } from '@testing-library/react-hooks'
import { MockData, wrapper } from 'tests'
import { useMovies } from '../use-movies'

describe('Use movies', () => {
  it('Should return proper data', async () => {
    const { result, waitFor } = renderHook(() => useMovies(), { wrapper })
    expect(result.current.isLoading).toBeTruthy()
    await waitFor(() => result.current.isSuccess)
    expect(result.current.isLoading).toBeFalsy()
    expect(result.current.totalPage).toBe(MockData.total_pages)
    expect(result.current.movies).toBe(MockData.results)
  })
  it('Should search properly', async () => {
    const { result, waitFor } = renderHook(() => useMovies(), { wrapper })
    expect(result.current.isLoading).toBeTruthy()
    await waitFor(() => result.current.isSuccess)
    expect(result.current.isLoading).toBeFalsy()
    expect(result.current.movies).toBe(MockData.results)
    act(() => result.current.onSearch({ target: { value: 'spider man' } }))
    await waitFor(() => !result.current.isLoading)
    expect(result.current.query).toBe('spider man')
  })
  it('Should paginate properly', async () => {
    const { result, waitFor } = renderHook(() => useMovies(), { wrapper })
    expect(result.current.isLoading).toBeTruthy()
    await waitFor(() => result.current.isSuccess)
    expect(result.current.isLoading).toBeFalsy()
    expect(result.current.movies).toBe(MockData.results)
    act(() => result.current.onPaginate(3))
    await waitFor(() => !result.current.isLoading)
    expect(result.current.page).toBe(3)
  })
  it('Should favourite properly', async () => {
    const { result, waitFor } = renderHook(() => useMovies(), { wrapper })
    expect(result.current.isLoading).toBeTruthy()
    await waitFor(() => result.current.isSuccess)
    expect(result.current.isLoading).toBeFalsy()
    expect(result.current.movies).toBe(MockData.results)
    act(() => result.current.onFavourite({ name: 'any movie' }))
    await waitFor(() => !result.current.isLoading)
    expect(result.current.favourites.list).toStrictEqual([
      { name: 'any movie' },
    ])
  })
  it('Should toggle favourite properly', async () => {
    const { result, waitFor } = renderHook(() => useMovies(), { wrapper })
    expect(result.current.isLoading).toBeTruthy()
    await waitFor(() => result.current.isSuccess)
    expect(result.current.isLoading).toBeFalsy()
    expect(result.current.movies).toBe(MockData.results)
    act(() => result.current.toggleFavourite(true))
    expect(result.current.favourites.isOpen).toBeTruthy()
  })
})
