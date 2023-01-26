import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu, AiOutlineSearch,AiFillTag} from 'react-icons/ai'
import {BsFillCartFill,BsFillSaveFill} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends,FaWallet } from 'react-icons/fa'
import {MdFavorite,MdHelp} from 'react-icons/md'


const Navbar = () => {
    const [showNav,setShowNav] =useState(false)
  return (
    <div className='max-w-[1040px] mx-auto flex justify-between items-center p-4'>
        {/* left side menu */}

        <div className='flex items-center'>

        <div className='cursor-pointer' onClick={()=>setShowNav(!showNav)}>
            <AiOutlineMenu size={30}/>
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>Best <span className='font-bold'>Eats</span></h1>
        <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
            <p className='bg-black text-white rounded-full p-2'>Delivery</p>
            <p className=' p-2'>Pickup</p>

        </div>

        </div>
        {/* input searchbar */}
        <div className='bg-gray-200 rounded-full px-2 flex items-center w-[200px] sm:w-[400px] lg:w-[500px]'>
            <AiOutlineSearch size={20} className="ml-2"/>
            <input type="text" placeholder='Search foods'  className='bg-transparent p-2 w-full focus:outline-none' />
        </div>
        {/* cart button */}
      
            <button className='bg-black text-white items-center rounded-full py-2 hidden md:flex'>
                <BsFillCartFill size={20} className="mr-2"/>Cart
            </button>
       {/* mobile menu */}
       {/* overlay */}
       {showNav && (

       <div className='bg-black/80 w-full h-screen fixed z-10 top-0 left-0'></div>
       )}
       {/* side drawer */}
       <div className={showNav ? 'fixed top-0 left-0 w-[300px] bg-white h-screen z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] bg-white h-screen z-10 duration-300'} onClick={()=>setShowNav(!showNav)}>
        <AiOutlineClose size={30} className='absolute top-4 right-4 z-10 cursor-pointer'/>
          <h2 className='text-2xl p-4'>Best <span className='font-bold'>Eats</span></h2>
          <nav>
            <ul className='flex flex-col p-4 text-gray-800'>
                <li className='flex py-4 text-xl'><TbTruckDelivery size={25} className="mr-4"/>Orders</li>
                <li className='flex py-4 text-xl'><MdFavorite size={25} className="mr-4"/>Favorites</li>
                <li className='flex py-4 text-xl'><FaWallet size={25} className="mr-4"/>Wallet</li>
                <li className='flex py-4 text-xl'><MdHelp size={25} className="mr-4"/>Help</li>
                <li className='flex py-4 text-xl'><AiFillTag size={25} className="mr-4"/>Promotions</li>
                <li className='flex py-4 text-xl'><BsFillSaveFill size={25} className="mr-4"/>Best Ones</li>
                <li className='flex py-4 text-xl'><FaUserFriends size={25} className="mr-4"/>Invite Friends</li>
            </ul>
          </nav>
       </div>
    </div>
  )
}

export default Navbar