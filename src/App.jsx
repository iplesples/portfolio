import { useState } from 'react'

function App() {

  return (
    <> 
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-900 text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
        Hallo saya bobhy
      </h1>
      <p className="text-lg md:text-xl text-center max-w-2xl mb-6">
        I am a passionate full-stack web developer who loves to build modern and efficient applications.
      </p>
      <div>
        <button className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-6 py-3 rounded-xl shadow-md">
          View My Work
        </button>
      </div>
    </div>     
    </>
  )
}

export default App
