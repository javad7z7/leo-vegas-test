import { Button } from 'components/button'
import { Input } from 'components/input'
import { FC, memo } from 'react'
import { classNames } from 'utils/classes'

export const MoviesToolbar: FC<IMoviesList> = memo(
  ({
    onSearch,
    toggleFavourite,
    favourites,
    query,
    watchLater,
    toggleWatchLater,
  }) => (
    <div className="w-full flex flex-col md:flex-row md:items-center space-y-8 md:space-y-0 items-center justify-between px-6 md:px-0">
      <div className="flex flex-col md:flex-row items-center space-y-3 md:space-x-8 md:space-y-0">
        <Button
          onClick={() => toggleFavourite(false)}
          className={classNames(
            'md:text-3xl cursor-pointer ',
            !favourites.isOpen && !watchLater.isOpen
              ? 'text-blue-500  '
              : 'text-gray-300  '
          )}
        >
          Movies
        </Button>
        <Button
          onClick={() => toggleFavourite(true)}
          className={classNames(
            'md:text-3xl cursor-pointer ',
            favourites.isOpen ? 'text-blue-500  ' : 'text-gray-300  '
          )}
        >
          Favourites
        </Button>
        <Button
          onClick={() => toggleWatchLater(true)}
          className={classNames(
            'md:text-3xl cursor-pointer ',
            watchLater.isOpen ? 'text-blue-500  ' : 'text-gray-300  '
          )}
        >
          Watch later
        </Button>
      </div>
      {!favourites.isOpen && !watchLater.isOpen && (
        <Input
          className=" w-full md:w-1/3 lg:w-1/4 xl:w-1/6"
          size="small"
          placeholder="Search ... "
          onChange={onSearch}
          value={query === 'a' ? '' : query}
        />
      )}
    </div>
  )
)
