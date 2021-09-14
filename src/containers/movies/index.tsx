import { memo } from 'react'
import { MoviesLayout } from 'layouts/movies'
import { MoviesList } from './list'
import { MoviesPagination } from './pagination'
import { MoviesToolbar } from './toolbar'
import { useMovies } from './use-movies'

export const MoviesContainer = memo(() => {
  const {
    movies,
    page,
    query,
    totalPage,
    onSearch,
    onPaginate,
    isLoading,
    favourites,
    onFavourite,
    toggleFavourite,
  } = useMovies()

  return (
    <MoviesLayout>
      <MoviesToolbar
        query={query}
        onSearch={onSearch}
        toggleFavourite={toggleFavourite}
        favourites={favourites}
      />
      <MoviesList
        movies={movies}
        isLoading={isLoading}
        onFavourite={onFavourite}
        favourites={favourites}
      />
      {!favourites.isOpen && (
        <MoviesPagination
          page={page}
          totalPage={totalPage}
          onPaginate={onPaginate}
        />
      )}
    </MoviesLayout>
  )
})
