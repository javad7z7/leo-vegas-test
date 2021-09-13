import { useCallback, useContext } from 'react'
import { UiContext } from 'provider/ui-provider'
import { uiTypes } from 'provider/ui-provider/types'

export const useUi = () => {
  const { uiState, uiDispatch } = useContext(UiContext)

  const toggleDialog = useCallback(
    (payload) => uiDispatch({ type: uiTypes.TOGGLE_DIALOG, payload }),
    [uiState.dialog]
  )

  const toggleToast = useCallback(
    (payload) => uiDispatch({ type: uiTypes.TOGGLE_TOAST, payload }),
    [uiState.toast]
  )

  return {
    uiState,
    toggleDialog,
    toggleToast,
  }
}
