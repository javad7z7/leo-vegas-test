import { FC } from 'react'
import { CardHeader } from './header'
import { CardText } from './text'

export const CardBody: FC<ICardBody> = ({ title, description, isLoading }) =>
  isLoading ? (
    <div className="w-5/6 bg-white rounded h-[150px] -mt-20 shadow flex flex-col p-3 animate-pulse" />
  ) : (
    <div className="w-5/6 bg-blue-100 rounded h-[150px] -mt-20 shadow flex flex-col p-3 z-[20]">
      <CardHeader title={title} />
      <CardText description={description} />
    </div>
  )
