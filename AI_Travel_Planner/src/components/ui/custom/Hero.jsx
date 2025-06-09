import React from 'react'
import { Button } from "@/components/ui/button"
import { Link } from 'react-router'

function Hero() {
  return (
    <div className='flex items-center mx-55 gap-9 flex-col'>
      <h2 className='font-extrabold text-[35px] text-center mt-16'>
        <span className='text-[#0ABAB5]'>Discover Your Next Adventure with AI:  </span>Personalized Itinerary at Your FingerPrints</h2>
        <p className='text-[15px] text-gray-600 text-center'>Your personal trip planner and travel curator, creating custom itineries tailored to your interests and budget</p>

        <Link to={'/create-trip'}>
            <Button className='shadow-2xl border-2 hover:bg-[#8CCDEB] cursor-pointer'>Get Started. It's Free</Button>
        </Link>
    
    </div>
  )
}

export default Hero
