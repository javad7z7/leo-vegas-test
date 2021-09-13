import { useForm, useWatch } from 'react-hook-form'
import { useUi } from 'hooks/use-ui'
import { useService } from 'hooks/use-service'

export const useProductBuy = () => {
  const { usePut, client } = useService()

  const {
    toggleDialog,
    uiState: {
      dialog: { data },
    },
  } = useUi()

  const { control, handleSubmit, setError } = useForm({
    defaultValues: {},
  }) as any

  const formState = useWatch({ control }) as any

  const {
    mutate,
    isLoading,
    isSuccess,
    data: putData,
  } = usePut({
    url: data ? `http://localhost:8080/api/product/${data.id}/buy` : '',
    params: { amount: parseInt(formState.amount) },
    onSuccess: () => {
      toggleDialog({ open: false, type: null, data: null })
      client.invalidateQueries('PRODUCTS_LIST')
    },
  })

  return {
    control,
    isLoading,
    isSuccess,
    putData,
    onSubmit: handleSubmit((state: any) => {
      if (data.stock < parseInt(state.amount))
        setError('amount', {
          message: `There is only ${data.stock} of this products is in stock. `,
        })
      else mutate({ payload: null })
    }),
  }
}
