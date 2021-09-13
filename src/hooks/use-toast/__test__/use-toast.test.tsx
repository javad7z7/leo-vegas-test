import { UiProvider } from 'provider/ui-provider/index'
import { renderHook, act } from '@testing-library/react-hooks'
import { useToast } from '..'

const initialToast = { description: null, open: false, title: null, type: null }

const wrapper = ({ children }) => <UiProvider>{children}</UiProvider>

describe('Use toast', () => {
  it('Should return right state', () => {
    const { result } = renderHook(() => useToast(), { wrapper })
    expect(result.current.toast).toStrictEqual(initialToast)
  })
  it('Should call error function', () => {
    const { result } = renderHook(() => useToast(), { wrapper })
    act(() => result.current.error('Show error'))
    expect(result.current.toast).toStrictEqual({
      description: 'Show error',
      open: true,
      title: 'Error',
      type: 'error',
    })
  })
  it('Should call success function', () => {
    const { result } = renderHook(() => useToast(), { wrapper })
    act(() => result.current.success('Show success'))
    expect(result.current.toast).toStrictEqual({
      description: 'Show success',
      open: true,
      title: 'Success',
      type: 'success',
    })
  })
  it('Should call close function', () => {
    const { result } = renderHook(() => useToast(), { wrapper })
    act(() => result.current.close())
    expect(result.current.toast).toStrictEqual(initialToast)
  })
})
