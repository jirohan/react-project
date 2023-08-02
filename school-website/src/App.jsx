import React from 'react'
import Topbar from './components/Topbar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Service from './components/Service'

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