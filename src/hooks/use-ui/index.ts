import { useCallback, useContext } from 'react'
import { UiContext } from 'provider/ui-provider'
import { uiTypes } from 'provider/ui-provider/types'

export const useUi = () => {
  const { uiState, uiDispatch } = useContext(UiContext)

  return {
    uiState,
    toggleToast: useCallback(
      (payload) => uiDispatch({ type: uiTypes.TOGGLE_TOAST, payload }),
      [uiState.toast]
    ),
  }
}
