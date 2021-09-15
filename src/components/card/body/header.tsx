import { FC } from 'react'

export const CardHeader: FC<ICardBody> = ({ title }): JSX.Element => (
  <span
    className="text-gray-800 font-semibold text-center"
    data-testid="card-header"
  >
    {title}
  </span>
)
