import { useMemo } from 'react'
import { useService } from 'hooks/use-service'
import { ProductsListActions } from './actions'

const columns = [
  { head: 'Name', accessor: 'name', width: 'w-2/3' },
  { head: 'Stock', accessor: 'stock', width: 'w-1/3' },
  {
    head: '',
    accessor: 'actions',
    width: ' w-[0px]',
    Cell: (item) => <ProductsListActions item={item} />,
  },
]

export const useProductsList = () => {
  const { useGet } = useService()

  const { data, isLoading, isFetching, isSuccess } = useGet({
    key: ['PRODUCTS_LIST'],
    url: 'http://localhost:8080/api/product',
    onFocus: false,
  })

  return {
    data,
    columns,
    isSuccess,
    isLoading: useMemo(() => isLoading || isFetching, [isLoading, isFetching]),
  }
}
