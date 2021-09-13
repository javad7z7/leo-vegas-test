type TColumn = {
  head?: string
  key?: string
  width?: string
  check?: boolean
  render?: any
}

interface ITable {
  columns?: Array<TColumn>
  className?: string
  data?: any
  expand?: any
  onPaginate?: any
  loading?: boolean
  fetching?: boolean
  page?: any
  total?: number
  title?: string
  onRowClick?: any
  prepareRow?: any
}

interface ITableCell {
  column?: any
  index?: any
  cell?: any
  row?: any
  columns?: Array<TColumn>
}

interface ITableRow {
  row?: any
  columns?: Array<TColumn>
  index?: any
  expand?: any
  loading?: boolean
  length?: any
  onRowClick?: any
}

interface ITableHead {
  columns?: Array<TColumn>
  loading?: boolean
}
