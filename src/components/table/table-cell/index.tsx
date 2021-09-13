import { FC, memo } from 'react'
import { classNames } from 'utils/classes'

export const TableCell: FC<ITableCell> = memo(({ index, cell, row }) => {
  return (
    <td
      {...cell.getCellProps()}
      className={classNames(
        'flex items-center text-gray-800 dark:text-gray-100',
        index === row.cells.length - 1 ? ' justify-end' : 'justify-start',
        cell.column.width
      )}
    >
      {cell.render('Cell')}
    </td>
  )
})
