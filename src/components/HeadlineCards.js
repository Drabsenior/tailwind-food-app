import React from 'react'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1040px] p-4 mx-auto py-12 grid md:grid-cols-3 gap-6'>
        {/* overlay */}
        <div className='relative rounded-xl '>

        <div className='absolute text-white w-full h-full bg-black/50 rounded-xl'>
            <p className='font-bold px-2 pt-4 text-2xl
            '>Sun's Out,BOGOS'S Out</p>
            <p className='px-2'>Through 8/26</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img src="https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  alt="/"  className='rounded-xl w-full max-h-[170px]'/>
        </div>
        {/* overlay */}
        <div className='relative rounded-xl '>

        <div className='absolute text-white w-full h-full bg-black/50 rounded-xl'>
            <p className='font-bold px-2 pt-4 text-2xl
            '>New Resturant</p>
            <p className='px-2'>Added daily</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img src="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  alt="/"  className='rounded-xl w-full max-h-[170px]'/>
        </div>
        {/* overlay */}
        <div className='relative rounded-xl '>

        <div className='absolute text-white w-full h-full bg-black/50 rounded-xl'>
            <p className='font-bold px-2 pt-4 text-2xl
            '>We Deliver Desserts Too</p>
            <p className='px-2'>Tasty treats</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img src="https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  alt="/"  className='rounded-xl w-full max-h-[170px]'/>
        </div>
    </div>
  )
}

export default HeadlineCards