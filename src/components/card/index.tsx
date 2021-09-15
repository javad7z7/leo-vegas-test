import { FC } from 'react'
export const Card: FC<ICard> = ({ children }): JSX.Element => (
  <div
    className="w-full  max-h-[350px] flex flex-col items-center"
    data-testid="card"
  >
    {children}
  </div>
)
