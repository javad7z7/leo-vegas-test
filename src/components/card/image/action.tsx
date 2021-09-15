import { Button } from 'components/button'
import { ICStar } from 'icons/star'
import { ICStarFill } from 'icons/star-fill'
import { FC } from 'react'

export const CardImageAction: FC<ICardImage> = ({
  item,
  action,
  active,
}): JSX.Element => (
  <Button
    className="peer absolute top-2 right-2 "
    onClick={() => action(item)}
    icon
    id="card-image-action"
  >
    {active ? (
      <ICStarFill className="w-7 h-7 text-yellow-400" />
    ) : (
      <ICStar className="w-7 h-7 text-yellow-700" />
    )}
  </Button>
)
