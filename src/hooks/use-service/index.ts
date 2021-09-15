import { useMutation, useQuery, useQueryClient } from 'react-query'
import { Request } from './request'

export const useService = () => {
  const client = useQueryClient()

  return {
    client,
    useGet: (props: IUseService) => {
      const {
        url,
        key,
        onError,
        onSuccess,
        onSettled,
        enabled,
        initialData,
        keepPreviousData,
      } = props
      const asyncGet = async () => {
        const { data } = await Request.get(url, {
          params: { ...(key[1] && { ...key[1] }) },
        })
        return data
      }
      return useQuery(key, asyncGet, {
        ...(onSuccess && { onSuccess }),
        ...(onError && { onError }),
        ...(onSettled && { onSettled }),
        ...(enabled !== undefined && { enabled }),
        ...(initialData && { initialData }),
        ...(keepPreviousData && { keepPreviousData }),
        refetchOnWindowFocus: false,
        refetchOnMount: true,
      })
    },
  }
}
