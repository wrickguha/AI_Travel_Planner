import { useState } from 'react'
import Hero from './components/ui/custom/Hero'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* HERO */}
      <Hero/>
    </>
  )
}

export default App
