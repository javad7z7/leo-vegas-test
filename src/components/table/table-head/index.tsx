import { FC, memo } from 'react'
import { classNames } from 'utils/classes'

export const TableHead: FC<ITableHead> = memo(({ columns, loading }) => {
  return (
    <thead className="w-full">
      <tr
        className={classNames(
          'w-full row-start  py-4 px-6  rounded-t border-b-2  border-secondary dark:border-primary flex ',
          loading && 'animate-pulse200'
        )}
      >
        {(columns || []).map((column, index) => (
          <th
            className={classNames(
              'flex items-center text-secondary dark:text-primary text-sm ',
              index === columns.length - 1 ? ' justify-end' : 'justify-start',
              column.width
            )}
            key={index}
          >
            {column.head}
          </th>
        ))}
      </tr>
    </thead>
  )
})
