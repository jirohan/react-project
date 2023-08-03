import React from 'react'
import Topbar from './components/Topbar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Service from './components/Service'
import Offer from './components/Offer'
import Manner from './components/Manner'
import Certified from './components/Certified'
import Teachers from './components/Teachers'

const App = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Hero />
      <Service />
      <Offer />
      <Manner />
      <Certified />
      <Teachers />
    </div>
  )
}

export default App