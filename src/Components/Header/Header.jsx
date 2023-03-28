import React from 'react'
import logo from "../../assets/images/Logo.svg"

export const Header = () => {
  return (
    <header className='w-full h-20 bg-header-bg flex items-center justify-between'>
        <nav className='container mx-auto flex items-center justify-between'>
            <img src={logo} alt="logo" />
            <ul className='flex items-center text-white'>
                <li className='text-white ml-0 font-semibold'><a href="#">Order</a></li>
                <li className='text-white ml-8 font-semibold'><a href="#">Order Review</a></li>
                <li className='text-white ml-8 font-semibold'><a href="#">Manage Inventory</a></li>
                <li className='text-white ml-8 font-semibold'><a href="">Login</a></li>
            </ul>
        </nav>
    </header>
  )
}
