import { useEffect, useRef } from 'react'

export const MoviesLayout = ({ children, page }) => {
  const ref = useRef(null)

  useEffect(() => {
    ref.current.scrollIntoView && ref.current.scrollIntoView()
  }, [page])

  return (
    <div ref={ref} className="w-full flex flex-col space-y-14">
      {children}
    </div>
  )
}
