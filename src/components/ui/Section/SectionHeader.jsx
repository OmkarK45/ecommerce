export default function SectionHeader({ title }) {
  return (
    <div className="md:flex md:items-center md:justify-between">
      <div className="flex-1 min-w-0">
        <h2 className="text-2xl font-bold leading-7 tracking-tight text-gray-900 sm:text-3xl sm:truncate">
          {title}
        </h2>
      </div>
      <div className="mt-4 flex md:mt-0 md:ml-4">
        {/*  */}
        <button
          type="button"
          className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <svg
            className="-ml-0.5 mr-2 h-4 w-4"
            data-todo-x-description="Heroicon name: solid/mail"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
          </svg>
          Sort
        </button>
        <button>Filter</button>
      </div>
    </div>
  )
}
