import React from 'react'

import { useState } from 'react'
import Modal from './modal'





const profile = () => {

     const [openModal, setOpenmodal] = useState(false);
  return <>
     <div>
          <div className="profile">
                <div className='floor d-flex flex-row justify-content-around'>
                         <div className="heads d-flex flex-column align-items-center">
                              {/* <img src={images} alt="" className=' mt-4' /> */}
                             
                              <h5 className='mt-3'> click to edit profile pic</h5>
                         </div>
                         <div>
                         <button className='btn m-5' onClick={()=>{
                              setOpenmodal(true)
                         }}>Edit profile</button>
                         </div>
                </div>
                <div>
               
                </div>
               { openModal && <Modal closeModal={setOpenmodal}/> }
          
          </div>
     </div>
  </>
    
}

export default profile
