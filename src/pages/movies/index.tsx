import { MoviesContainer } from 'containers/movies'
import { MovieProvider } from 'provider/movie-provider'

const Products = (): JSX.Element => {
  return (
    <MovieProvider>
      <MoviesContainer />
    </MovieProvider>
  )
}

export default Products
