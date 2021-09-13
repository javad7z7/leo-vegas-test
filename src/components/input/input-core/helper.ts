import { classNames } from 'utils/classes'

export const inputCoreClassName = (fieldError, withError, size) =>
  classNames(
    ' w-full  rounded focus:outline-none focus:shadow  text-gray-900 bg-white placeholder-gray-500 dark:bg-gray-400 dark:placeholder-gray-700 px-4',
    fieldError || withError
      ? 'border-2 border-red-400 shadow'
      : 'border border-gray-300 focus:ring-2 focus:ring-indigo-400 dark:border-gray-700 dark:focus:ring-indigo-600',
    size === 'large' ? 'h-14 ' : size === 'small' ? 'h-8 text-[13px]' : 'h-12'
  )

export const inputCoreActualValue = (value) => {
  switch (typeof value) {
    case 'string':
      return value
    case 'object':
      if (value && value.length) {
        return value.join(',')
      } else return ''
    default:
      break
  }
}
