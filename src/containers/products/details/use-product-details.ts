import { useMemo } from 'react'
import { useService } from 'hooks/use-service'
import { useError } from 'hooks/use-error'
import { useUi } from 'hooks/use-ui'

export const useProductDetails = () => {
  const { useGet } = useService()

  const {
    uiState: {
      dialog: { data: dialogData },
    },
  } = useUi()

  const { data, isLoading, isFetching, isSuccess } = useGet({
    key: ['PRODUCTS_DETAILS'],
    url: dialogData ? `http://localhost:8080/api/product/${dialogData.id}` : '',
    onFocus: false,
  })

  return {
    isSuccess,
    data,
    isLoading: useMemo(() => isLoading || isFetching, [isLoading, isFetching]),
  }
}
