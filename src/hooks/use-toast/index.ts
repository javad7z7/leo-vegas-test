import { useUi } from 'hooks/use-ui'
import { useCallback, useMemo } from 'react'

export const useToast = () => {
  const { toggleToast, uiState } = useUi()

  return {
    toast: useMemo(() => uiState.toast, [uiState.toast]),
    error: useCallback(
      (description) =>
        toggleToast({
          open: true,
          type: 'error',
          title: 'Error',
          description,
        }),
      [uiState.toast]
    ),
    success: useCallback(
      (description) =>
        toggleToast({
          open: true,
          type: 'success',
          title: 'Success',
          description,
        }),
      [uiState.toast]
    ),
    close: useCallback(
      () =>
        toggleToast({
          open: false,
          type: null,
          title: null,
          description: null,
        }),
      [uiState.toast]
    ),
  }
}
