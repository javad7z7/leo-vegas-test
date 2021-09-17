import { movieTypes } from './types'
import { initialState } from './state'

type TAction = {
  type: string
  payload?: any
}

export const reducer = (state = initialState, action: TAction) => {
  switch (action.type) {
    case movieTypes.ON_LOAD:
      return {
        ...state,
        favourites: {
          ...state.favourites,
          list: JSON.parse(localStorage.getItem('favourites')) || [],
        },
        watchLater: {
          ...state.watchLater,
          list: JSON.parse(localStorage.getItem('watchLater')) || [],
        },
      }
    case movieTypes.TOGGLE_FAVOURITES:
      return {
        ...state,
        favourites: { ...state.favourites, isOpen: action.payload },
        watchLater: { ...state.watchLater, isOpen: false },
      }
    case movieTypes.SET_FAVOURITES:
      const isFavourite = state.favourites.list.some(
        (item) => item.id === action.payload.id
      )
      return {
        ...state,
        favourites: {
          ...state.favourites,
          list: isFavourite
            ? state.favourites.list.filter(
                (item) => item.id !== action.payload.id
              )
            : [...state.favourites.list, action.payload],
        },
      }
    case movieTypes.TOGGLE_WATCH_LATER:
      return {
        ...state,
        watchLater: { ...state.watchLater, isOpen: action.payload },
        favourites: { ...state.favourites, isOpen: false },
      }
    case movieTypes.SET_WATCH_LATER:
      const isWatchLater = state.watchLater.list.some(
        (item) => item.id === action.payload.id
      )
      return {
        ...state,
        watchLater: {
          ...state.watchLater,
          list: isWatchLater
            ? state.watchLater.list.filter(
                (item) => item.id !== action.payload.id
              )
            : [...state.watchLater.list, action.payload],
        },
      }
    case movieTypes.SET_QUERY:
      return {
        ...state,
        params: { ...state.params, query: action.payload, page: 1 },
      }
    case movieTypes.SET_PAGE:
      return {
        ...state,
        params: { ...state.params, page: action.payload },
      }
    default:
      return state
  }
}
