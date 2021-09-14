import { Card } from 'components/card'
import { CardBody } from 'components/card/body'
import { CardImage } from 'components/card/image'
import { MoviesListWrapper } from './wrapper'

export const MoviesList = ({ movies, isLoading, favourites, onFavourite }) =>
  isLoading && movies.length === 0 ? (
    <MoviesListWrapper>
      {Array.from({ length: 20 }).map((_, index) => (
        <Card key={index}>
          <CardImage src={null} isLoading={true} />
          <CardBody title="" description="" isLoading={true} />
        </Card>
      ))}
    </MoviesListWrapper>
  ) : movies.length > 0 ? (
    <MoviesListWrapper>
      {movies.map((movie) => (
        <Card key={movie.id}>
          <CardImage
            src={movie.poster_path}
            isLoading={isLoading}
            action={onFavourite}
            active={favourites.list.some((item) => item.id === movie.id)}
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
  ) : (
    <span className="text-center text-gray-600 text-2xl pt-20">No Movie</span>
  )
