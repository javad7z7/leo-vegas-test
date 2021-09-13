import { renderHook, act } from '@testing-library/react-hooks'
import { useToggle } from '..'

test('should toggle properly', () => {
  const { result } = renderHook(() => useToggle())
  expect(result.current.open).toBeFalsy()
  act(() => {
    result.current.toggle()
  })
  expect(result.current.open).toBeTruthy()
})
