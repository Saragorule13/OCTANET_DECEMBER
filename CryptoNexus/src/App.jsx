import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const App = () => {
  return (
    <div className='flex flex-col app h-[100vh]'>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default App
