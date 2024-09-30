import './App.css'

function App() {
  return (
    <main className='h-screen flex flex-col justify-center items-center'>
      <label
        htmlFor="full_name"
        className='text-gray-700 text-sm font-bold select-none'
      >
        Full Name
      </label>
      <input
        id="full_name"
        type="text"
        placeholder="Enter your full name"
        className='mt-2 shadow border rounded-lg w-4/6 px-3 py-2 text-gray-700 focus:bg-blue-100 placeholder-indigo-300'
      />
      <button
        className='mt-2 px-3 py-2 bg-blue-900 text-blue-100 rounded-lg'
      >
        Save</button>
    </main>
  )
}

export default App
