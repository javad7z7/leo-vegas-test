import { FC, memo } from 'react'

export const Form: FC<IForm> = memo(
  ({ className, onSubmit, children }): JSX.Element => {
    return (
      <form onSubmit={onSubmit} className={className} slot="wrapper">
        {children && <div slot="children">{children}</div>}
      </form>
    )
  }
)
