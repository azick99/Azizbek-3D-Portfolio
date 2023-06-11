import { useState } from 'react'
import { useEffect } from 'react'

const Spinner = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data)
    setTimeout(() => {
      setIsLoading(false) // Set isLoading to false after the data has been loaded
    }, 4000) // Adjust the delay time as needed
  }, [])

  return (
    <div
      className={`${
        isLoading ? 'flex' : 'hidden'
      } items-center justify-center sm:w-[98.6vw] w-[100vw] h-[100vh] absolute mx-auto bg-black z-50`}
    >
      <div className="flex justify-center items-center space-x-1 text-sm white">
        <svg
          fill="none"
          className="w-10 h-10 animate-spin"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
            fill="currentColor"
            fillRule="evenodd"
          />
        </svg>

        <div className="text-lg">Loading ...</div>
      </div>
    </div>
  )
}

export default Spinner
