import { QueryClient, QueryClientProvider } from 'react-query'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { MovieProvider } from 'provider/movie-provider'

export const history = createMemoryHistory()

export const wrapper = ({ children }) => (
  <QueryClientProvider client={new QueryClient()}>
    <MovieProvider>
      <Router history={history}>{children}</Router>
    </MovieProvider>
  </QueryClientProvider>
)
