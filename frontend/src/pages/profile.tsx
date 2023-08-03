import { useEffect }  from 'react'

import { useState } from 'react'
import Modal from './modal'
import image from '../assets/images/cartoon-camera-clicking-vector.jpeg'




const profile = () => {

     const profile = JSON.parse(localStorage.getItem('profile')) 
     const [openModal, setOpenmodal] = useState(false);
     const [profileDetails, setProfileDetails] = useState(profile)

     console.log(profileDetails)

    const handleModal = (value) =>{
     setProfileDetails(value)
     console.log(value)
    }
    
//     useEffect(()=>{
      
     
//           console.log(profile)
//     })
  return <>
     <div>
          <div className="profile">
                <div className='floor d-flex flex-row justify-content-around'>
                         <div className="heads d-flex flex-column align-items-center">
                              <img src={image} alt="" className=' mt-4' />
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
               { openModal && <Modal handleModal={handleModal} closeModal={setOpenmodal}/> }
                <div className='neww'>
                    <h3>Username</h3>
                    <h5>{profileDetails?.username}</h5>
                    <h3>Firstname</h3>
                    <h5>weh</h5>
                    <h3>Email</h3>
                    <h5>weh</h5>
                    <h3>Skill</h3>
                    <h5>weh</h5>
                    <h3>Gender</h3>
                    <h5>weh</h5>
                    <h3>City</h3>
                    <h5>weh</h5>
                    <h3>State</h3>
                    <h5>weh</h5>
                    <h3>Country</h3>
                    <h5>weh</h5>
                    <h3>Description</h3>
                    <h5>weh</h5>
                           
                </div>
          
          </div>
     </div>
  </>
    
}

export default profile
