import React from 'react'
import {AiOutlineSearch } from 'react-icons/ai'
import {BsFillPersonVcardFill} from 'react-icons/bs'
import {CiLocationOn} from 'react-icons/ci'
import {AiOutlineCloseCircle} from 'react-icons/ai'

const Search = () => {
  return (
    <div className='searchDiv grid sp-10 bg-greyIsh rounded-[10px] p-[3rem]'>
          <form action="">
               <div className='firstDiv flex justify-between  items-center rounded-[20px] gap[10px] bg-white p-5 shadow-lg shadow-greyIsh-700'>
                    <div className='flex gap-2 items-center'>
                         <AiOutlineSearch className='text-[45px] icon'/>
                         <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Wettin you dey find?'/>
                         <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon'/>
                    </div>
                    <div className='flex gap-2 items-center'>
                         <BsFillPersonVcardFill className='text-[45px] icon'/>
                         <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Check pesin name'/>
                         <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon'/>
                    </div>
                    <div className='flex gap--2 items-center'>
                         <CiLocationOn className='text-[45px] icon'/>
                         <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Who dey around?'/>
                         <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon'/>
                    </div>

                    <button className='bg-blueColor h-full p-3 px-10 rounded-[50px] text-white cursor-pointer hover:bg-blue-300'>Search</button>

               </div>
          </form>

          <div className='secDiv flex items-center gap-5 justify-center'>

               <div className='singleSearch flex items-center gap-2'>
                    <label htmlFor='relevance' className=' text-[#808080] font-semibold mt-10'>
                    Sort by stars:</label>

                    <select name="" id='stars' className='bg-white rounded-[10px] px-5 py-1 mt-10'>
                         <option value="">⭐️⭐️⭐️⭐️⭐️</option>
                         <option value="">⭐️⭐️⭐️⭐️</option>
                         <option value="">⭐️⭐️⭐️</option>
                         <option value="">⭐️⭐️</option>
                         <option value="">⭐️</option>
                    </select>
               </div>


               <div className='singleSearch flex items-center gap-2'>
                    <label htmlFor='relevance' className=' text-[#808080] font-semibold mt-10'>
                    Sort by distance:</label>

                    <select name="" id='distance' className='bg-white rounded-[10px] px-3 py-1 mt-10'>
                         <option value="">0m - 1km</option>
                         <option value="">2km - 10km</option>
                         <option value="">10km {'>>>'} </option>
                        
                    </select>
               </div>


               <div className='singleSearch flex items-center gap-2'>
                    <label htmlFor='relevance' className=' text-[#808080] font-semibold mt-10'>
                    Sort by No. customers:</label>

                    <select name="" id='relevance' className='bg-white rounded-[10px] px-5 py-1 mt-10'>
                         <option value="">1 - 10</option>
                         <option value="">10 - 50</option>
                         <option value="">50 - 100</option>
                         <option value="">100 - 200</option>
                         <option value="">200 {'>>>'}</option>
                    </select>
               </div>
          </div>
    </div>
  )
}

export default Search
