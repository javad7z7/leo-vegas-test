import { useForm, useWatch } from 'react-hook-form'
import { useUi } from 'hooks/use-ui'
import { useService } from 'hooks/use-service'

export const useProductRefill = () => {
  const { usePut, client } = useService()
  const {
    toggleDialog,
    uiState: {
      dialog: { data },
    },
  } = useUi()

  const { control, handleSubmit } = useForm({
    defaultValues: {},
  }) as any

  const formState = useWatch({ control }) as any

  const {
    mutate,
    isLoading,
    isSuccess,
    data: putData,
  } = usePut({
    url: data ? `http://localhost:8080/api/product/${data.id}/refill` : '',
    params: { amount: parseInt(formState.amount) },
    onSuccess: () => {
      toggleDialog({ open: false, type: null, data: null })
      client.invalidateQueries('PRODUCTS_LIST')
    },
  })

  return {
    control,
    isLoading,
    putData,
    isSuccess,
    onSubmit: handleSubmit(() => {
      mutate({ payload: null })
    }),
  }
}
