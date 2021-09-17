import { useCallback, useContext, useMemo } from 'react'
import { useService } from 'hooks/use-service'
import { MovieContext } from 'provider/movie-provider'
import { movieTypes } from 'provider/movie-provider/types'

export const useMovies = () => {
  const { useGet } = useService()

  const {
    state: { favourites, watchLater, params },
    dispatch,
  } = useContext(MovieContext)

  const { data, isLoading, isFetching, isSuccess } = useGet({
    key: ['MOVIE_LIST', params],
    url: 'https://api.themoviedb.org/3/search/movie',
    onFocus: false,
    keepPreviousData: true,
  })

  return {
    isSuccess,
    favourites,
    watchLater,
    query: params.query,
    page: params.page,
    totalPage: data ? data.total_pages : 0,
    isLoading: useMemo(() => isLoading || isFetching, [isLoading, isFetching]),
    movies: useMemo(
      () =>
        favourites.isOpen
          ? favourites.list
          : watchLater.isOpen
          ? watchLater.list
          : data
          ? data.results
          : [],
      [data, favourites, watchLater]
    ),
    onSearch: useCallback(
      (e) =>
        dispatch({
          type: movieTypes.SET_QUERY,
          payload: e.target.value || 'a',
        }),
      [params.query]
    ),
    onPaginate: useCallback(
      (payload) =>
        dispatch({
          type: movieTypes.SET_PAGE,
          payload,
        }),
      [params.page]
    ),
    onFavourite: useCallback(
      (movie) => {
        dispatch({ type: movieTypes.SET_FAVOURITES, payload: movie })
      },
      [favourites.list]
    ),
    toggleFavourite: useCallback(
      (payload) => {
        dispatch({ type: movieTypes.TOGGLE_FAVOURITES, payload })
      },
      [favourites.isOpen]
    ),
    onWatchLater: useCallback(
      (movie) => {
        dispatch({ type: movieTypes.SET_WATCH_LATER, payload: movie })
      },
      [watchLater.list]
    ),
    toggleWatchLater: useCallback(
      (payload) => {
        dispatch({ type: movieTypes.TOGGLE_WATCH_LATER, payload })
      },
      [watchLater.isOpen]
    ),
  }
}
