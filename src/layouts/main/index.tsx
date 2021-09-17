export const MainLayout = ({ children }) => {
  return (
    <main className="bg-gray-800 fixed w-full h-full inset-0  overflow-y-auto ">
      {children}
    </main>
  )
}
