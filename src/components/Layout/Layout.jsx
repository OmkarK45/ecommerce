export default function Layout({ children }) {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto md:px-0  sm:px-6 lg:px-8 ">
        {children}
      </div>
    </div>
  )
}
