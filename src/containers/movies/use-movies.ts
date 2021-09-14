import { useCallback, useMemo, useState } from 'react'
import { useService } from 'hooks/use-service'

export const useMovies = () => {
  const { useGet } = useService()

  const [favourites, setFavourites] = useState({ list: [], isOpen: false })

  const [params, setParams] = useState({
    apiKey: '871447a7305166c3fa23cfc1d253c71e',
    page: 1,
    query: 'a',
  })

  const { data, isLoading, isFetching, isSuccess } = useGet({
    key: ['MOVIE_LIST', params],
    url: 'https://api.themoviedb.org/3/search/movie',
    onFocus: false,
    keepPreviousData: true,
  })

  return {
    isSuccess,
    favourites,
    query: params.query,
    page: params.page,
    totalPage: data ? data.total_pages : 0,
    isLoading: useMemo(() => isLoading || isFetching, [isLoading, isFetching]),
    movies: useMemo(
      () => (favourites.isOpen ? favourites.list : data ? data.results : []),
      [data, favourites]
    ),
    onSearch: useCallback(
      (e) => setParams((prev) => ({ ...prev, query: e.target.value || 'a' })),
      [params.query]
    ),
    onPaginate: useCallback(
      (page) => setParams((prev) => ({ ...prev, page })),
      [params.page]
    ),
    onFavourite: useCallback(
      (movie) => {
        const exist = favourites.list.some((item) => item.id === movie.id)
        if (exist)
          setFavourites((prev) => ({
            ...prev,
            list: prev.list.filter((item) => item.id !== movie.id),
          }))
        else setFavourites((prev) => ({ ...prev, list: [...prev.list, movie] }))
      },
      [favourites.list]
    ),
    toggleFavourite: useCallback(
      (payload) => setFavourites((prev) => ({ ...prev, isOpen: payload })),
      [favourites.isOpen]
    ),
  }
}
