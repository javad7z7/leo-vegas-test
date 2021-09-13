import { FC, memo, useEffect, useMemo } from 'react'
import { useTable, usePagination, useGlobalFilter } from 'react-table'
import { classNames } from 'utils/classes'

import { TablePagination } from './table-pagination'
import { TableToolbar } from './table-toolbar'
import { TableBody } from './table-body'
import { TableHead } from './table-head'

export const Table: FC<ITable> = memo(
  ({ className, columns, data, loading, title }) => {
    const memoColumns = useMemo(() => columns, [])
    const memoData = useMemo(() => data || [], [data])

    const {
      state: { pageIndex },
      page,
      pageCount,
      gotoPage,
      prepareRow,
    } = useTable(
      {
        columns: memoColumns,
        data: memoData,
        autoResetPage: false,
      },
      useGlobalFilter,
      usePagination
    )

    return (
      <div className="w-full flex flex-col items-end p-4 ">
        <TableToolbar title={title} />
        <table className="w-full flex flex-col items-center ">
          <TableHead columns={columns} loading={loading} />
          <TableBody
            columns={columns}
            loading={loading}
            page={page}
            data={data}
            prepareRow={prepareRow}
          />
        </table>
        <TablePagination
          pageCount={pageCount}
          page={pageIndex}
          gotoPage={gotoPage}
        />
      </div>
    )
  }
)
