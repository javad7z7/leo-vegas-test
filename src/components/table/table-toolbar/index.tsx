export const TableToolbar = ({ title }) => {
  return (
    <div className="w-full flex items-center justify-between">
      {title ? (
        <span className="text-lg pb-4 text-gray-300">{title}</span>
      ) : (
        <div />
      )}
    </div>
  )
}
