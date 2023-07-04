import React from 'react'

const NavBar = () => {
  return (
    <div className='navBar flex justify-between items-center p-[3rem]'>
          <div className="logoDiv">
               <h1 className="logo text-[35px] text-blueColor">
               <strong>i</strong>Sabi
               </h1>
          </div>

          <div className='menu flex gap-20'>
               <li className='menuList text-[#6f6f6f] hover:text-blueColor'>Login</li>
               <li className='menuList text-[#6f6f6f] hover:text-blueColor'>Register</li>
          </div>
    </div>
  )
}

export default NavBar
