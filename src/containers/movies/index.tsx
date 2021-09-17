import { memo } from 'react'
import { MoviesLayout } from 'layouts/movies'
import { MoviesList } from './list'
import { MoviesPagination } from './pagination'
import { MoviesToolbar } from './toolbar'
import { useMovies } from './use-movies'

export const MoviesContainer = () => {
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
    watchLater,
    onWatchLater,
    toggleWatchLater,
  } = useMovies()

  return (
    <MoviesLayout>
      <MoviesToolbar
        query={query}
        onSearch={onSearch}
        toggleFavourite={toggleFavourite}
        favourites={favourites}
        toggleWatchLater={toggleWatchLater}
        watchLater={watchLater}
      />
      <MoviesList
        movies={movies}
        isLoading={isLoading}
        onFavourite={onFavourite}
        favourites={favourites}
        onWatchLater={onWatchLater}
        watchLater={watchLater}
      />
      {!favourites.isOpen && !watchLater.isOpen && (
        <MoviesPagination
          page={page}
          totalPage={totalPage}
          onPaginate={onPaginate}
        />
      )}
    </MoviesLayout>
  )
}
