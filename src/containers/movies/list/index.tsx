import { Card } from 'components/card'
import { CardBody } from 'components/card/body'
import { CardImage } from 'components/card/image'
import { FC } from 'react'
import { MoviesListWrapper } from './wrapper'

export const MoviesList: FC<IMoviesList> = ({
  movies,
  isLoading,
  favourites,
  onFavourite,
  watchLater,
  onWatchLater,
}) => {
  if (isLoading && movies.length === 0)
    return (
      <MoviesListWrapper id="movies-wrapper-loading">
        {Array.from({ length: 10 }).map((_, index) => (
          <Card key={index}>
            <CardImage src={null} isLoading={true} />
            <CardBody title="" description="" isLoading={true} />
          </Card>
        ))}
      </MoviesListWrapper>
    )
  else if (movies.length > 0)
    return (
      <MoviesListWrapper id="movies-wrapper">
        {movies.map((movie) => (
          <Card key={movie.id}>
            <CardImage
              src={movie.poster_path}
              isLoading={isLoading}
              onFavourite={onFavourite}
              onWatchLater={onWatchLater}
              isFavourite={favourites.list.some((item) => item.id === movie.id)}
              isWatchLater={watchLater.list.some(
                (item) => item.id === movie.id
              )}
              item={movie}
            />
            <CardBody
              title={movie.original_title}
              description={movie.overview}
              isLoading={isLoading}
            />
          </Card>
        ))}
      </MoviesListWrapper>
    )
  return (
    <span
      className="text-center text-gray-600 text-2xl pt-20"
      id="movies-wrapper-no-items"
    >
      No Movie
    </span>
  )
}
