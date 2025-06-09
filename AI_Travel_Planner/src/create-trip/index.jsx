import React, { useEffect, useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { Input } from "@/components/ui/input"
import { SelectBudgetOptions } from '../constants/options';
import { SelectTravelList } from '../constants/options';
import { Button } from "@/components/ui/button"

function CreateTrip() {
  const [place,setPlace] = useState();

  const [formData,setFormData]=useState([]);

  const handleInputChange=(name,value)=>{

    setFormData({
      ...formData,
      [name]:value
    })
  }

  useEffect(()=>{
    console.log(formData)
  },[formData])

  const OnGenerateTrip=()=>{
    if(formData?.noOfDays>5)
    {

      return ;
    }
  }



  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10 '>
        <h2 className='font-bold text-5xl items-center text-center text-[#0ABAB5]'>Tell us your travel preferences</h2>
        <p className='mt-3 text-xl text-gray-600 items-center text-center'>Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences</p>

      <div className='mt-12 pl-15 flex flex-col gap-8'>
        <div>
          <h2 className='text-xl my-3 font-medium'>What is destination of choice?</h2>
              <GooglePlacesAutocomplete
                apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
                selectProps={{
                  place,
                  onChange:(v)=>{setPlace(v); handleInputChange('location',v)}
                }}
              />
        </div>
        
        <div>
        <h2 className='text-xl my-3 font-medium'>How many days are you planning for trip?</h2>
        <Input placeholder={'Ex.3'} type="number" 
          onChange={(e)=>handleInputChange('noOfDays',e.target.value)}
        />
        </div>
   

      <div>
          <h2 className='text-xl my-3 font-medium'>What is your budget?</h2>
          <div className='grid grid-cols-3 gap-5 mt-5'>
              {SelectBudgetOptions.map((item,index)=>(
                  <div key={index} 
                    onClick={()=>handleInputChange('budget',item.title)}
                  className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer ${formData?.budget==item.title && 'bg-gray-200 border-black border-2'} `}>
                    <h2 className='text-4xl'>{item.icon}</h2>
                    <h2 className='font-bold text-lg'>{item.title}</h2>
                    <h2 className='text-sm text-gray-500'>{item.desc}</h2>
                  </div>
                ))}
          </div>
      </div>

      <div>
          <h2 className='text-xl my-3 font-medium'>Who do you plan on travelling with on your next adventure?</h2>
          <div className='grid grid-cols-3 gap-5 mt-5'>
              {SelectTravelList.map((item,index)=>(
                  <div key={index} 
                    onClick={()=>handleInputChange('traveler',item.people)}
                  className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer ${formData?.traveler==item.people && 'bg-gray-200 border-black border-2'} `}>
                    <h2 className='text-4xl'>{item.icon}</h2>
                    <h2 className='font-bold text-lg'>{item.title}</h2>
                    <h2 className='text-sm text-gray-500'>{item.desc}</h2>
                    <h2 className='text-sm'>{item.people}</h2>
                  </div>
                ))}
          </div>
      </div>
    </div>

    <div className='my-8 items-center flex justify-end align-items-center'>
    <Button onClick={OnGenerateTrip} className='border-2 bg-black text-white cursor-pointer hover:bg-auto'>Generate Trip</Button>
    </div>

    </div>
  )
}

export default CreateTrip
