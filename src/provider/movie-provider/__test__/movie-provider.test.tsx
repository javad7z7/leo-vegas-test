import { MovieProvider, MovieContext } from '..'
import { act, renderHook } from '@testing-library/react-hooks'
import { useContext } from 'react'
import { initialState } from '../state'
import { movieTypes } from '../types'

const wrapper = ({ children }) => <MovieProvider>{children}</MovieProvider>

describe('Movie Provider', () => {
  it('Should return currect state', () => {
    const { result } = renderHook(() => useContext(MovieContext), { wrapper })
    expect(result.current.state).toStrictEqual(initialState)
  })
  it('Should toggle favourites', () => {
    const { result } = renderHook(() => useContext(MovieContext), { wrapper })
    act(() =>
      result.current.dispatch({
        type: movieTypes.TOGGLE_FAVOURITES,
        payload: true,
      })
    )
    expect(result.current.state.favourites.isOpen).toBeTruthy()
  })
  it('Should toggle watch later', () => {
    const { result } = renderHook(() => useContext(MovieContext), { wrapper })
    act(() =>
      result.current.dispatch({
        type: movieTypes.TOGGLE_WATCH_LATER,
        payload: true,
      })
    )
    expect(result.current.state.watchLater.isOpen).toBeTruthy()
  })
  it('Should set favourites', () => {
    const { result } = renderHook(() => useContext(MovieContext), { wrapper })
    act(() =>
      result.current.dispatch({
        type: movieTypes.SET_FAVOURITES,
        payload: { id: '1', name: 'Test movie' },
      })
    )
    expect(result.current.state.favourites.list[0]).toStrictEqual({
      id: '1',
      name: 'Test movie',
    })
  })
  it('Should set watchlater', () => {
    const { result } = renderHook(() => useContext(MovieContext), { wrapper })
    act(() =>
      result.current.dispatch({
        type: movieTypes.SET_WATCH_LATER,
        payload: { id: '1', name: 'Test movie' },
      })
    )
    expect(result.current.state.watchLater.list[0]).toStrictEqual({
      id: '1',
      name: 'Test movie',
    })
  })
  it('Should set page', () => {
    const { result } = renderHook(() => useContext(MovieContext), { wrapper })
    act(() =>
      result.current.dispatch({
        type: movieTypes.SET_PAGE,
        payload: 4,
      })
    )
    expect(result.current.state.params.page).toBe(4)
  })
  it('Should set query', () => {
    const { result } = renderHook(() => useContext(MovieContext), { wrapper })
    act(() =>
      result.current.dispatch({
        type: movieTypes.SET_QUERY,
        payload: 'spider',
      })
    )
    expect(result.current.state.params.page).toBe(1)
    expect(result.current.state.params.query).toBe('spider')
  })
})
