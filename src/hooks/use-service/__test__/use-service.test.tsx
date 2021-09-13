import { act, renderHook } from '@testing-library/react-hooks'
import { QueryClient, QueryClientProvider } from 'react-query'
import { MockData } from 'tests'

import { useService } from '..'

const wrapper = ({ children }) => (
  <QueryClientProvider
    client={
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
          },
        },
      })
    }
  >
    {children}
  </QueryClientProvider>
)

const { result: service } = renderHook(() => useService(), {
  wrapper,
})

describe('Use service', () => {
  it('Should return proper data on get', async () => {
    const { result, waitFor } = renderHook(
      () =>
        service.current.useGet({
          key: ['test'],
          url: 'whatever',
        }),
      {
        wrapper,
      }
    )
    await waitFor(() => result.current.isSuccess)
    expect(result.current.data).toBe(MockData)
  })
  it('Should return proper data on post', async () => {
    const { result, waitFor } = renderHook(
      () =>
        service.current.usePatch({
          url: 'whatever',
        }),
      {
        wrapper,
      }
    )
    act(() => result.current.mutate({ payload: '' }))
    await waitFor(() => result.current.isSuccess)
    expect(result.current.data).toBe('Success patch')
  })
  it('Should return proper data on put', async () => {
    const { result, waitFor } = renderHook(
      () =>
        service.current.usePut({
          url: 'whatever',
        }),
      {
        wrapper,
      }
    )
    act(() => result.current.mutate({ payload: '' }))
    await waitFor(() => result.current.isSuccess)
    expect(result.current.data).toBe('Success put')
  })
})
