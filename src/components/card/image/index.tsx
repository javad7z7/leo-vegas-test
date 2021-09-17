import { FC } from 'react'
import { CardImageAction } from './action'

export const CardImage: FC<ICardImage> = ({
  src,
  isLoading,
  item,
  onFavourite,
  isFavourite,
  onWatchLater,
  isWatchLater,
}): JSX.Element => {
  if (isLoading)
    return (
      <div
        className="w-full rounded h-[250px]  bg-gray-400 animate-pulse"
        data-testid="card-image"
      />
    )
  else if (src)
    return (
      <div
        className="w-full h-[250px] relative z-[10] group"
        data-testid="card-image"
      >
        <img
          className="w-full rounded h-[250px] object-cover object-top"
          src={`https://image.tmdb.org/t/p/w500${src}`}
          alt="image"
        />
        <CardImageAction
          item={item}
          onFavourite={onFavourite}
          isFavourite={isFavourite}
          onWatchLater={onWatchLater}
          isWatchLater={isWatchLater}
        />
      </div>
    )
  return (
    <div
      className="w-full h-[250px] relative z-[10] group"
      data-testid="card-image"
    >
      <div className="w-full rounded h-[250px] " />
      <CardImageAction
        item={item}
        onFavourite={onFavourite}
        isFavourite={isFavourite}
        onWatchLater={onWatchLater}
        isWatchLater={isWatchLater}
      />
    </div>
  )
}
