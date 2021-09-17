import { Button } from 'components/button'
import { ICStar } from 'icons/star'
import { ICStarFill } from 'icons/star-fill'
import { ICTime } from 'icons/time'
import { ICTimeFill } from 'icons/time-fill'
import { FC, memo } from 'react'

export const CardImageAction: FC<ICardImage> = memo(
  ({
    item,
    onFavourite,
    isFavourite,
    isWatchLater,
    onWatchLater,
  }): JSX.Element => (
    <div className="flex flex-col space-y-3 absolute top-2 right-2">
      <Button
        onClick={() => onFavourite(item)}
        icon
        id="card-image-action-favourite"
      >
        {isFavourite ? (
          <ICStarFill className="w-6 h-6 text-yellow-400" />
        ) : (
          <ICStar className="w-6 h-6 text-yellow-500" />
        )}
      </Button>
      <Button
        onClick={() => onWatchLater(item)}
        icon
        id="card-image-action-watch"
      >
        {isWatchLater ? (
          <ICTimeFill className="w-6 h-6 text-green-500" />
        ) : (
          <ICTime className="w-6 h-6 text-green-500" />
        )}
      </Button>
    </div>
  )
)
