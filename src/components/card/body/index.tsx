import { FC } from 'react'
import { CardHeader } from './header'
import { CardText } from './text'

export const CardBody: FC<ICardBody> = ({
  title,
  description,
  isLoading,
}): JSX.Element =>
  isLoading ? (
    <div
      className="w-5/6 bg-white rounded h-[150px] -mt-20 shadow flex flex-col p-3 animate-pulse"
      data-testid="card-body"
    />
  ) : (
    <div
      className="w-5/6 bg-blue-100 rounded h-[150px] -mt-20 shadow flex flex-col p-3 z-[20]"
      data-testid="card-body"
    >
      <CardHeader title={title} />
      <CardText description={description} />
    </div>
  )
