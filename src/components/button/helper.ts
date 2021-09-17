import { classNames } from 'utils/classes'

export const buttonClassName = (
  icon?: boolean,
  loading?: boolean,
  className?: string
) =>
  classNames(
    'flex items-center justify-center transition rounded focus:outline-none  disabled:opacity-50 ',
    className,
    !icon && 'shadow',
    loading && 'cursor-wait '
  )
