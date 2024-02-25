import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen bg-gradient-to-b from-blue-800 via-transparent to-gray-900 flex justify-center items-center'>
      <Nav/>
      <h1 className='text-blue-500 text-7xl'>Funity - SDG 17 Hub</h1>
    </div>
  )
}

export default App
