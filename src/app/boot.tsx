import { QueryClient, QueryClientProvider } from 'react-query'
import { Router } from './router'

const Boot = (): JSX.Element => (
  <QueryClientProvider client={new QueryClient()}>
    <Router />
  </QueryClientProvider>
)

export { Boot }
