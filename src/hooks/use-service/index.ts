import { useMutation, useQuery, useQueryClient } from 'react-query'
import axios from 'axios'

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
        const { data } = await axios.get(url)
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

    usePut: (props: IUseService) => {
      const { url, onError, onSuccess, onMutate, onSettled, params } = props
      const asyncPut = async ({ payload }) =>
        await axios.put(url, payload, { params })
      return useMutation(asyncPut, {
        ...(onSuccess && { onSuccess }),
        ...(onError && { onError }),
        ...(onMutate && { onMutate }),
        ...(onSettled && { onSettled }),
      })
    },

    usePatch: (props: IUseService) => {
      const { url, onError, onSuccess, onMutate, onSettled } = props
      const asyncPatch = async ({ payload }) => await axios.patch(url, payload)
      return useMutation(asyncPatch, {
        ...(onSuccess && { onSuccess }),
        ...(onError && { onError }),
        ...(onMutate && { onMutate }),
        ...(onSettled && { onSettled }),
      })
    },
  }
}
