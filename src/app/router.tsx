import { lazy, memo, Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Skeleton } from 'components/skeleton'
import { MainLayout } from 'layouts/main'

export const Router = memo((): JSX.Element => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Suspense fallback={<Skeleton />}>
          <Switch>
            <Route
              exact
              path="/"
              component={lazy(() => import('pages/products'))}
            />
          </Switch>
        </Suspense>
      </MainLayout>
    </BrowserRouter>
  )
})
