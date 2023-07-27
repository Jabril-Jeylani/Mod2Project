import { useState } from 'react'
import './App.css'
import API from './API'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <API />
      </div>
    </>
  )
}

export default App
