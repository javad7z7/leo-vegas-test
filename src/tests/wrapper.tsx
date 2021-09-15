import { QueryClient, QueryClientProvider } from 'react-query'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

export const history = createMemoryHistory()

export const wrapper = ({ children }) => (
  <QueryClientProvider client={new QueryClient()}>
    <Router history={history}>{children}</Router>
  </QueryClientProvider>
)
