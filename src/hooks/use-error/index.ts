import { useCallback } from 'react'
import { useToast } from 'hooks'

export const useError = () => {
  const { error: errorToast } = useToast()

  return {
    onError: useCallback((error) => {
      if (error.message) {
        errorToast(error.message)
      }
    }, []),
  }
}
