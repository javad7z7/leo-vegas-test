import { FC, memo } from 'react'
import { classNames } from 'utils/classes'

import { TableCell } from '../table-cell'

export const TableRow: FC<ITableRow> = memo(
  ({ row, columns, loading, index, length }) => {
    if (row)
      return (
        <tr
          {...row.getRowProps()}
          className={classNames(
            'w-full flex  overflow-hidden border-gray-700  text-sm row-start h-12 px-6 hover:bg-gray-700',
            loading ? 'opacity-50 ' : 'group',
            index === length - 1 ? '' : 'border-b'
          )}
        >
          {(row.cells || []).map((cell, cellIndex) => (
            <TableCell
              key={cell.column.id}
              index={cellIndex}
              cell={cell}
              row={row}
            />
          ))}
        </tr>
      )
    else return null
  }
)
