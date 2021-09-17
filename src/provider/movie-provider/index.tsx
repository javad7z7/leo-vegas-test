import { createContext, useEffect, useReducer } from 'react'
import { reducer } from './reducer'
import { initialState } from './state'
import { movieTypes } from './types'

export const MovieContext =
  createContext<{ state: any; dispatch: any }>(undefined)

export const MovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch({
      type: movieTypes.ON_LOAD,
    })
  }, [])

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(state.favourites.list))
  }, [state.favourites.list])

  useEffect(() => {
    localStorage.setItem('watchLater', JSON.stringify(state.watchLater.list))
  }, [state.watchLater.list])

  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  )
}
