import { act, renderHook } from '@testing-library/react-hooks'
import { createContext, useContext, useReducer } from 'react'
import { reducer } from '../reducer'
import { initialState } from '../state'
import { uiTypes } from '../types'

const MockContext = createContext<{ state: any; dispatch: any }>(undefined)

const wrapper = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <MockContext.Provider value={{ state, dispatch }}>
      {children}
    </MockContext.Provider>
  )
}

describe('UI Reducer', () => {
  it('Should return currect state', () => {
    const { result } = renderHook(() => useContext(MockContext), { wrapper })
    expect(result.current.state).toStrictEqual(initialState)
  })
  it('Should toggle drawer', () => {
    const { result } = renderHook(() => useContext(MockContext), { wrapper })
    act(() => result.current.dispatch({ type: uiTypes.TOGGLE_DRAWER }))
    expect(result.current.state.drawer.open).toBeTruthy()
  })
  it('Should toggle toast', () => {
    const { result } = renderHook(() => useContext(MockContext), { wrapper })
    act(() =>
      result.current.dispatch({
        type: uiTypes.TOGGLE_TOAST,
        payload: { open: true },
      })
    )
    expect(result.current.state.toast.open).toBeTruthy()
  })
  it('Should toggle dialog', () => {
    const { result } = renderHook(() => useContext(MockContext), { wrapper })
    act(() =>
      result.current.dispatch({
        type: uiTypes.TOGGLE_DIALOG,
        payload: { open: true },
      })
    )
    expect(result.current.state.dialog.open).toBeTruthy()
  })
  it('Should toggle dark', () => {
    const { result } = renderHook(() => useContext(MockContext), { wrapper })
    act(() =>
      result.current.dispatch({
        type: uiTypes.TOGGLE_DARK,
        payload: false,
      })
    )
    expect(result.current.state.theme).toBe('light')
  })
})
