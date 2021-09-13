import { Button } from 'components/button'
import { classNames } from 'utils/classes'

const pager = (pageCount, page) => {
  const totalPages = pageCount

  const pages = Array.from(new Array(totalPages)).map((item, index) => index)

  const startPage =
    totalPages <= 10
      ? 1
      : page <= 6
      ? 1
      : page + 4 >= totalPages
      ? totalPages - 9
      : page - 5

  const endPage =
    totalPages <= 10
      ? totalPages
      : page <= 6
      ? 10
      : page + 4 >= totalPages
      ? totalPages
      : page + 4

  return pages.slice(startPage, endPage - 1)
}

export const TablePagination = ({ pageCount, gotoPage, page }) => {
  if (pageCount > 1)
    return (
      <div className=" w-full flex items-center justify-end mt-12">
        <Button
          type="button"
          onClick={() => gotoPage(0)}
          className={classNames(
            'w-8 h-8  disabled:opacity-30 mr-2',
            page === 0
              ? 'bg-secondary text-white'
              : ' bg-gray-500 text-gray-200'
          )}
        >
          {1}
        </Button>
        {pager(pageCount, page).map((item, index) => (
          <Button
            type="button"
            id={item + 1}
            key={index}
            onClick={() => gotoPage(item)}
            className={classNames(
              'w-8 h-8  mr-2 disabled:opacity-30',
              page === item
                ? 'bg-secondary text-white'
                : ' bg-gray-500 text-gray-200'
            )}
          >
            {item + 1}
          </Button>
        ))}
        <Button
          type="button"
          onClick={() => gotoPage(pageCount - 1)}
          className={classNames(
            'w-8 h-8  disabled:opacity-30',
            page === pageCount - 1
              ? 'bg-secondary text-white'
              : ' bg-gray-500 text-gray-200'
          )}
        >
          {pageCount}
        </Button>
      </div>
    )
  else return null
}
