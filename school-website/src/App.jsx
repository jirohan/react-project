import React from 'react'
import Topbar from './components/Topbar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Service from './components/Service'
import Offer from './components/Offer'
import Manner from './components/Manner'

const App = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Hero />
      <Service />
      <Offer />
      <Manner />
    </div>
  )
}

export default App