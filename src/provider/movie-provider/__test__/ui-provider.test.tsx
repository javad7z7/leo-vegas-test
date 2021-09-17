import { UiProvider, UiContext } from '..'
import { act, renderHook } from '@testing-library/react-hooks'
import { useContext } from 'react'
import { initialState } from '../state'
import { uiTypes } from '../types'

const wrapper = ({ children }) => <UiProvider>{children}</UiProvider>

describe('UI Provider', () => {
  it('Should return currect state', () => {
    const { result } = renderHook(() => useContext(UiContext), { wrapper })
    expect(result.current.uiState).toStrictEqual(initialState)
  })
  it('Should toggle drawer', () => {
    const { result } = renderHook(() => useContext(UiContext), { wrapper })
    act(() => result.current.uiDispatch({ type: uiTypes.TOGGLE_DRAWER }))
    expect(result.current.uiState.drawer.open).toBeTruthy()
  })
  it('Should toggle toast', () => {
    const { result } = renderHook(() => useContext(UiContext), { wrapper })
    act(() =>
      result.current.uiDispatch({
        type: uiTypes.TOGGLE_TOAST,
        payload: { open: true },
      })
    )
    expect(result.current.uiState.toast.open).toBeTruthy()
  })
  it('Should toggle dialog', () => {
    const { result } = renderHook(() => useContext(UiContext), { wrapper })
    act(() =>
      result.current.uiDispatch({
        type: uiTypes.TOGGLE_DIALOG,
        payload: { open: true },
      })
    )
    expect(result.current.uiState.dialog.open).toBeTruthy()
  })
  it('Should toggle dark', () => {
    const { result } = renderHook(() => useContext(UiContext), { wrapper })
    act(() =>
      result.current.uiDispatch({
        type: uiTypes.TOGGLE_DARK,
        payload: false,
      })
    )
    expect(result.current.uiState.theme).toBe('light')
  })
})
