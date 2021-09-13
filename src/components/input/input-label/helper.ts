import { classNames } from 'utils/classes'

export const inputLabelClassName = (size) =>
  classNames(
    ' mb-2 text-light dark:text-dark',
    size === 'small' ? 'text-xs' : 'text-base'
  )
