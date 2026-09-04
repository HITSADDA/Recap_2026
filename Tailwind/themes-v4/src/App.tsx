import { useEffect, useState } from "react"

function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <>
      <section className=" bg-ui-bg text-ui-text w-full min-h-screen flex flex-col items-center justify-center space-y-4">
        <div className="flex gap-2">
          <button 
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setTheme('default')}
          >
            default
          </button>
          <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setTheme('dark')}
          >
            Dark
          </button>
          <button 
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setTheme('forest')}
          >
            Forest
           </button>
        </div>
        <div className="min-h-[50%] w-[50%] flex flex-col items-center justify-center space-y-4 border border-slate-400 rounded-lg p-4">
          <div className="text-xl font-bold">Theme</div>
          <div className="text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum officia, reiciendis nostrum corrupti voluptatem dignissimos. Optio, quos! Animi repellendus molestias eos beatae impedit doloremque doloribus perspiciatis et quod? Voluptatem perspiciatis adipisci eum facilis odio, alias ea a maxime ex sequi eligendi nobis rerum dignissimos?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum officia, reiciendis nostrum corrupti voluptatem dignissimos. Optio, quos! Animi repellendus molestias eos beatae impedit doloremque doloribus perspiciatis et quod? Voluptatem perspiciatis adipisci eum facilis odio, alias ea a maxime ex sequi eligendi nobis rerum dignissimos?
          </div>
          <button className="bg-ui-btn hover:bg-ui-btn-hover text-white font-bold py-2 px-4 rounded">
            Sign Up
          </button>
        </div>
      </section>
    </>
  )
}

export default App
