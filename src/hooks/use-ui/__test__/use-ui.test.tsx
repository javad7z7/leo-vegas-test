import { renderHook, act } from '@testing-library/react-hooks'
import { wrapper } from 'tests'
import { useUi } from '..'

describe('Use ui hook', () => {
  it('Should render hook properly', () => {
    const { result } = renderHook(() => useUi(), { wrapper })
    act(() => result.current.toggleDialog({ open: true }))
    expect(result.current.uiState.dialog.open).toBeTruthy()
    act(() => result.current.toggleToast({ open: true }))
    expect(result.current.uiState.toast.open).toBeTruthy()
  })
})
