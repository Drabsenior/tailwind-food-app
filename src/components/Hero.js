import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1040px] mx-auto p-4'>
        {/* overlay */}
        <div className='max-h-[400px]  relative'>

        <div className='absolute bg-black/40 w-full h-full max-h-[400px] flex flex-col justify-center'>
         <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl flex items-center text-white font-bold px-4'><span className='text-orange-400 mr-4'> Foods</span>Delivered</h1>
         <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl flex items-center text-white font-bold px-4'>The <span  className='text-orange-400 ml-4'>Best</span></h1>
        </div>
        <img src="https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="food image" className='max-h-[400px] w-full object-cover' />
        </div>
    </div>
  )
}

export default Hero