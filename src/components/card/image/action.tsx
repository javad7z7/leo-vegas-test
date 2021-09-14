import { Button } from 'components/button'
import { ICStar } from 'icons/star'
import { ICStarFill } from 'icons/star-fill'
import { FC } from 'react'

export const CardImageAction: FC<ICardImage> = ({ item, action, active }) => (
  <Button className="peer absolute top-2 right-2" onClick={() => action(item)}>
    {active ? (
      <ICStarFill className="w-5 h-5 text-yellow-400" />
    ) : (
      <ICStar className="w-5 h-5 text-yellow-700" />
    )}
  </Button>
)
