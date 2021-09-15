import { FC } from 'react'
import { CardImageAction } from './action'

export const CardImage: FC<ICardImage> = ({
  src,
  isLoading,
  item,
  action,
  active,
}) =>
  isLoading ? (
    <div className="w-full rounded h-[250px]  bg-gray-400" />
  ) : src ? (
    <div className="w-full h-[250px] relative z-[10] ">
      <img
        className="w-full rounded h-[250px] object-cover object-top"
        src={`https://image.tmdb.org/t/p/w500${src}`}
        alt="image"
      />
      <CardImageAction item={item} active={active} action={action} />
    </div>
  ) : (
    <div className="w-full h-[250px] relative z-[10] ">
      <div className="w-full rounded h-[250px] " />
      <CardImageAction item={item} active={active} action={action} />
    </div>
  )
