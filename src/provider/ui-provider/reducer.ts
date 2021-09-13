import { uiTypes } from './types'
import { initialState } from './state'

export const reducer = (state: IState = initialState, { type, payload }) => {
  switch (type) {
    case uiTypes.TOGGLE_DIALOG:
      return {
        ...state,
        dialog: { ...state.dialog, ...payload },
      }
    case uiTypes.TOGGLE_TOAST:
      return {
        ...state,
        toast: { ...state.toast, ...payload },
      }

    default:
      return state
  }
}
