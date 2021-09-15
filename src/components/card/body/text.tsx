import { FC } from 'react'

export const CardText: FC<ICardBody> = ({ description }): JSX.Element => (
  <span
    className="text-gray-600 text-[12px] py-3 text-left"
    data-testid="card-text"
  >
    {description.substr(0, 160)}
  </span>
)
