export const MoviesListWrapper = ({ children }) => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-x-6 gap-y-12 xl:gap-y-14 overflow-hidden">
      {children}
    </div>
  )
}
