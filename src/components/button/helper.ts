import { classNames } from 'utils/classes'

export const buttonClassName = (
  icon?: boolean,
  loading?: boolean,
  disabled?: boolean,
  className?: string
) =>
  classNames(
    ' flex items-center justify-center transition rounded focus:outline-none  disabled:opacity-50 ',
    !icon && 'shadow',
    loading
      ? 'cursor-wait '
      : !disabled && 'transform hover:-translate-y-1 hover:scale-105',
    className
  )
