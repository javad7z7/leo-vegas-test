export const MainLayout = ({ children }) => {
  return (
    <main className="bg-gray-800 fixed w-full h-full inset-0 py-10 md:py-20 px-6 md:px-20 overflow-y-auto ">
      {children}
    </main>
  )
}
