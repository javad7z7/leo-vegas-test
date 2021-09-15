import { Button } from 'components/button'
import { classNames } from 'utils/classes'

const pager = (totalPage, page) => {
  const totalPages = totalPage

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

export const MoviesPagination = ({ totalPage, onPaginate, page }) => {
  if (totalPage > 1)
    return (
      <div className=" w-full flex items-center justify-end">
        <Button
          id={1}
          type="button"
          onClick={() => onPaginate(1)}
          className={classNames(
            'w-8 h-8  disabled:opacity-30 mr-2 text-sm',
            page === 1
              ? 'bg-secondary text-white'
              : ' bg-gray-500 text-gray-200'
          )}
        >
          {1}
        </Button>
        {pager(totalPage, page).map((item, index) => (
          <Button
            type="button"
            id={item + 1}
            key={index}
            onClick={() => onPaginate(item + 1)}
            className={classNames(
              'w-8 h-8  mr-2 disabled:opacity-30 text-sm',
              page === item + 1
                ? 'bg-secondary text-white'
                : ' bg-gray-500 text-gray-200'
            )}
          >
            {item + 1}
          </Button>
        ))}
        <Button
          id={totalPage}
          type="button"
          onClick={() => onPaginate(totalPage)}
          className={classNames(
            'w-8 h-8  disabled:opacity-30 text-sm',
            page === totalPage
              ? 'bg-secondary text-white'
              : ' bg-gray-500 text-gray-200'
          )}
        >
          {totalPage}
        </Button>
      </div>
    )
  else return null
}
