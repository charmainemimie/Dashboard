import React from 'react'

const TopBar = () => {
  return (
    <div>
        <header className=" ">
  <div className="py-3 bg-white">
    <div className="container px-4 mx-auto sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">

        <div className="flex-1 max-w-xs ml-8 mr-auto">
          <label htmlFor="" className="sr-only">
            {" "}
            Search{" "}
          </label>
          <div className="relative">
           <h1>Top b</h1>
      
          </div>
        </div>
        <div className="flex items-center ml-4 lg:ml-0">
          <button
            type="button"
            className="rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            id="options-menu-button"
            aria-expanded="false"
            aria-haspopup="true"
          >
            <span className="flex items-center justify-between w-full">
              
                <span className="flex-1 hidden min-w-0 md:flex">
                  <span className="text-sm font-medium text-gray-900 truncate">
                    {" "}
                    Top c{" "}
                  </span>
                
              </span>
              <svg
                className="flex-shrink-0 w-4 h-4 ml-2 text-gray-400 group-hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>

</header>

    </div>
  )
}

export default TopBar