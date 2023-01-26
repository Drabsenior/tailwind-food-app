import React, { useState } from 'react'
import {data} from '../data/data'
const Foods = () => {
    const [foods,setFoods] = useState(data)

    // filter food by type

    const filterType = (category)=>{
        setFoods(data.filter((item)=>{
            return item.category === category
        }))
    }

    // filter food by price

    const filterPrice =  (price)=>{
        setFoods(data.filter((item)=>{
            return item.price === price
        }))
    }
  return (
    <div className='max-w-[1040px] p-4 py-12 mx-auto'>
        <h1 className='text-orange-600 font-bold  text-center text-4xl mb-4'>Top Rated Menu Items</h1>
        {/* filter row */}
        <div className='flex flex-col lg:flex-row justify-between'>
            {/* filter by type */}
            <div>
              <p className='font-bold text-gray-700'>Filter Type</p>
              <div className='flex justify-between flex-wrap'>
                <button onClick={()=>setFoods(data)} className='m-1 border-orange-500 text-orange-500 hover:bg-orange-600 hover:text-white duration-200'>All</button>
                <button onClick={()=>filterType('burger')} className='m-1 border-orange-500 text-orange-500 hover:bg-orange-600 hover:text-white duration-200'>Burger</button>
                <button onClick={()=>filterType('pizza')} className='m-1 border-orange-500 text-orange-500 hover:bg-orange-600 hover:text-white duration-200'>Pizza</button>
                <button onClick={()=>filterType('salad')} className='m-1 border-orange-500 text-orange-500 hover:bg-orange-600 hover:text-white duration-200'>Salad</button>
                <button onClick={()=>filterType('chicken')} className='m-1 border-orange-500 text-orange-500 hover:bg-orange-600 hover:text-white duration-200'>Chicken</button>
              </div>
            </div>
            {/* filter by price */}
            <div>
                <p className='font-bold text-gray-700'>Filter price</p>
                <div className='flex justify-between max-w-[390px] w-full  '>
                    <button onClick={()=>filterPrice('$')} className='m-1 border-orange-500 text-orange-500 hover:bg-orange-600 hover:text-white px-6'>$</button>
                    <button onClick={()=>filterPrice('$$')} className='m-1 border-orange-500 text-orange-500 hover:bg-orange-600 hover:text-white px-6'>$$</button>
                    <button onClick={()=>filterPrice('$$$')} className='m-1 border-orange-500 text-orange-500 hover:bg-orange-600 hover:text-white px-6'>$$$</button>
                    <button onClick={()=>filterPrice('$$$$')} className='m-1 border-orange-500 text-orange-500 hover:bg-orange-600 hover:text-white px-6'>$$$$</button>
                </div>

            </div>
        </div>
        {/* display foods */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
            {foods.map((item,index)=>(
                <div key={index} className="border shadow-lg hover:scale-105 duration-300">
                    <img src={item.image} alt={item.name} className="w-full rounded-t-lg h-[200px] object-cover" />
                    <div className='flex justify-between px-2 py-4'>
                        <p className='font-bold'>{item.name}</p>
                        <p>
                            <span className='bg-orange-600 text-white rounded-full px-2 text-sm py-1'>{item.price}</span>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Foods