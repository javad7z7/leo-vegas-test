import { FC, useEffect } from 'react'
import { ICClose } from 'icons/close'
import { classNames } from 'utils'
import { useToast } from 'hooks'

export const Toast: FC<IToast> = ({ title, description, type }) => {
  const { toast, close } = useToast()

  useEffect(() => {
    if (toast.open)
      setTimeout(() => {
        close()
      }, 10000)
  }, [toast.open, toast.type])

  return (
    <div
      className={classNames(
        'fixed col-start top-4 right-4 z-50 w-[400px] h-22 rounded px-4 py-2 shadow-xl ',
        type === 'error' ? 'bg-red-500' : 'bg-green-600'
      )}
    >
      <ICClose
        className={classNames(
          'w-6 h-6  absolute top-2 right-2 cursor-pointer',
          type === 'error' ? 'text-red-800' : 'text-green-400'
        )}
        onClick={() => close()}
      />
      <span
        className={classNames(
          'text-lg ',
          type === 'error' ? 'text-red-900' : 'text-green-400'
        )}
      >
        {title}
      </span>
      <span
        className={classNames(
          'pt-1 pb-1 text-sm ',
          type === 'error' ? 'text-red-200' : 'text-green-200'
        )}
      >
        {description}
      </span>
    </div>
  )
}
