import { useForm } from 'react-hook-form'
import { useUi } from 'hooks/use-ui'
import { useService } from 'hooks/use-service'

export const useProductForm = () => {
  const { usePatch, client } = useService()
  const {
    toggleDialog,
    uiState: {
      dialog: { data },
    },
  } = useUi()

  const { control, handleSubmit } = useForm({
    defaultValues: data
      ? {
          name: data.name,
          stock: data.stock || '0',
        }
      : {},
  })

  const {
    mutate,
    isLoading,
    isSuccess,
    data: patchData,
  } = usePatch({
    url: 'http://localhost:8080/api/product/update',
    onSuccess: () => {
      client.invalidateQueries(['PRODUCTS_LIST'])
      toggleDialog({ open: false, type: null, data: null })
    },
  })

  return {
    control,
    isLoading,
    isSuccess,
    patchData,
    onSubmit: handleSubmit((state) => {
      const payload = {
        ...state,
        id: data.id,
      }
      mutate({ payload })
    }),
  }
}
