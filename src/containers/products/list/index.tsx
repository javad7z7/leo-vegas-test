import { memo } from 'react'
import { Table } from 'components/table'
import { useProductsList } from './use-products-list'

export const ProductsList = memo(() => {
  const { data, isLoading, columns } = useProductsList()

  return (
    <Table
      className="w-full flex flex-col items-end"
      data={data}
      columns={columns}
      loading={isLoading}
      title="Products"
    />
  )
})
