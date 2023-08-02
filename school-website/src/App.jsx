import React from 'react'
import Topbar from './components/Topbar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const App = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Hero />
      <Service />
    </div>
  )
}

export default App