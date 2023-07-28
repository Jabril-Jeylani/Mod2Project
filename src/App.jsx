import { useState } from 'react'
import './App.css'
import API from './API'
import { Route, Routes} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Stock from './pages/Stock'

function App() {

  return (
    <>
      <div className='app'>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='stock/:symbol' element={<Stock />} />
        </Routes>
      </div>
    </>
  )
}

export default App
