import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Offers from './components/Offers'
import Plan from './components/Plan'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Offers />
      <Plan />
    </div>
  )
}

export default App