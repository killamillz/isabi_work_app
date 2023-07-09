// import React from 'react'
// import { Link } from 'react-router-dom'

// const signup = () => {
//      return <>
//           <form className='container-xxl p-5 d-flex flex-column justify-content-around'>
//                <label >Firstname</label>
//                <input type='' placeholder='first name'></input>
//                <label >Last name</label>
//                <input type='email' placeholder='last name'></input>
//                <label >email</label>
//                <input type='email' placeholder='username'></input>
//                <label >Location</label>
//                <select name="Location" id="location">
//                     <option value="Lagos">Lagos</option>
//                     <option value="Benin">Benin</option>
//                     <option value="Abuja">Abuja</option>
//                     <option value="Kano">Kano</option>
//                </select>
//                <label >email</label>
//                <input type='email' placeholder='Email'></input>
//                <label >password</label>
//                <input type='password' placeholder='*********'></input>
//                <Link to="/profile"> <button type="submit" className='mt-3' >Log in</button> </Link> 
//           </form>
//      </>
// }

// export default signup

import React from 'react'
import { Link } from 'react-router-dom'

function signup() {
  return (
     <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
     <div className='bg-white p-3 rounded w-25'>
          <h2>Sign-Up</h2>
           <form action="">
           <div className='mb-3'>
                       <label htmlFor="name"><strong>Name</strong> </label>
                       <input type="text" placeholder='Enter Name' className='form-control rounded-0'/>
                 </div>
                 <div className='mb-3'>
                       <label htmlFor="email"><strong>Email</strong> </label>
                       <input type="email" placeholder='Enter Email' className='form-control rounded-0'/>
                 </div>
                 <div className='mb-3'>
                       <label htmlFor="password"><strong>Password</strong></label>
                       <input type="password" placeholder='Enter Password' className='form-control rounded-0'/>
                 </div>
                 <button className='btn btn-success w-100 rounded-0'>Sign Up</button>
                 <p>You agree to our terms and policies</p>
                 <Link to="/login" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Log in</Link>

           </form>
     </div>
   </div>
  )
}

export default signup