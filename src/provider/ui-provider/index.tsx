import { createContext, useReducer, Dispatch } from 'react'
import { reducer } from './reducer'
import { initialState } from './state'

export const UiContext =
  createContext<{ uiState: IState; uiDispatch: Dispatch<any> }>(undefined)

export const UiProvider = ({ children }) => {
  const [uiState, uiDispatch] = useReducer(reducer, initialState)

  return (
    <UiContext.Provider value={{ uiState, uiDispatch }}>
      {children}
    </UiContext.Provider>
  )
}
